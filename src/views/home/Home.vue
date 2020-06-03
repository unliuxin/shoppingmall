<template>
  <div id="home">
    <nav-bar class="navbarhome">
      <div slot="navbar_center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" >
      <home-swiper :banners="banners" />

      <recommend-views :recommends="recommends" />
      <popular-views />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goods="goods[this.currentType].list" />
    </scroll>
    <back-to @click.native="backToClick"/><!--监听组件点击事件-->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper";
import RecommendViews from "./homechild/RecommendViews";
import PopularViews from "./homechild/PopularViews";

import scroll from "components/common/scroll/Scroll";

import TabControl from "components/common/tabControl/TabControl";
import GoodsList from "components/content/Goods/GoodsList";
import backTo from "components/content/backTo/backTo";

import { getHomeMultiData, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendViews,
    PopularViews,
    scroll,
    TabControl,
    GoodsList,
    backTo
  },
  data() {
    return {
      banners: [],
      recommends: [],
      currentType: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
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

    //请求轮播和轮播下方数据
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    //请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
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
