<script setup>
import NavBar from "../../components/common/NavBar.vue";
import ChildComps from "./ChildComps/Recommend.vue";
import TableControl from "../../components/content/tablecontrol/TableControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import { onMounted, ref } from "vue";
import { getHomeAllData } from "../../network/home";
const recommends = ref("[]");
const currentTab = ref("");
onMounted(() => {
  getHomeAllData().then((res) => {
    recommends.value = res.data.goods.data;
  });
});
const tabClick = (index) => {
  let tabType = ["sales", "recommend", "new"];
  currentTab.value = tabType[index];
};
</script>
<template>
  <nav-bar #center>{{ $route.meta.title }}</nav-bar>
  <div>
    <img src="/霞.png" alt="推荐商品" />
  </div>
  <child-comps :recommends="recommends"></child-comps>
  <table-control @tabclick="tabClick" :titles="['畅销', '新书', '精选']">
  </table-control>
  <goods-list></goods-list>
</template>
<style scoped>
img {
  width: 100%;
  max-height: 200px;
}
</style>
