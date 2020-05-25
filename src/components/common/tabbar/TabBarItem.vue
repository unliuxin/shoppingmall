<template>
  <div class="tabbar-item" @click="itemClick">
    <slot v-if="isActive" name="item-icon"></slot>
    <slot v-else name="item-iconActive"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {

    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
  },
  methods: {
    itemClick() {  
      this.$router.replace(this.path)
    }
  }
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.tabbar-item img {
  width: 25%;
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: 0;
}

</style>