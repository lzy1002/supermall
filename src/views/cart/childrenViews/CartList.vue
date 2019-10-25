<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartlist" :goodsitem="item"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem.vue";

  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    props: {
      cartlist: {
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .cart-list {
    width: 100%;
    overflow: hidden;
  }
</style>
