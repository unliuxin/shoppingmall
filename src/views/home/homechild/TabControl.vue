
<template>
  <div class="tabcontrol">
    <div
      v-for="(item,index) in titles"
      :class="{tabActive:tabcontrolindex===index}"
      @click="tabClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
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


}
</style>