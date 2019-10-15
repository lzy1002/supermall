<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tabbar {
    height: 49px;
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: lavenderblush;
    display: flex;
  }
</style>
