<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" ref="navbar" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="wrapper" ref="scroll" :probetype="3" @scroll="scroll">
      <detail-swiper v-if="topImages.length>0" :swiperImgs="topImages"></detail-swiper>
      <detail-info v-if="goods" :goods="goods"></detail-info>
      <detail-shop-info v-if="shops" :shopinfo="shops"></detail-shop-info>
      <detail-goods-info v-if="detailInfo" :detailinfo="detailInfo" @detailImgLoad="detailImgLoad"></detail-goods-info>
      <detail-goods-params v-if="goodsParams" ref="params" :goodsparams="goodsParams"></detail-goods-params>
      <detail-comment-info v-if="commentInfo" ref="comment" :commentinfo="commentInfo"></detail-comment-info>
      <detail-recommend v-if="recommend" ref="recommend" :recommend="recommend"></detail-recommend>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top @click.native="scrollTo" v-show="showBackTop"></back-top>

  </div>
</template>

<script>
  import {mapActions} from "vuex";

  import {getDetaildata, Goods, Shop, GoodsParam, getRecommend} from "../../network/detail.js";

  // import {deBounce} from "../../common/utils.js";
  import {imgLoadMixin, backTopMixin} from "../../common/mixin.js";

  import Scroll from "../../components/common/scroll/Scroll.vue";
  import BackTop from "../../components/content/BackTop/BackTop.vue";

  import DetailNavBar from "./childrenViews/DetailNavBar.vue";
  import DetailSwiper from "./childrenViews/DetailSwiper.vue";
  import DetailInfo from "./childrenViews/DetailInfo.vue";
  import DetailShopInfo from "./childrenViews/DetailShopInfo.vue";
  import DetailGoodsInfo from "./childrenViews/DetailGoodsInfo.vue";
  import DetailGoodsParams from "./childrenViews/DetailGoodsParams.vue";
  import DetailCommentInfo from "./childrenViews/DetailCommentInfo.vue";
  import DetailRecommend from "./childrenViews/DetailRecommend.vue";
  import DetailBottomBar from "./childrenViews/DetailBottomBar.vue";


  export default {
    name: "Detail",
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailGoodsParams,
      DetailCommentInfo,
      DetailRecommend,
      DetailBottomBar,
      BackTop
    },
    data(){
      return {
        iid: null,
        topImages: [],
        goods: null,
        shops: null,
        detailInfo: null,
        goodsParams: null,
        commentInfo: null,
        recommend: null,
        goodsItemListener: null,
        scrollToYs: [],
        currentTitleIndex: null,
        position: {x : 0, y : 0}
      }
    },
    methods: {
      ...mapActions({
        addToCart: "addCart"
      }),

      detailImgLoad(){
        this.$refs.scroll.refresh();

        this.scrollToYs.push(0);
        this.scrollToYs.push(this.$refs.params.$el.offsetTop-44);
        this.scrollToYs.push(this.$refs.comment.$el.offsetTop-44);
        this.scrollToYs.push(this.$refs.recommend.$el.offsetTop-44);
        console.log(this.scrollToYs);
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0, -this.scrollToYs[index], 500);
      },
      scroll(position){
        this.position = position;

        let length = this.scrollToYs.length;
        for(let i = 0; i< length; i++){
          if(this.currentTitleIndex !== i && ((i<length-1 && position.y < -this.scrollToYs[i] && position.y > -this.scrollToYs[i+1]) || (i===length-1 && position.y < -this.scrollToYs[i]))){
            this.currentTitleIndex = i;
            console.log(this.currentTitleIndex);
            this.$refs.navbar.currentIndex = i;
          }
        }
      },
      addCart(){
        let productObj = {};
        productObj.title = this.goods.title;
        productObj.desc = this.goods.desc;
        productObj.image = this.topImages[0];
        productObj.nowPrice = this.goods.nowPrice;
        productObj.iid = this.iid;
        this.addToCart(productObj).then(res => {
          console.log(res);
          this.$toast.showToast(res, 2000);
        })
      }
    },
    created(){
      this.iid = this.$route.params.id;

      getDetaildata(this.iid).then(res => {
        console.log(res);
        this.topImages = res.result.itemInfo.topImages;
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
        this.shops = new Shop(res.result.shopInfo);
        this.detailInfo = res.result.detailInfo;
        this.goodsParams = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
        this.commentInfo = res.result.rate.list[0];
        console.log(this.goods);
      });

      getRecommend().then(res => {
        console.log(res);
        this.recommend = res.data.list;
      })
    },
    mixins: [imgLoadMixin, backTopMixin],
    mounted(){
      // const refresh = deBounce(this.$refs.scroll.refresh, 300);
      // this.goodsItemListener = () => {
      //   refresh();
      // };
      // this.$bus.$on("itemimgload", this.goodsItemListener);
    },
    destroyed(){
      this.$bus.$off("itemimgload", this.goodsItemListener);
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 10;
    background-color: #fff;
    padding-top: 44px;
    height: 100vh;
    padding-bottom: 49px;
  }
  .wrapper {
    height: 100%;
    background-color: #fff;

  }
  .detail-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }

</style>
