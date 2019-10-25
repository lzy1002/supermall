<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    props: {
      probetype: {
        type: Number,
        default: 0
      },
      pullupload: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        BScroll: null
      }
    },
    methods: {
      scrollTo(x=0, y=0, time=1000){
        this.BScroll && this.BScroll.scrollTo(x, y, time);
      },
      finishUpLoad(){
        this.BScroll && this.BScroll.finishPullUp();
      },
      refresh(){
        this.BScroll && this.BScroll.refresh();
      }
    },
    mounted(){
      this.BScroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probetype,
        pullUpLoad: this.pullupload
      });

      this.BScroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });

      this.BScroll.on("pullingUp", () => {
        console.log("触发了");
        this.$emit("loadmore");
      })
    }
  }
</script>

<style scoped>

</style>
