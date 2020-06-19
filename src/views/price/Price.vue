<template>
  <div class="Cart">
    <nav-bar class="Cart_navbar">
      <div slot="navbar_center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./priceChild/CartList";
import { mapGetters } from "vuex";
export default {
  name: "Price",
  components: {
    NavBar,
    CartList
  },
  computed: {
    //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
    ...mapGetters(["cartLength", "cartList"])
  }
};
</script>
<style scoped>
.Cart_navbar {
  background: #ff5777 !important;
}
.Cart_navbar div {
  color: white;
  text-align: center;
}
</style>