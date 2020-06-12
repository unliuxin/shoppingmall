<template>
  <div class="goods_info">
    <div class="info_desc">
      <div class="info_desc_before desc_star"></div>
      <div class="info_desc_text">{{imgInfo.desc}}</div>
      <div class="info_desc_after desc_star"></div>
    </div>
    <div class="info_imgs">
      <p>{{imgInfo.detailImage[0].key}}</p>
      <ul>
        <li v-for="(item,index) in imgInfo.detailImage[0].list" :key="index" @load="imgsLoad">
          <img :src="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImgInfo",
  props: {
    imgInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  deta() {
    return {
      imagesLength: 0,
      counter: 0
    };
  },
  methods: {
      //判断图片的个数和counter相等时，发到父组件事件
    imgsLoad() {
        if(++this.counter === this.imagesLength){
            this.$emit('imagesLoad')
        }
    }
  },
  watch: {
      //监听图片的个数
    imgInfo() {
      this.imagesLength = this.imgInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.info_imgs ul li img {
  width: 100%;
}
.info_desc_text {
  font-size: 14px;
  color: #555;
  padding: 15px 0;
}
.info_desc {
  overflow: hidden;
  padding: 15px 20px;
}
.desc_star {
  width: 100px;
  height: 1px;
  position: relative;
  background-color: #555;
}
.info_desc_before::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  top: -5px;
  left: 0;
}
.info_desc_after::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  right: 0;
  top: -5px;
}
.info_desc_before {
  float: left;
}
.info_desc_after {
  float: right;
}
.info_imgs p {
  padding: 0 0 15px 15px;
}
</style>