<template>
  <div id="MainTabBar">
    <tabbar>
      <tab-bar-item path="/Home">
        <img src="~assets/img/tabbarimg/home.png" alt slot="item-icon" />
        <img src="~assets/img/tabbarimg/homeActive.png" alt slot="item-iconActive" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/Fenlei">
        <img src="~assets/img/tabbarimg/fenlei.png" alt slot="item-icon" />
        <img src="~assets/img/tabbarimg/fenleiActive.png" alt slot="item-iconActive" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/Price">
        <img src="~assets/img/tabbarimg/price.png" alt slot="item-icon" />
        <img src="~assets/img/tabbarimg/priceActive.png" alt slot="item-iconActive" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/Me">
        <img src="~assets/img/tabbarimg/me.png" alt slot="item-icon" />
        <img src="~assets/img/tabbarimg/meActive.png" alt slot="item-iconActive" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    tabbar,
    TabBarItem
  }
};
</script>

<style scoped>
#MainTabBar{
  margin-top: 75px;
  display: block;
}
</style>