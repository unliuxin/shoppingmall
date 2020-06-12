<template>
  <div class="params_info">
    <table
      v-for="(table,index) in goodsparamsinfo.paramsTable"
      :key="index"
      class="params_info_table"
    >
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>

    <table class="setinfo">
        <tr v-for="(setinfo,index) in goodsparamsinfo.paramsSet" :key="index">
            <td>{{setinfo.key}}</td> 
            <td>{{setinfo.value}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParams",
  props: {
    goodsparamsinfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.params_info tr {
  border-bottom: 1px solid #5555;
  height: 47px;
  display: flex;
  line-height: 47px;
}
.params_info td {
  width: 20%;
  text-align: center;
  font-size: 14px;
}
.params_info_table {
    width: 100vw;
    border-top: 5px solid #f2f5f8;
}
table{
    width: 100vw;
}
tr{
     border-bottom: 1px solid #5555;
  height: 47px;
  display: flex;
  line-height: 47px;
}
.setinfo tr td:nth-child(2){
    width: 80%;
    text-align: left;
    color: #eb4868;
}
td{
    width: 20%;
}
</style>