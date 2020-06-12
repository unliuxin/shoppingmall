<template>
  <div class="goods_list_item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="goodsItem.title" @load="ItemImgLoad" />
    <div class="goodsItem_info">
      <p>{{goodsItem.title}}</p>
      <p>
        <span>{{goodsItem.price}}</span>
        <span>{{goodsItem.cfav}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    ItemImgLoad() {
      this.$bus.$emit("imgLoad");
    },
    itemClick() {
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  }
};
</script>
<style scoped>
.goods_list_item {
  width: 47%;
  margin-left: 2%;
  margin-bottom: 2%;
}
.goods_list_item img {
  width: 100%;
  border-radius: 2px;
}
.goodsItem_info p {
  text-align: center;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.goodsItem_info span:first-child {
  color: #ff5777;
  padding-right: 24px;
}
.goodsItem_info {
  position: relative;
}
.goodsItem_info span:first-child::after {
  content: "";
  background: url(" ~assets/img/home/sc.png") 0 0/20px 20px;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 13px;
}
</style>