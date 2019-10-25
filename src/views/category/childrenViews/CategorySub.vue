<template>
  <div class="category-sub">
    <div class="category-sub-item" v-for="(item, index) in subs">
      <a href="javascript:;">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategorySub",
    props: {
      subs: {
        type: Array,
        default(){
          return []
        }
      }
    },
    mounted(){
      console.log(this.subs);
    }
  }
</script>

<style scoped>
  .category-sub {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
  }
  .category-sub-item {
    width: 80px;
    margin: 0 6px 5px;
  }
  .category-sub-item a {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .category-sub-item a img {
    width: 60px;
    height: 60px;
  }
  .category-sub-item a p {
    font-size: 14px;
    margin-top: 6px;
  }
</style>
