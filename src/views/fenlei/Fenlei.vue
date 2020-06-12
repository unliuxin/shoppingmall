<template>
  <div class="wrapper">
    <ul>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
      <li>滚动部分是 content 元素</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";


export default {
  name: "Fenlei",
  components: {

  },
 
  mounted() {
    //probeType是侦测滚动的位置   0、1：都不侦测  2：只侦测手指滚动的位置，手指离开就不侦测   3：都实行侦测
    const bscroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      pullingUp: true
    });

    bscroll.on("scroll", position => {
     
    });

    bscroll.on("pullingUp", () => {
     
    });
  }
};
</script>
<style scoped>
.wrapper {
  height: 150px;
  background: red;
  overflow: hidden;
}
</style>