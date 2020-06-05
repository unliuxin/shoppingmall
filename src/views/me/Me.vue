<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <button @click="scrollClick">按钮</button>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
      <li>client?http://192</li>
    </ul>
  </div>
</template>
<script>
import bScroll from "better-scroll";
export default {
  name: "Me",

  mounted() {
    let scroll = new bScroll(this.$refs.wrapper, {
     probeType: 3
    });

    scroll.on("scroll", position => {
      console.log(position);
    });

  },
  methods: {
    scrollClick() {
      console.log("scrollClick");
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  overflow: hidden;
  background: red;
}
</style>