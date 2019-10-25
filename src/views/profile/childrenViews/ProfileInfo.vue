<template>
  <div class="profile-info">
    <div class="profile-info-item">
      <p><span class="number">0.00</span>元</p>
      <p class="text">我的余额</p>
    </div>
    <div class="profile-info-item">
      <p><span class="number">0</span>个</p>
      <p class="text">我的优惠</p>
    </div>
    <div class="profile-info-item">
      <p><span class="number">0</span>分</p>
      <p class="text">我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileInfo"
  }
</script>

<style scoped>
  .profile-info {
    width: 100%;
    display: flex;
    border-bottom: 10px solid #eee;
  }
  .profile-info-item {
    padding: 12px 15px;
    flex: 1;
    text-align: center;
  }
  .profile-info-item:nth-child(2) {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  .profile-info-item .text {
    font-size: 12px;
    margin-top: 5px;
  }
  .number {
    font-size: 22px;
    font-weight: 700;
    color: orangered;
  }
</style>
