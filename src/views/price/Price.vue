<template>
  <div>
    <h2>购物车</h2>
  </div>
</template>
<script>
export default {
  name: "Price",
  created() {
    function debounce(fn, wait) {
      var timer = null;
      return function() {
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
      };
    }

    function handle() {
      console.log(Math.random());
    }

    window.addEventListener("resize", debounce(handle, 1000));
  }
};
</script>