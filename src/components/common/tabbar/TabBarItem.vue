<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-iconActive"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'black'
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
  flex-direction: column;
}
.tabbar-item img {
  display: inline-block;
  vertical-align: middle;
}
.tabbar-item div:nth-child(2){
  color: #1296db;
}
</style>