<script setup>
import NavBar from "../../components/common/NavBar.vue";
import ChildComps from "./ChildComps/Recommend.vue";
import { onMounted, ref } from "vue";
import { getHomeAllData } from "../../network/home";
const recommends = ref("[]");
onMounted(() => {
  getHomeAllData().then((res) => {
    recommends.value = res.data.goods.data;
  });
});
</script>
<template>
  <nav-bar #center>{{ $route.meta.title }}</nav-bar>
  <div>
    <img src="/霞.png" alt="推荐商品" />
  </div>
  <child-comps :recommends="recommends"></child-comps>
</template>
<style scoped>
img {
  width: 100%;
  max-height: 200px;
}
</style>
