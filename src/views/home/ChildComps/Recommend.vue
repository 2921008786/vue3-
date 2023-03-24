<template>
  <ul class="recgoods">
    <li
      class="recgoods-item"
      v-for="(item, index) in props.recommends"
      :key="item.id"
    >
      <a href="javascript:;" @click="goto(item.id)">
        <img :src="item.cover_url" alt="推荐商品" />
        <div>{{ item.title }}</div>
      </a>
    </li>
  </ul>
</template>
<style scoped>
.recgoods {
  display: flex;
  padding: 15px 0 20px;
  text-align: center;
  overflow: auto;
}
.recgoods-item {
  flex: 1;
  font-size: 12px;
}
.recgoods-item img {
  width: 80px;
  margin-bottom: 10px;
}
</style>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps(["recommends"]);
let router = useRouter();
const goto = (id) => {
  router.push({
    path: "/detail",
    qurey: { id },
  });
};
</script>
