<template>
  <div class="comment" v-if="Object.keys(detailcommentinfo).length !== 0">
    <div class="user_comment">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment_info">
      <div class="comment_info_user">
        <img :src="detailcommentinfo.user.avatar" alt="">
        <h3>{{detailcommentinfo.user.uname}}</h3>
      </div>
      <p>{{detailcommentinfo.content}}</p>
      <p class="info_user">
        <span>{{detailcommentinfo.created | showdate}}</span>
        <span>{{detailcommentinfo.style}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    detailcommentinfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  filters: {
    //过滤器，将传过来的时间戳转为正常时间格式
    showdate(value) {
      var now = new Date(value),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        now.toTimeString().substr(0, 8)
      );
    }
  }
};
</script>
<style scoped>
.user_comment {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 20px 12px;
  border-bottom: 1px solid #d7d7d7;
}
.comment {
  border-top: 5px solid #f2f5f8;
  padding-bottom: 15px;
}
.comment_info_user img {
  width: 9%;
  border-radius: 50%;
}
.comment_info_user {
  display: flex;
  padding: 10px;
}
.comment_info_user h3 {
  font-size: 15px;
  padding-top: 9px;
  padding-left: 5px;
}
.comment_info p {
  padding-left: 10px;
  color: #727272;
  font-size: 15px;
}
.info_user {
  font-size: 13px !important;
  padding-top: 15px;
}
.info_user span:last-child {
  padding-left: 8px;
}
</style>