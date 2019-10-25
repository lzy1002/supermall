<template>
  <div class="check-bottom" :class="{active:isActive}">
    <img src="../../../assets/imgs/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-bottom {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #ccc;
  }
  .check-bottom.active {
    background-color: red;
    border-color: red;
  }
  .check-bottom img {
    width: 100%;
  }

</style>
