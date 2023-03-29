<script setup>
import NavBar from "../../components/common/NavBar.vue";
import { useRouter } from "vue-router";
import { getCategory, getCategoryGoods } from "../../network/category";
import { onMounted, ref, reactive, computed } from "vue";
//设置跳转详情
const router = useRouter();
const itemClick = (id) => {
  router.push({ path: "/detail", query: { id } });
};
// 设置数据模型
const goods = reactive({
  sales: { page: 1, list: [] },
  price: { page: 1, list: [] },
  comments_count: { page: 1, list: [] },
});
//获取选项卡对应数据
const showgoods = computed(() => {
  return goods[currentorder.value].list;
});
const init = () => {
  getCategoryGoods("sales", currentid.value).then((res) => {
    goods.sales.list = res.data.goods.data;
  });
  getCategoryGoods("price", currentid.value).then((res) => {
    goods.price.list = res.data.goods.data;
  });
  getCategoryGoods("comments_count", currentid.value).then((res) => {
    goods.comments_count.list = res.data.goods.data;
  });
};
//设置商品栏获取商品
const currentorder = ref("sales");
const currentid = ref(0);
const getGoods = (cid) => {
  currentid.value = cid;
  init();
};
//初始化标签栏和折叠栏状态
const tabs_active = ref("0");
const sidebar_active = ref("0");
const activeName = ref("1");
// 设置排行选项卡切换
const tabClick = (index) => {
  const orders = ["sales", "price", "comments_count"];
  currentorder.value = orders[index.name];
};
// 获取分类页面数据
const category = ref([]);
onMounted(() => {
  getCategory().then((res) => {
    category.value = res.data.categories.slice(0, 5);
  });
  init();
});
</script>
<template>
  <nav-bar #center>{{ $route.meta.title }}></nav-bar>
  <div class="main">
    <div class="ordertab">
      <van-tabs v-model:active="tabs_active" @click-tab="tabClick">
        <van-tab class="tabitem" title="销量排序"></van-tab>
        <van-tab class="tabitem" title="价格排序"></van-tab>
        <van-tab class="tabitem" title="评论排序"></van-tab>
      </van-tabs>
    </div>
    <van-sidebar class="leftmenu" v-model="sidebar_active">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item
          v-for="(item, index) in category"
          :key="index"
          :title="item.name"
          :name="item.name"
        >
          <van-sidebar-item
            v-for="sub in item.children"
            :key="sub.id"
            :title="sub.name"
            @click="getGoods(sub.id)"
          />
        </van-collapse-item>
      </van-collapse>
    </van-sidebar>
    <div class="goodslist">
      <van-card
        v-for="item in showgoods"
        :price="item.price"
        :title="item.title"
        :thumb="item.cover_url"
        @click="itemClick(item.id)"
      >
      </van-card>
    </div>
  </div>
</template>

<style scoped>
.main {
  position: absolute;
  top: 45px;
  display: flex;
}
.ordertab {
  flex: 1;
  position: fixed;
  float: right;
  left: 130px;
  right: 0;
  z-index: 999;
}
.leftmenu {
  z-index: 999;
  position: fixed;
  top: 90px;
  width: 40vw;
}
.goodslist {
  flex: 1;
  position: absolute;
  height: 100vh;
  top: 40px;
  left: 150px;
  padding: 10px;
  width: 60vw;
}
</style>
