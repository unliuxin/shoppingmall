<template>
  <div class="detail">
    <detail-navbar></detail-navbar>
    <scroll :probeType="2" class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-basic-info :goods="goods"></detail-basic-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-img-info :img-info="imagesInfo" @imagesLoad="imagesLoad"></detail-img-info>
      <detail-goods-params :goodsparamsinfo="paramsInfo"></detail-goods-params>
    </scroll>
  </div>
</template>

<script>
import DetailNavbar from "./detailChild/DetailNavbar";
import DetailSwiper from "./detailChild/DetailSwiper";
import DetailBasicInfo from "./detailChild/DetailBasicInfo";
import DetailShopInfo from "./detailChild/DetailShopInfo";
import scroll from "components/common/scroll/Scroll";
import DetailImgInfo from './detailChild/DetailImgInfo';
import DetailGoodsParams from './detailChild/DetailGoodsParams'
import { getDetail, Goods, Shop, GoodsParams } from "network/detail";
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
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      imagesInfo:{},
      paramsInfo:{}
    };
  },
  created() {
    //保存传入相应的商品id
    this.iid = this.$route.params.iid;

    //根据iid拿到相应商品的数据
    getDetail(this.iid).then(res => {
      // console.log(res);

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
      
      this.paramsInfo = new GoodsParams(res.result.itemParams.info,res.result.itemParams.rule)
      console.log(this.paramsInfo);
      
    });
  },
  methods:{
    imagesLoad(){
      this.$refs.scroll.bscroll.refresh();
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
.content{
  height: calc(100% - 44px);
}
</style>