<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps(["book"]);
const itemClick = (id) => {
  router.push({
    path: "/detail",
    query: { id: props.book.id },
  });
};
</script>
<template>
  <div class="goods-item" @click="itemClick(props.book.id)">
    <img v-lazy="props.book.cover_url" alt="???" />
    <div class="goods-info">
      <p>{{ props.book.title }}</p>
      <p>
        <span class="price">价格<small>￥</small>{{ props.book.price }}</span>
        <i class="iconfont icon-collection_fill"></i
        ><span>{{ props.book.collects_count }}</span>
      </p>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 100%;
  border-radius: 5px;
}
p {
  width: 100%;
}
.goods-item {
  width: 50%;
  padding-bottom: 40px;
  position: relative;
  border: 1px solid rgb(188, 185, 185);
}
.goods-info {
  font-size: 12px;
  width: 100%;
  position: absolute;
  text-align: center;
}
.price {
  color: red;
}
</style>
