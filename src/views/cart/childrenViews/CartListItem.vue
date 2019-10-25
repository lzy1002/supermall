<template>
  <div class="cart-list-item">
    <div class="cart-item-left">
      <check-bottom :isActive="goodsitem.checked" @click.native="changeChecked"></check-bottom>
      <img :src="goodsitem.image" alt="">
    </div>
    <div class="cart-item-right">
      <p class="title">{{goodsitem.title}}</p>
      <p class="info">{{goodsitem.desc}}</p>
      <p class="priceAndCount"><span class="price">￥{{goodsitem.nowPrice}}</span><span class="count">x{{goodsitem.count}}</span></p>
    </div>

  </div>
</template>

<script>
  import CheckBottom from "../../../components/content/checkButton/CheckButton.vue";

  export default {
    name: "CartListItem",
    components: {
      CheckBottom
    },
    props: {
      goodsitem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      changeChecked(){
        this.goodsitem.checked = !this.goodsitem.checked;
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    width: 100%;
    height: 130px;
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .cart-item-left {
    flex: 30%;
    display: flex;
    align-items: center;
  }
  .cart-item-left img {
    width: 80px;
    height: 100px;
    border-radius: 6px;
    margin-left: 8px;
  }

  .cart-item-right {
    flex: 70%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .title {
    font-size: 18px;
    color: #000;
  }

  .price {
    color: red;
  }

  .priceAndCount {
    display: flex;
    justify-content: space-between;
  }
</style>
