<template>
  <div class="cart-bottom-tool">
    <div class="all">
      <check-button class="check-button" :isActive="isAllChecked" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="reduce">
      合计: {{totalPrice}}
    </div>
    <div class="math" @click="goMath">
      去计算({{checkedCount}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton.vue";

  import {mapGetters} from "vuex";

  export default {
    name: "CartBottomTool",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(["cartList"]),
      totalPrice(){
        return this.$store.getters.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.nowPrice * item.count;
        }, 0).toFixed(2);
      },
      checkedCount(){
        return this.$store.getters.cartList.filter(item => item.checked).length;
      },
      isAllChecked(){
        if(!this.cartList.length) return false;
        return !(this.cartList.find(item => !item.checked));
      }
    },
    methods: {
      checkClick(){
        if(this.isAllChecked){
          this.cartList.forEach(item => item.checked = false);
        }else {
          this.cartList.forEach(item => item.checked = true);
        }
      },
      goMath(){
        if(!this.cartList.length) return this.$toast.showToast("请选择商品再来结算哦", 2000);
      }
    }

  }
</script>

<style scoped>
  .cart-bottom-tool {
    width: 100%;
    height: 40px;
    background-color: #eee;
    display: flex;
    position: relative;
  }
  .all {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  .check-button {
    margin: 0 5px;
  }
  .reduce {
    display: flex;
    align-items: center;
  }
  .math {
    width: 100px;
    background-color: orangered;
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
  }
</style>
