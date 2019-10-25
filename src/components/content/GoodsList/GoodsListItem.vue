<template>
  <div class="goods-list-item" @click="itemClick">
    <div>
      <img v-lazy="changeImg" alt="" @load="itemImgLoad" />
      <p class="title">{{goodsitem.title}}</p>
      <p class="info"><span class="price">{{goodsitem.price}}</span><span class="cfav">{{goodsitem.cfav}}</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsitem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      itemImgLoad(){
        this.$bus.$emit("itemimgload");
      },
      itemClick(){
        this.$router.push("/detail/"+this.goodsitem.iid);
      }
    },
    computed: {
      changeImg(){
        if(this.goodsitem.show){
          return this.goodsitem.show.img;
        }else if(this.goodsitem.image) {
          return this.goodsitem.image;
        }else if(this.goodsitem.img) {
          return this.goodsitem.img;
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
    margin-bottom: 10px;
    width: 48%;
  }
  .goods-list-item div {
    display: block;
    font-size: 14px;
  }
  .goods-list-item div img {
    width: 100%;
    border-radius: 3px;
  }
  .goods-list-item div .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
  }
  .goods-list-item div .info{
    text-align: center;
  }
  .goods-list-item div .info span {
    margin: 0 5px 0 5px;
  }
  .goods-list-item div .info .price {
    color: red;
  }
  .goods-list-item div .info .cfav::before{
    content: "";
    display: inline-block;
    background: url("../../../assets/imgs/common/collect.svg") 0 0;
    background-size: 14px 14px;
    color: #000;
    width: 14px;
    height: 14px;
  }
</style>
