<template>
  <div class="category-title">
    <div v-for="(item, index) in titles" class="category-title-list" :class="{active: index===currentIndex}" @click="itemClick(index, item.maitKey, item.miniWallkey)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryTitle",
    data(){
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    mounted(){
      console.log(this.titles);
    },
    methods: {
      itemClick(index, maitKey, miniWallkey){
        this.currentIndex = index;
        this.$emit("titleClick", maitKey, miniWallkey);
        console.log(maitKey, miniWallkey);
      }
    }
  }
</script>

<style scoped>
  .category-title {

  }
  .category-title-list {
    text-align: center;
    height: 45px;
    width: 100%;
    line-height: 45px;
    background-color: #eee;
  }
  .category-title-list.active {
    background-color: #fff;
    border-left: 3px solid lightpink;
  }
</style>
