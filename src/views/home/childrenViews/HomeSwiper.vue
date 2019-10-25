<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banner">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "../../../components/common/swiper/index.js"

  export default {
    name: "HomeSwiper",
    data(){
      return {

      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banner: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      imgLoad(){
        this.$emit("swiperimageload");
      }
    }

  }
</script>

<style scoped>

</style>
