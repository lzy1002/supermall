<template>
  <div class="recommend">
    <a :href="item.link" class="recommend_item" v-for="(item, index) in recommend">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </a>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    height: 180px;
    display: flex;
    border-bottom: 10px solid #eee;
  }
  .recommend_item{
    flex: 1;
    text-align: center;
    margin: 8px;
  }
  .recommend_item img {
    width: 100%;
  }
  .recommend_item p {
    margin-top: 10px;
    font-size: 14px;
  }
</style>
