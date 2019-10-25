<template>
  <div class="feature">
    <a href="#">
      <img src="../../../assets/imgs/home/recommend_bg.jpg" alt="" @load="featureLoad">
    </a>
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    methods: {
      featureLoad(){
        this.$emit("featureimageload");
      }
    }
  }
</script>

<style scoped>
  .feature {

  }
  .feature a {
    display: block;
  }
  .feature a img {
    width: 100%;
  }
</style>
