<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" color="hotpink">
        <img slot="icon" class="item-icon" src="../../../assets/imgs/tabbar/home.svg" alt="">
        <img slot="icon-active" class="item-icon" src="../../../assets/imgs/tabbar/home_active.svg" alt="">
        <div slot="text" class="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" color="hotpink">
        <img slot="icon" class="item-icon" src="../../../assets/imgs/tabbar/category.svg" alt="">
        <img slot="icon-active" class="item-icon" src="../../../assets/imgs/tabbar/category_active.svg" alt="">
        <div slot="text" class="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" color="hotpink">
        <img slot="icon" class="item-icon" src="../../../assets/imgs/tabbar/cart.svg" alt="">
        <img slot="icon-active" class="item-icon" src="../../../assets/imgs/tabbar/cart_active.svg" alt="">
        <div slot="text" class="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" color="hotpink">
        <img slot="icon" class="item-icon" src="../../../assets/imgs/tabbar/profile.svg" alt="">
        <img slot="icon-active" class="item-icon" src="../../../assets/imgs/tabbar/profile_active.svg" alt="">
        <div slot="text" class="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar.vue";
  import TabBarItem from "../../common/tabbar/TabBarItem.vue";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
