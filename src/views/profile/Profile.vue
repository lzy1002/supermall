<template>
  <div class="profile">
    <nav-bar class="nav-bar"><div slot="center">我的</div></nav-bar>
    <profile-login></profile-login>
    <profile-info></profile-info>
    <profile-option></profile-option>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar.vue";

  import ProfileLogin from "./childrenViews/ProfileLogin.vue";
  import ProfileInfo from "./childrenViews/ProfileInfo.vue";
  import ProfileOption from "./childrenViews/ProfileOption.vue";

  export default {
    name: "Profile",
    components: {
      NavBar,
      ProfileLogin,
      ProfileInfo,
      ProfileOption
    }
  }
</script>

<style scoped>
  .profile {
    overflow: hidden;
  }
  .nav-bar {
    background-color: lightpink;
    color: #fff;
  }
</style>
