<template>
  <div class="backto">
    <img src="~assets/img/home/top.png" alt />
  </div>
</template>
<script>
export default {
  name: "backTo"
};
</script>
<style scoped>
.backto {
  position: fixed;
  bottom: 70px;
  right: 0;
  display: flex;
  justify-content: center;
}
.backto img {
  width: 48%;
}
</style>