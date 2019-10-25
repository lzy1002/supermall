<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return {
        message: "",
        isShow: false
      }
    },
    methods: {
      showToast(message, time){
        this.message = message;
        this.isShow = true;

        setTimeout(() => {
          this.isShow = false;
          this.message = "";
        }, time);
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.75);
    filter: blur(0.4px);
    padding: 10px 8px;
    z-index: 99999;
    border-radius: 6px;
    color: #fff;
  }

</style>
