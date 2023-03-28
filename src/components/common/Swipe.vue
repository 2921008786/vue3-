<template>
  <van-swipe
    class="my-swipe"
    :autoplay="3000"
    indicator-color="white"
    lazy-render
  >
    <van-swipe-item v-for="(item, index) in props.banners" :key="index"
      ><img class="swipe-pic" v-lazy="item.img_url" alt=""
    /></van-swipe-item>
  </van-swipe>
</template>
<script setup>
const props = defineProps(["banners"]);
</script>
<style>
.swipe-pic {
  height: 150px;
  width: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
