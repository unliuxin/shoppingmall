<template>
  <div id="home">
    <nav-bar class="navbarhome">
      <div slot="navbar_center">购物街</div>
    </nav-bar>
   
    <scroll class="content" ref="scroll" @pos_scroll="contentScroll" :probeType="2" :pull-up-load="true" @pulling_up="loadMore">
      <home-swiper :banners="banners" />
      <recommend-views :recommends="recommends" />
      <popular-views />
       <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goods="goods[this.currentType].list" />
    </scroll>
    <back-to @click.native="backToClick" v-show="isShowBackTop"/><!--监听组件点击事件-->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper";
import RecommendViews from "./homechild/RecommendViews";
import PopularViews from "./homechild/PopularViews";
import TabControl from "components/common/tabControl/TabControl";
import GoodsList from "components/content/Goods/GoodsList";
import scroll from "components/common/scroll/Scroll";
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
      isShowBackTop:false,
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

    //回到顶部的显示和隐藏
    contentScroll(position){
      this.isShowBackTop = -position.y > 1000
      // console.log(position);
    },

    //上拉加载更多
    loadMore(){
     console.log('上拉加载');
     this.getHomeGoods(this.currentType)
    },

    //回到顶部效果
    backToClick() {
      this.$refs.scroll.bscroll.scrollTo(0, 0, 500);
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
        this.$refs.scroll.bscroll.finishPullUp()
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

#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 9;*/
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}

/*.content {*/
/*height: calc(100% - 93px);*/
/*overflow: hidden;*/
/*margin-top: 44px;*/
/*}*/
</style>>
