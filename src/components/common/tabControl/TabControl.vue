
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :class="{controlActive:index===controlIndex}" @click="controlClick(index)" class="tab-control-item">
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
      controlIndex: 0
    };
  },
  methods: {
    controlClick(index) {
      this.controlIndex = index;
       this.$emit('tabClick', index)//将子组件的点击事件传到父组件home.vue中
    }
  },
  
};
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .controlActive {
    color: var(--color-high-text);
  }

  .controlActive span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>