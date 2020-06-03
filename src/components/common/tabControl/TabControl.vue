<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :class="{controlActive:index===controlindex}" @click="controlClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      controlindex: 0
    };
  },
  methods: {
    controlClick(index) {
      this.controlindex = index;
       this.$emit('tabClick', index)//将子组件的点击事件传到父组件home.vue中
    }
  },
  
};
</script>

<style scoped>

.tabcontrol {
  display: flex;
  flex-direction: row;
  background-color: white;
  position: sticky;
  top: 0px;
  padding-top: 14px;
  padding-bottom: 10px;
  z-index: 99
}
.tabcontrol div {
  flex: 1;
  text-align: center;
}
.tabcontrol span {
  flex: 1;
}
.controlActive {
  color: #ff8198;
}
.controlActive span {
  border-bottom: 2px solid;
  padding-bottom: 2px;
  transform: translateX(30%);
  transition: .5;
}
</style>