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
  data() {
    return {
      bscroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //probeType是侦测滚动的位置   0、1：都不侦测  2：只侦测手指滚动的位置，手指离开就不侦测   3：都实行侦测
    //pullingUp上拉加载更多
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true, //better-scroll默认滚动区域的内容里面点击事件无效，需要这里设置点击事件为true，滚动区域的点击事件才可以
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    //监听滚动的位置
    this.bscroll.on("scroll", position => {
      this.$emit("pos_scroll", position);
    });

    //上拉加载更多
    this.bscroll.on("pullingUp", () => {
      this.$emit("pulling_up");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.bscroll && this.bscroll.scrollTo(x, y, time);
    }
  },
  getScrollY() {
    return this.bscroll ? this.bscroll.y : 0;
  }
};
</script>
<style scoped>
</style>