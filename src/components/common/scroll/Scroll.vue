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
      }
    },
    data(){
      return {
        BScroll: null
      }
    },
    methods: {
      scrollTo(x=0, y=0, time=1000){
        this.BScroll.scrollTo(x, y, time);
      }
    },
    mounted(){
      this.BScroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probetype
      });

      this.BScroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      })
    }
  }
</script>

<style scoped>

</style>
