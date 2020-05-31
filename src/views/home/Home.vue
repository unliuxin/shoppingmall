<template>
  <div id="home">
    <nav-bar class="navbarhome">
      <div slot="navbar_center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-views :recommends="recommends" />
    <popular-views />
    <tab-control :titles="['流行','新款','精选']" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper";
import RecommendViews from "./homechild/RecommendViews";
import PopularViews from "./homechild/PopularViews";

import TabControl from "components/common/tabControl/TabControl";

import { getHomeMultiData, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendViews,
    PopularViews,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: [],
      goods: {
        pops: { page: 0, list: [] },
        newgoods: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pops");//拿到流行的数据
    this.getHomeGoods("newgoods");//拿到新款的数据
    this.getHomeGoods("sell");//拿到精选的数据
  },
  methods: {
    //请求轮播和轮播下方数据
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    //请求商品数据
    //getHomeGoods（type）里面的type参数动态调用上方pops、newgoods、sell，请求的数据利用push方法添进去
    getHomeGoods(type) {
      const page = this.goods[type] + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.navbarhome div {
  text-align: center;
  color: white;
}
</style>>
