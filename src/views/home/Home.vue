<template>
  <div id="home">
    <nav-bar #center>{{ $route.meta.title }}</nav-bar>
    <table-control
      v-show="isTabFixed"
      @tabclick="tabClick"
      :titles="['畅销', '新书', '精选']"
    ></table-control>
    <div class="wrapper">
      <div class="content">
        <div ref="getheight">
          <div class="swipper">
            <swipe :banners="banners"></swipe>
          </div>
          <child-comps :recommends="recommends"></child-comps>
        </div>
        <table-control
          @tabclick="tabClick"
          :titles="['畅销', '新书', '精选']"
        ></table-control>
        <goods-list :goods="showgoods"></goods-list>
      </div>
    </div>
  </div>
  <back-top v-show="isBack" @click="backtop"></back-top>
</template>
<script setup>
import BScroll from "better-scroll";
import NavBar from "../../components/common/NavBar.vue";
import ChildComps from "./ChildComps/Recommend.vue";
import TableControl from "../../components/content/tablecontrol/TableControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import BackTop from "../../components/content/backtotop/BackTop.vue";
import Swipe from "../../components/common/Swipe.vue";
import { onMounted, ref, reactive, computed, watchEffect } from "vue";
import { getHomeAllData, getHomeGoods } from "../../network/home";
import { nextTick } from "process";
// 设置回到顶部
const isBack = ref(false);
const backtop = () => {
  bscroll.scrollTo(0, 0, 500);
};
const recommends = ref("[]");
// 声明当前选项卡
const currentTab = ref("sales");
const showgoods = computed(() => {
  return goods[currentTab.value].list;
});
//设置商品数据模型
const goods = reactive({
  sales: { page: 1, list: [] },
  recommend: { page: 1, list: [] },
  new: { page: 1, list: [] },
});
let bscroll = reactive({});
// 控制顶部选项卡是否显示
const isTabFixed = ref(false);
// 组合式api中ref重名处理
const getheight = ref(null);
// 设置轮播图
const banners = ref([]);
onMounted(() => {
  getHomeAllData().then((res) => {
    recommends.value = res.data.goods.data;
    banners.value = res.data.slides;
  });
  getHomeGoods("sales").then((res) => {
    goods.sales.list = res.data.goods.data;
  });
  getHomeGoods("recommend").then((res) => {
    goods.recommend.list = res.data.goods.data;
  });
  getHomeGoods("new").then((res) => {
    goods.new.list = res.data.goods.data;
  });

  // 下拉加载模块
  bscroll = new BScroll(document.querySelector(".wrapper"), {
    probeType: 3,
    click: true,
    pullUpLoad: true,
  });
  // 设置选项悬停
  bscroll.on("scroll", (position) => {
    isTabFixed.value = -position.y > getheight.value.offsetHeight;
    isBack.value = -position.y > 500;
  });
  bscroll.on("pullingUp", () => {
    // 获取下一页数据上拉触发后加载
    const page = goods[currentTab.value].page + 1;
    getHomeGoods(currentTab.value, page).then((res) => {
      goods[currentTab.value].list.push(...res.data.goods.data);
      goods[currentTab.value].page += 1;
    });
    // 上拉后加载数据
    bscroll.finishPullUp();
    // 加载数据后重新计算高度
    bscroll.refresh();
  });
});
// 单击改变当前选项卡
const tabClick = (index) => {
  let tabType = ["sales", "recommend", "new"];
  currentTab.value = tabType[index];
  //重新计算高度
  nextTick(() => {
    bscroll && bscroll.refresh();
  });
};
//监听页面重新计算高度
watchEffect(() => {
  nextTick(() => {
    bscroll && bscroll.refresh();
  });
});
</script>
<style scoped>
img {
  width: 100%;
  max-height: 200px;
}
#home {
  position: relative;
  height: 100vh;
}
.wrapper {
  position: absolute;
  top: 45px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
