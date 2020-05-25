<template>
  <div id="tabbar">
    <slot></slot>
  </div> 
</template>
<script>
export default {
  name: "TabBar"
};
</script>
<style scoped>
#tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0px 1px 4px 0px black;
  padding: 4px 0;
}
</style>


