<template>
  <div class="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <scroll class="wrapper" ref="scroll" :probetype="3" @scroll="scrollPosition">
      <home-swiper :banner="banner.list"></home-swiper>
      <recommend-view :recommend="recommend.list"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab" @changetype="changetype" :typeandtitle="[{type: 'pop', title: '流行'}, {type: 'new', title: '新款'}, {type: 'sell', title: '精选'}]"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
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
        position: {x: 0, y: 0}
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
    methods: {
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          console.log(res);
          this.banner = res.data.banner;
          this.recommend = res.data.recommend;
        })
      },
      getHomeGoods(type){
        let page = this.goods[type].page+1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
        })
      },
      changetype(goodstype){
        this.goodstype = goodstype;
      },
      scrollTo(){
        this.$refs.scroll.scrollTo();
      },
      scrollPosition(position){
        this.position = position;
        console.log(position.y)
      }
    },
    computed: {
      showGoods(){
        return this.goods[this.goodstype].list
      },
      showBackTop(){
        return this.position.y <= -1000 ? true : false;
      }
    }
  }
</script>

<style scoped>
  .home {
    padding-top: 44px;
    padding-bottom: 49px;
    height: 100vh;
  }

  .nav-bar{
    background-color: lightpink;
    color: #fff;
  }

  .tab {
    /*position: sticky;*/
    /*top: 44px;*/
    background-color: #ffffff;
  }

  .wrapper {
    height: 100%;
  }


</style>
