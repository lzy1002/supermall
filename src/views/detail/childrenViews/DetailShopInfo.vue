<template>
  <div class="detail-shop-info">
    <div class="shop-title">
      <img :src="shopinfo.logo" alt="">
      {{shopinfo.name}}
    </div>
    <div class="shop-info">
      <div class="info-left">
        <div class="info-left-div">
          <p class="info-left-item"><span>{{shopinfo.sells | sellCountFilter}}</span><br/><span>总销量</span></p>
          <p class="info-left-item"><span>{{shopinfo.goodsCount}}</span><br/><span>全部宝贝</span></p>
        </div>
      </div>
      <div class="info-right">
        <p v-for="(item, index) in shopinfo.score"><span>{{item.name}}</span><span :style="{color: item.isBetter? 'coral' : 'lightgreen'}">{{item.score}}</span><span class="top" v-if="item.isBetter">高</span><span class="lose" v-else>低</span></p>
      </div>
    </div>
    <div class="button">进店逛逛</div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopinfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    mounted(){
      console.log(this.shopinfo);
    },
    filters: {
      sellCountFilter(value){
        if(value < 10000) return value;
        return (value/10000).toFixed(1) + "万";
      }
    }
  }
</script>

<style scoped>
  .detail-shop-info {
    padding: 10px;
  }
  .shop-title {
    padding-top: 20px;
    font-size: 20px;
  }
  .shop-title img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
    vertical-align: middle;
  }

  .shop-info {
    display: flex;
    padding: 15px 0;
  }
  .info-left, .info-right {
    flex: 1;
    text-align: center;
  }
  .info-left-div {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    border-right: 1px solid #ccc;
  }
  .info-left-div p span {
    line-height: 24px;
  }

  .info-right {

  }
  .info-right p {
    margin-bottom: 8px;
  }
  .info-right p span {
    margin: 0 3px;
  }

  .top,.lose {
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    padding: 2px;
  }
  .top{
    background-color: coral;
  }
  .lose {
    background-color: lightgreen;
  }

  .button {
    width: 120px;
    height: 25px;
    background-color: #cccccc;
    color: #fff;
    font-size: 16px;
    margin: 0 auto;
    text-align: center;
    line-height: 25px;
    border-radius: 6px;

  }
</style>
