<template>
  <div class="tab-bar-item" @click="changePath">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon-active"></slot></div>
    <div :style="activeColor"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String
      },
      color: {
        type: String,
        default: "red"
      }
    },
    methods: {
      changePath(){
        this.$router.replace(this.path);
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeColor(){
        return this.isActive ? {color: this.color} : {};
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;
    text-align: center;
  }

  .tab-bar-item .item-icon {
    width: 24px;
    height: 24px;
  }

  .tab-bar-item .item-text {
    font-size: 14px;
  }
</style>
