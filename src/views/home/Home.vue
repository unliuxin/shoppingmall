<template>
  <div id="home">
    <nav-bar class="navbarhome">
      <div slot="navbar_center">购物街</div>
    </nav-bar>
<<<<<<< HEAD
    <scroll class="content" ref="scroll" >
      <home-swiper :banners="banners" />

      <recommend-views :recommends="recommends" />
      <popular-views />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goods="goods[this.currentType].list" />
    </scroll>
    <back-to @click.native="backToClick"/><!--监听组件点击事件-->
=======
    <home-swiper :banners="banners" />
    <recommend-views :recommends="recommends" />
    <popular-views />
    <tab-control :titles="['流行','新款','精选']" />
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper";
import RecommendViews from "./homechild/RecommendViews";
import PopularViews from "./homechild/PopularViews";

<<<<<<< HEAD
import scroll from "components/common/scroll/Scroll";

import TabControl from "components/common/tabControl/TabControl";
import GoodsList from "components/content/Goods/GoodsList";
import backTo from "components/content/backTo/backTo";
=======
import TabControl from "components/common/tabControl/TabControl";
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa

import { getHomeMultiData, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendViews,
    PopularViews,
<<<<<<< HEAD
    scroll,
    TabControl,
    GoodsList,
    backTo
=======
    TabControl
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa
  },
  data() {
    return {
      banners: [],
      recommends: [],
<<<<<<< HEAD
      currentType: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
=======
      titles: [],
      goods: {
        pops: { page: 0, list: [] },
        newgoods: { page: 0, list: [] },
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
<<<<<<< HEAD
    //请求多个数据,如果不加this就会指向上方的方法，加上this才会指向methods里面的方法
    this.getHomeMultiData();

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    //点击切换方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    //回到顶部效果
    backToClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },

=======
    this.getHomeMultiData();
    this.getHomeGoods("pops");//拿到流行的数据
    this.getHomeGoods("newgoods");//拿到新款的数据
    this.getHomeGoods("sell");//拿到精选的数据
  },
  methods: {
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa
    //请求轮播和轮播下方数据
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    //请求商品数据
<<<<<<< HEAD
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
=======
    //getHomeGoods（type）里面的type参数动态调用上方pops、newgoods、sell，请求的数据利用push方法添进去
    getHomeGoods(type) {
      const page = this.goods[type] + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
        console.log(res);
>>>>>>> ec1b72c171235a9e2eee4857d0abfd6cf7485caa
      });
    }
  }
};
</script>
<style scoped>
.home {
  height: 100vh;
}
.navbarhome div {
  text-align: center;
  color: white;
}
.content {
  height: calc(100vh - 101px);
  overflow: hidden;
}
</style>>
