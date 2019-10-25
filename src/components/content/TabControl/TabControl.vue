<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, i) in typeandtitle" @click="tabClick(i, item.type)" >
      <span :class="{active: i===index}">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        index: 0
      }
    },
    props: {
      typeandtitle: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      tabClick(i, goodstype){
        this.index = i;
        this.$emit("changetype", goodstype,i);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    height: 40px;
    display: flex;
  }
  .tab-control .tab-control-item {
    flex: 1;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  .tab-control-item span{
    padding: 3px;
  }
  .tab-control-item span.active {
    color: lightcoral;
    border-bottom: 2px solid lightcoral;
  }
</style>
