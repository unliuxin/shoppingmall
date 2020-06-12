<template>
  <div class="detail_basic_info">
    <div class="info_title">
      <p>{{goods.title}}</p>
    </div>
    <div class="info_price">
      <span class="info_price">{{goods.price}}</span>
      <span class="info_oldprice">{{goods.oldPrice}}</span>
      <span class="info_discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div class="info_columns">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="info_services">
      <span v-for="index in goods.services.length-1" :key="index" class="info_services_item">
        <img :src="goods.services[index-1].icon" />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBasicInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.info_title p {
  padding: 13px 5px;
  color: #4b4949;
  letter-spacing: 1px;
  font-size: 14px;
}
.info_oldprice {
  color: #999;
  font-size: 16px;
  font-weight: 100;
  text-decoration: line-through;
  margin: 0 7px;
  margin-left: 5px;
}
.info_price {
  color: #ff5777;
  font-size: 19px;
  font-weight: 700;
  margin-left: 5px;
}
.info_discountDesc {
  background: #ff5777;
  color: white;
  font-size: 9px;
  font-weight: 100;
  padding: 3px 9px;
  border-radius:8px;
}
.info_columns {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  padding-top: 25px;
  font-size: 15px;
  color: #333;
  border-bottom: 1px solid #e9e6e6;
}
.info_services_item img {
  width: 11%;
}
.info_services_item span {
  font-size: 14px;
}
.info_services {
  display: flex;
  justify-content: space-between;
  padding: 22px 5px;
}
.detail_basic_info {
  border-bottom: 5px solid #f2f5f8;
}
</style>