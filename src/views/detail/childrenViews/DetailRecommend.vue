<template>
  <div>
    <div class="title">
      为您推荐
    </div>
    <goods-list :goods="recommend"></goods-list>
  </div>
</template>

<script>
  import GoodsList from "../../../components/content/GoodsList/GoodsList.vue"

  export default {
    name: "DetailRecommend",
    props: {
      recommend: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      GoodsList
    }
  }
</script>

<style scoped>
  .title {
    padding: 5px;
    height: 40px;
    line-height: 35px;
  }
</style>
