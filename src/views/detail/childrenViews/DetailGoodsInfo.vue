<template>
  <div>
    <div class="desc">
      <p>{{detailinfo.desc}}</p>
      <p>{{detailinfo.detailImage[0].desc}}</p>
    </div>
    <div class="imgs">
      <img v-for="(item, index) in detailinfo.detailImage[0].list" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    data(){
      return {
        count: 0,
        imgLength: 0
      }
    },
    props: {
      detailinfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imgLoad(){
        if(++this.count === this.imgLength){
          this.$emit("detailImgLoad");
        }
      }
    },
    // watch: {
    //   detailinfo: (value) => {
    //     this.imgLength = value.detailImage[0].list.length;
    //     console.log(this.imgLength);
    //   }
    // },
    mounted(){
      this.imgLength = this.detailinfo.detailImage[0].list.length;
    }
  }
</script>

<style scoped>
  .desc {
    width: 100%;
    padding: 5px;
    border-bottom: 3px solid #ddd;
  }
  .desc p {
    line-height: 25px;

  }
  .imgs img{
    width: 100%;
  }
</style>
