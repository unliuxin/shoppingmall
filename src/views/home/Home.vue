<template>
  <div id="home">
    <nav-bar class="navbarhome">
      <div slot="navbar_center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-views :recommends="recommends"/>
    <popular-views/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./homechild/HomeSwiper";
import RecommendViews from './homechild/RecommendViews'
import PopularViews from './homechild/PopularViews'
import { getHomeMultiData } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendViews,
    PopularViews
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res);
    });
  }
};
</script>
<style scoped>
.navbarhome div {
  text-align: center;
  color: white;
}
</style>>
