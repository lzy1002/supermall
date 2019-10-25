import {deBounce} from "./utils.js";

export const imgLoadMixin = {
  mounted(){
    const refresh = deBounce(this.$refs.scroll.refresh, 200);
    this.goodsItemListener = () => {
      refresh();
    };
    this.$bus.$on("itemimgload", this.goodsItemListener);
  }
};

export const backTopMixin = {
  methods: {
    scrollTo(){
      this.$refs.scroll.scrollTo();
    }
  },
  computed: {
    showBackTop(){
      return this.position.y <= -1000;
    }
  }
};
