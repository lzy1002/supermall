<template>
  <div class="goodslist">
    <goods-list-item class="goodsitem" v-for="(item, index) in goods" :goodsitem="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem.vue";
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

  }
</style>
