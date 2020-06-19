<template>
  <nav-bar>
    <div slot="navbar_left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt />
    </div>
    <div class="titles" slot="navbar_center">
      <div
        class="titles-item"
        v-for="(item,index) in titles"
        :class="{active:currentIndex==index}"
        @click="titleClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavbar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick() {
      this.$router.go(-1);
    }
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
.titles {
  display: flex;
}
.titles-item {
  flex: 1;
  font-size: 14px;
  text-align: center;
}
.navbar_center .navbar_left .navbar_right {
  background: white !important;
}
.back {
  display: flex;
}
.back img {
  margin-top: 12px;
  margin-left: 10px;
  width: 37%;
}
.active {
  color: #ff4466;
}
</style>