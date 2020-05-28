<template>
  <div class="recommendviews">
    <ul>
      <li v-for="item in recommends">
          <a :href="item.link">
              <img :src="item.image" :alt="item.title">
              <p>{{item.title}}</p>
          </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RecommendViews",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommendviews ul {
   display: flex;
}
.recommendviews ul li {
    flex: 1;
    text-align: center;
    font-size: 12px;
}
.recommendviews ul li img {
    width: 85%;
    margin: 6px 0;
}
</style>