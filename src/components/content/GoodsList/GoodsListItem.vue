<template>
  <div class="goods-list-item">
    <a :href="goodsitem.link">
      <img :src="goodsitem.show.img" alt="">
      <p class="title">{{goodsitem.title}}</p>
      <p class="info"><span class="price">{{goodsitem.price}}</span><span class="cfav">{{goodsitem.cfav}}</span></p>
    </a>
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
    }
  }
</script>

<style scoped>
  .goods-list-item {
    margin-bottom: 10px;
    width: 48%;
  }
  .goods-list-item a {
    display: block;
    font-size: 14px;
  }
  .goods-list-item a img {
    width: 100%;
    border-radius: 3px;
  }
  .goods-list-item a .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
  }
  .goods-list-item a .info{
    text-align: center;
  }
  .goods-list-item a .info span {
    margin: 0 5px 0 5px;
  }
  .goods-list-item a .info .price {
    color: red;
  }
  .goods-list-item a .info .cfav::before{
    content: "";
    display: inline-block;
    background: url("../../../assets/imgs/common/collect.svg") 0 0;
    background-size: 14px 14px;
    color: #000;
    width: 14px;
    height: 14px;
  }
</style>
