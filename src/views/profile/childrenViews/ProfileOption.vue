<template>
  <div class="profile-option">
    <div class="option-top">
      <div class="option-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
        <span>我的消息</span>
      </div>
      <div class="option-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwu"></use>
        </svg>
        <span>积分商城</span>
      </div>
      <div class="option-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-VIP"></use>
        </svg>
        <span>会员卡</span>
      </div>
    </div>
    <div class="option-bottom">
      <div class="option-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
        <span>我的购物车</span>
      </div>
      <div class="option-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-trademark"></use>
        </svg>
        <span>下载APP</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileOption"
  }
</script>

<style scoped>
  .profile-option {

  }
  .option-top {
    border-bottom: 10px solid #eee;
  }
  .option-item {
    width: 100%;
    height: 40px;
    margin-left: 40px;
    position: relative;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    line-height: 40px;
  }
  .option-item .icon {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 9px;
    left: -30px;
  }
</style>
