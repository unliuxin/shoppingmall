<template>
  <div id="navbartop">
    <div class="navbar_left">
      <slot name="navbar_left"></slot>
    </div>
    <div class="navbar_center">
      <slot name="navbar_center"></slot>
    </div>
    <div class="navbar_right">
      <slot name="navbar_right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>


<style scoped>
#navbartop{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 14px 0px 5px #767373;
    z-index: 9;
    background: white;
    position: absolute;
    z-index: 9;
    width: 100%;
    top:0;
}
.navbar_left,.navbar_right{
    width: 15%;
    
}
.navbar_center{
    flex: 1;
    
}
</style>