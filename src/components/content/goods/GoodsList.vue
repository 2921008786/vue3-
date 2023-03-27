<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in props.goods"
      :key="index"
      :book="item"
    ></goods-list-item>
  </div>
</template>
<script setup>
import GoodsListItem from "./GoodsListItem.vue";
const props = defineProps(["goods"]);
</script>
<style scoped>
.goods {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
