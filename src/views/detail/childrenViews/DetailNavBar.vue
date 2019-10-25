<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/imgs/common/back.svg" alt="">
      </div>
      <div slot="center" class="nav-title">
        <div v-for="(item, index) in titles" @click="itemClick(index)" :class="{active: currentIndex===index}" class="nav-title-item">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar.vue";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data(){
      return {
        titles: ["商品", "参数", "评论", "推荐"],
        currentIndex: 0
      }
    },
    methods: {
      backClick(){
        this.$router.back();
      },
      itemClick(index){
        this.currentIndex = index;
        this.$emit("titleClick", index);
      }
    }
  }
</script>

<style scoped>
  .detail-nav-bar {
    background-color: #fff;
  }

  .back img {
    margin-top: 12px;
    margin-left: 12px;
  }

  .nav-title {
    display: flex;
  }

  .nav-title-item {
    flex: 1;
    font-size: 14px;
  }

  .nav-title-item.active{
    color: lightcoral;
  }
</style>
