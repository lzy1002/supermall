<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="bar-left-item">
        <i class="icon people"></i>
        <p>客服</p>
      </div>
      <div class="bar-left-item">
        <i class="icon shop"></i>
        <p>店铺</p>
      </div>
      <div class="bar-left-item">
        <i class="icon collection"></i>
        <p>收藏</p>
      </div>
    </div>
    <div class="bar-right">
      <div class="goCart" @click="addCart">
        <span>加入购物车</span>
      </div>
      <div class="buy">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addCart(){
        this.$emit("addCart")
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: #fff;
  }

  .bar-left {
    flex: 50%;
    display: flex;
  }

  .bar-left .bar-left-item {
    flex: 1;
  }

  .bar-left .bar-left-item p {
    text-align: center;
    font-size: 14px;
    margin-top: 2px;
  }

  .bar-left .bar-left-item i {
    width: 22px;
    height: 22px;
    display: block;
    text-align: center;
    margin: 4px auto 0;
  }

  .bar-right {
    flex: 50%;
    display: flex;
  }

  .bar-right .goCart,.buy {
    flex: 1;
    line-height: 49px;
    text-align: center;
  }

  .bar-right .goCart {
    background-color: #ffe817;
    color: #666666;
  }

  .bar-right .buy {
    background-color: #f69;
    color: #fff;
  }

  .icon {
    background: url("../../../assets/imgs/detail/detail_bottom.png") no-repeat;
    background-size: 100%;
  }

  .people {
    background-position: 0 -53px;
  }
  .shop {
    background-position: 0 -98px;
  }
  .collection {
    background-position: 0 0;
  }
</style>
