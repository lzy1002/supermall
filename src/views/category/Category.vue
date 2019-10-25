<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="category-left">
      <scroll class="scroll-left">
        <category-title v-if="categoryTitles" :titles="categoryTitles" @titleClick="titleClick"></category-title>
      </scroll>
    </div>
    <div class="category-right">
      <scroll class="scroll-right" ref="scroll" :probetype="3" @scroll="scroll">
        <category-sub v-if="subCategory" :subs="subCategory"></category-sub>
        <tab-control @changetype="changeType" :typeandtitle="[{type: 'pop', title: '综合'}, {type: 'new', title: '新品'}, {type: 'sell', title: '销量'}]"></tab-control>
        <goods-list class="goodslist" :goods="subDetail[tabType].list"></goods-list>
      </scroll>
    </div>
  </div>
</template>

<script>
  import {getCategoryTitles, getSubCategory, getSubDetail} from "../../network/category.js";

  import NavBar from "../../components/common/navbar/NavBar.vue";
  import Scroll from "../../components/common/scroll/Scroll.vue";

  import TabControl from "../../components/content/TabControl/TabControl.vue";
  import GoodsList from "../../components/content/GoodsList/GoodsList.vue";

  import CategoryTitle from "./childrenViews/CategoryTitle.vue";
  import CategorySub from "./childrenViews/CategorySub.vue";

  import {imgLoadMixin} from "../../common/mixin.js";

  export default {
    name: "Category",
    data(){
      return {
        categoryTitles: null,
        subCategory: null,
        tabType: "pop",
        subDetail: {
          "pop": {list: []},
          "new": {list: []},
          "sell": {list: []}
        },
        goodsItemListener: null,
        position: {x : 0, y : 0},
        leaveY: 0
      }
    },
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      CategoryTitle,
      CategorySub
    },
    mixins: [imgLoadMixin],
    activated(){
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.leaveY, 0);
    },
    deactivated(){
      this.$bus.$off("imgLoadMixin", this.goodsItemListener);
      this.leaveY = this.position.y;
    },
    created(){
      getCategoryTitles().then(res => {
        this.categoryTitles = res.data.category.list;
        console.log(this.categoryTitles);
        this.getSubCategory(this.categoryTitles[0].maitKey);
        this.getSubDetail(this.categoryTitles[0].miniWallkey, "pop");
        this.getSubDetail(this.categoryTitles[0].miniWallkey, "new");
        this.getSubDetail(this.categoryTitles[0].miniWallkey, "sell");
      })
    },
    updated(){
      console.log(this.subDetail["pop"].list);
    },
    methods: {
      titleClick(maitKey, miniWallkey){
        console.log(maitKey, miniWallkey);
        this.getSubCategory(maitKey);
        this.getSubDetail(miniWallkey, "pop");
        this.getSubDetail(miniWallkey, "new");
        this.getSubDetail(miniWallkey, "sell");
        this.$refs.scroll.scrollTo(0, 0, 0);
      },
      getSubCategory(maitKey){
        getSubCategory(maitKey).then(res => {
          console.log(res);
          this.subCategory = res.data.list;
          console.log(this.subCategory);
        })
      },
      changeType(type, index){
        console.log(type, index);
        this.tabType = type;
      },
      getSubDetail(miniWallkey, type){
        getSubDetail(miniWallkey, type).then(res => {
          this.subDetail[type].list = res;
        })
      },
      scroll(position){
        this.position = position;
      }
    }
  }
</script>

<style scoped>
  .category {
    padding-top: 44px;
    padding-bottom: 49px;
    height: 100vh;
    display: flex;
  }
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: lightpink;
    color: #fff;
    z-index: 10;
  }
  .category-left {
    height: 100%;
    width: 20%;
  }
  .scroll-left {
    height: 100%;
  }
  .category-right {
    width: 80%;
    height: 100%;
  }
  .scroll-right {
    width: 100%;
    height: 100%;
  }
</style>
