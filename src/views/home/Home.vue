<template>
  <div class="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab tab2" v-show="tabIsShow" ref="tabControl2" @changetype="changetype" :typeandtitle="[{type: 'pop', title: '流行'}, {type: 'new', title: '新款'}, {type: 'sell', title: '精选'}]"></tab-control>
    <scroll class="wrapper" ref="scroll" :probetype="3" :pullupload="true" @scroll="scrollPosition" @loadmore="loadMore">
      <home-swiper v-if="banner" :banner="banner" @swiperimageload="swiperimageload"></home-swiper>
      <recommend-view v-if="recommend" :recommend="recommend"></recommend-view>
      <feature-view @featureimageload="featureimageload"></feature-view>
      <tab-control class="tab" ref="tabControl1" @changetype="changetype" :typeandtitle="[{type: 'pop', title: '流行'}, {type: 'new', title: '新款'}, {type: 'sell', title: '精选'}]"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="scrollTo" v-show="showBackTop"></back-top>
  </div>
</template>

<script>

  import HomeSwiper from "./childrenViews/HomeSwiper.vue";
  import RecommendView from "./childrenViews/RecommendView.vue";
  import FeatureView from "./childrenViews/FeatureView.vue";


  import NavBar from "../../components/common/navbar/NavBar.vue";
  import Scroll from "../../components/common/scroll/Scroll.vue";
  import TabControl from "../../components/content/TabControl/TabControl.vue";
  import GoodsList from "../../components/content/GoodsList/GoodsList.vue";
  import BackTop from "../../components/content/BackTop/BackTop.vue";

  import {getHomeMultidata, getHomeGoods} from "../../network/home.js";
  // import {deBounce} from "../../common/utils.js";
  import {imgLoadMixin, backTopMixin} from "../../common/mixin.js";

  export default {
    name: "Home",
    data(){
      return {
        banner: null,
        recommend: null,
        goodstype: 'pop',
        goods: {
          "pop": {page: 0, list: []},
          "new": {page: 0, list: []},
          "sell": {page: 0, list: []},
        },
        position: {x: 0, y: 0},
        tabOffSetTop: null,
        tabIsShow: false,
        swiperLoad: false,
        featureLoad: false,
        currentIndex: 0,
        currentPosition: 0,
        goodsItemListener: null
      }
    },
    components: {
      HomeSwiper,
      NavBar,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created(){
      this.getHomeMultidata();

      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },
    mixins: [imgLoadMixin, backTopMixin],
    mounted(){
      // const refresh = deBounce(this.$refs.scroll.refresh, 200);
      // this.goodsItemListener = () => {
      //   refresh();
      // };
      // this.$bus.$on("itemimgload", this.goodsItemListener);
    },
    activated(){
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.currentPosition, 0);
    },
    deactivated(){
      this.currentPosition = this.position.y;

      this.$bus.$off("itemimgload", this.goodsItemListener);
    },
    methods: {
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res);
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        let page = this.goods[type].page+1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
          this.$refs.scroll.finishUpLoad();
        })
      },
      changetype(goodstype, i){
        this.goodstype = goodstype;
        this.$refs.tabControl1.index = i;
        this.$refs.tabControl2.index = i;
        this.currentIndex = i;
      },
      // scrollTo(){
      //   this.$refs.scroll.scrollTo();  //因将回到顶部部分代码封装到了mixin中 所以注掉
      // },
      scrollPosition(position){
        this.position = position;
        // console.log(position.y);
        this.tabIsShow = position.y < -this.tabOffSetTop;
      },
      loadMore(){
        console.log("加载更多");
        this.getHomeGoods(this.goodstype);
      },
      swiperimageload(){
        this.swiperLoad = true;
        if(this.swiperLoad && this.featureLoad){
          this.tabOffSetTop = this.$refs.tabControl1.$el.offsetTop-44;
        }
      },
      featureimageload(){
        this.featureLoad = true;
        if(this.swiperLoad && this.featureLoad){
          this.tabOffSetTop = this.$refs.tabControl1.$el.offsetTop-44;
        }
      }
    },
    computed: {
      showGoods(){
        return this.goods[this.goodstype].list
      },
      // showBackTop(){
      //   return this.position.y <= -1000;  //因将回到顶部部分代码封装到了mixin中 所以注掉
      // }
    }
  }
</script>

<style scoped>
  .home {
    padding-bottom: 49px;
    height: 100vh;
  }

  .nav-bar{
    background-color: lightpink;
    color: #fff;
    position: relative;
    z-index: 9;
  }

  .tab {
    /*position: sticky;*/
    /*top: 44px;*/
    background-color: #ffffff;
  }

  .tab2{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .wrapper {
    height: 100%;
  }


</style>
