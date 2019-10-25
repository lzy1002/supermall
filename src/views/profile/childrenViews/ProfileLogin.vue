<template>
  <div class="profile-login">
    <svg class="icon user" aria-hidden="true">
      <use xlink:href="#icon-yonghu" ></use>
    </svg>
    <div class="login">
      <p>登录/注册</p>
      <p class="phone">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouji" ></use>
        </svg>
        暂无绑定手机号
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileLogin"
  }
</script>

<style scoped>
  .profile-login {
    padding: 15px;
    background-color: lightpink;
    position: relative;
  }
  .profile-login:after {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    transform: rotate(45deg);
    position: absolute;
    right: 20px;
    top: 30px;

  }
  .user {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    vertical-align: middle;
  }
  .login {
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
  }
  .login p {
    color: #fff;
  }
  .phone {
    margin-top: 5px;
  }
</style>
