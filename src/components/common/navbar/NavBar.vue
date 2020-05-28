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
}
.navbar_left,.navbar_right{
    width: 15%;
    background: #ff4466;
}
.navbar_center{
    flex: 1;
    background:#ff4466 ;
}
</style>