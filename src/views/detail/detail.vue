<template>
  <div class="detail">
    <detail-navbar @titleClick="titlesClick"></detail-navbar>
    <scroll :probeType="2" class="content" ref="scroll" @pos_scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-basic-info :goods="goods"></detail-basic-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-img-info :img-info="imagesInfo" @imageLoad="imgLoad"></detail-img-info>
      <detail-goods-params :goodsparamsinfo="paramsInfo" ref="goodsinfo"></detail-goods-params>
      <detail-comment-info :detailcommentinfo="commentInfo" ref="commentinfo"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommendsinfo"></goods-list>
    </scroll>
    <detail-bottom @addCart="addToCart"></detail-bottom>
    <back-top v-show="isShowBackTop" @click.native="backToClick" />
  </div>
</template>

<script>
import DetailNavbar from "./detailChild/DetailNavbar";
import DetailSwiper from "./detailChild/DetailSwiper";
import DetailBasicInfo from "./detailChild/DetailBasicInfo";
import DetailShopInfo from "./detailChild/DetailShopInfo";
import scroll from "components/common/scroll/Scroll";
import DetailImgInfo from "./detailChild/DetailImgInfo";
import DetailGoodsParams from "./detailChild/DetailGoodsParams";
import DetailCommentInfo from "./detailChild/DetailCommentInfo";
import GoodsList from "components/content/Goods/GoodsList";
import DetailBottom from "./detailChild/DetailBottom";
import backTop from "components/content/backTo/backTo";
import { mapActions } from "vuex";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend
} from "network/detail";
import { debouce } from "common/utils";
export default {
  name: "detail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBasicInfo,
    DetailShopInfo,
    DetailImgInfo,
    scroll,
    DetailGoodsParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottom,
    backTop
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      imagesInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      detailtitleY: [],
      getdetailtitleY: null,
      isShowBackTop: false
    };
  },
  created() {
    //保存传入相应的商品id
    this.iid = this.$route.params.iid;

    //根据iid拿到相应商品的数据
    getDetail(this.iid).then(res => {
      //获取轮播的图片
      this.topImages = res.result.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        res.result.columns,
        res.result.itemInfo,
        res.result.shopInfo.services
      );
      //获取商店信息
      this.shopInfo = new Shop(res.result.shopInfo);

      //获取商品图片信息
      this.imagesInfo = res.result.detailInfo;

      this.paramsInfo = new GoodsParams(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );

      //获取评论信息
      this.commentInfo = res.result.rate.list[0];
    });

    //拿到推荐商品数据
    getRecommend().then(res => {
      this.recommends = res.data.list;
    });

    this.getdetailtitleY = debouce(() => {
      this.detailtitleY = [];
      this.detailtitleY.push(0);
      this.detailtitleY.push(this.$refs.goodsinfo.$el.offsetTop);
      this.detailtitleY.push(this.$refs.commentinfo.$el.offsetTop);
      this.detailtitleY.push(this.$refs.recommendsinfo.$el.offsetTop);
      console.log(this.detailtitleY);
    });
  },

  methods: {
    imgLoad() {
      this.$refs.scroll.bscroll.refresh();
      console.log(this.$refs.scroll.bscroll);
      this.getdetailtitleY;
    },

    // 映射函数
    ...mapActions(['addCart']),
    ...mapActions({
      add: 'addCart'
    }),

    //回到顶部
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    //回到顶部效果
    backToClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    titlesClick(index) {
      this.$refs.scroll.bscroll.scrollTo(0, -this.detailtitleY[index], 200);
    },

    //获取加到购物车商品的信息
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.realPrice = this.goods.realPrice;

      //加入到购物车

      this.$store.commit("addCart", product);
      //commit调用vuex中的mutation中的方法，dispatch调用actiong中的方法
      this.$store.dispatch('addCart', product).then(res => {
       
          this.$toast.show(res, 2000)
          console.log(this.$toast);

        })
      //1.Actions 可以返回一个Promise 2.mapActions映射关系
      // this.addCart(product).then(res => {
      //   console.log(res);
      // })
    }
  }
};
</script>
<style scoped>
.detail {
  height: 100vh;
  z-index: 9;
  background: white;
  padding-top: 44px;
  position: relative;
}
.content {
  height: calc(100% - 44px);
}
</style>