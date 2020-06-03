
<template>
  <div class="tabcontrol">
<<<<<<< HEAD
    <div v-for="(item,index) in titles" :class="{controlActive:index===controlindex}" @click="controlClick(index)">
=======
    <div
      v-for="(item,index) in titles"
      :class="{tabActive:tabcontrolindex===index}"
      @click="tabClick(index)"
    >
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
<<<<<<< HEAD
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
  
=======
  data() {
    return {
      tabcontrolindex: 0
    };
  },
  methods: {
    tabClick(index) {
        this.tabcontrolindex=index
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  }
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  margin-top: 20px;
}
.tabcontrol div {
  flex: 1;
  text-align: center;
  
}
.tabActive {
  color: #ff8198;
}
.tabActive span{
border-bottom:2px solid #ff8198;


<<<<<<< HEAD
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
=======
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa
}
</style>