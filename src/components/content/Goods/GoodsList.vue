<template>
  <div class="goods_list">
    <goods-list-item v-for="item in goods" :goodsItem="item">

    </goods-list-item>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
 
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.goods_list{
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
}
</style>