<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner.list"></home-swiper>
    <recommend-view :recommend="recommend.list"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar.vue";
  import HomeSwiper from "./childrenViews/HomeSwiper.vue";
  import RecommendView from "./childrenViews/RecommendView.vue";

  import {getHomeMultidata} from "../../network/home.js";

  export default {
    name: "Home",
    data(){
      return {
        banner: null,
        recommend: null
      }
    },
    components: {
      HomeSwiper,
      NavBar,
      RecommendView
    },
    created(){
      getHomeMultidata().then(res => {
        console.log(res);
        this.banner = res.data.banner;
        this.recommend = res.data.recommend;
      })
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color: lightpink;
    color: #fff;
  }
</style>
