<template>
  <div class="detail-info">
    <div class="info-title">
      <p>{{goods.title}}</p>
    </div>
    <div class="info-price">
      <span class="nowPrice">{{goods.newPrice}}</span><span class="oldPrice">{{goods.oldPrice}}</span><span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-message">
      <span v-for="index in goods.columns.length-1">{{goods.columns[index-1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-features">
      <span v-for="index in goods.services.length-1"><img :src="goods.services[index-1].icon" alt="">{{goods.services[index-1].name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      goods: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-info {
    padding: 3px;
  }

  .info-title {

  }

  .info-title p{
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }

  .info-price {
    padding: 10px 0;
  }
  .info-price span{
    margin: 0 5px;
  }
  .info-price .nowPrice {
    font-size: 26px;
    font-weight: 700;
    color: lightcoral;
  }
  .info-price .oldPrice {
    color: lightslategrey;
    text-decoration: line-through;
  }
  .info-price .discount {
    font-size: 14px;
    color: #fff;
    background-color: lightpink;
    border-radius: 3px;
    padding: 2px 3px;
  }

  .info-message {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  .info-message span {
    color: lightslategrey;
  }

  .info-features {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 20px 0;
    border-bottom: 4px solid #eee;
  }
  .info-features span {
    font-size: 14px;
  }
  .info-features span img {
    width: 14px;
    height: 14px;
    vertical-align: middle;
  }
</style>
