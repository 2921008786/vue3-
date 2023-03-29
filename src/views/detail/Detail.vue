<template>
  <div id="detail">
    <nav-bar>
      <template v-slot:default>商品详情:{{ id }}</template>
    </nav-bar>

    <van-image
      style="margin-top: 50px"
      width="100%"
      :src="book.detail.cover_url"
    />

    <van-card
      style="text-align: left"
      :num="book.detail.stock"
      :price="book.detail.price + '.00'"
      :desc="
        book.detail.descriptiont + '该书从日基础入门到项目实战,技术开发全面覆盖'
      "
      :title="book.detail.title"
    >
      <template #tags>
        <van-tag plain="plain" type="danger">新书</van-tag>
        <van-tag plain="plain" type="danger">推荐</van-tag>
      </template>
      <template #footer>
        <van-button type="warning" @click="handleAddcart"
          >加入购物车</van-button
        >
        <van-button type="danger" @click="goToCart">立即购买</van-button>
      </template>
    </van-card>
    <van-tabs v-model="active">
      <!-- <van-badge :content="book.detail.comments.length" max="99">
        <div class="child"></div>
      </van-badge> -->
      <van-tab title="概述">
        <div class="con cnm" v-html="book.detail.details"></div>
      </van-tab>
      <van-tab title="热评">
        <div v-if="book.detail.comments.length == 0" class="con">
          该商品还没有评论，快去发表评论吧!
        </div>
      </van-tab>
      <van-tab title="相关图书">
        <goods-list :goods="book.like_goods"></goods-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import NavBar from "../../components/common/NavBar.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import { useRoute, useRouter } from "vue-router";
// import { useStore } from "vuex";
import { ref, onMounted, reactive, toRefs } from "vue";
import { getDetail } from "../../network/detail";
let active = ref(1);
const route = useRoute();
const router = useRouter();
// const store = useStore();
let id = ref(0);
let book = reactive({
  detail: {
    comments: [],
  },
  like_goods: [],
});
onMounted(() => {
  getDetail(route.query.id).then((res) => {
    book.detail = res.data.goods;
    console.log(res.data.goods);
    book.like_goods = res.data.like_goods;
  });
});
//添加购物车
const handleAddcart = () => {};
// 立即购买
const goToCart = () => {};
</script>
<style scoped>
.van-card__title {
  font-size: 20px;
  font-weight: bold;
  height: 30px;
  line-height: 30px;
  margin: 10px 0;
}
.van-card__desc {
  margin-bottom: 10px;
}
.van-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
.van-card__footer {
  margin-top: 10px;
}
.van-badge--fixed {
  position: relative;
  top: -35px;
  right: -194px;
}

.con {
  padding: 10px;
  overflow: hidden;
}
</style>
