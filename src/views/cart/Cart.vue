<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list :cartlist="cartList"></cart-list>
    </scroll>
    <cart-bottom-tool></cart-bottom-tool>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar.vue";
  import Scroll from "../../components/common/scroll/Scroll.vue";

  import CartList from "./childrenViews/CartList.vue";
  import CartBottomTool from "./childrenViews/CartBottomTool.vue";

  import {mapGetters} from "vuex";

  export default {
    name: "Cart",
    components: {
      NavBar,
      Scroll,
      CartList,
      CartBottomTool
    },
    activated(){
      this.$refs.scroll.refresh();
    },
    computed: {
      ...mapGetters(["cartLength", "cartList"])
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 89px;
    width: 100%;
  }
  .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: lightpink;
    color: #fff;
    z-index: 10;
  }
  .content {
    width: 100%;
    height: 100%;

  }
</style>
