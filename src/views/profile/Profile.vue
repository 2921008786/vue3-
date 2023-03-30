<template>
  <nav-bar #center>{{ $route.meta.title }}</nav-bar>
  <div class="user-box">
    <div class="user-info">
      <div class="info">
        <img class="infopic" src="1.png" />
      </div>
    </div>
  </div>
  <ul class="user-list">
    <li class="van-hairline--bottom" @click="goTo('/collect')">
      <span>我的收藏</span>
      <van-icon name="arrow" />
    </li>
    <li class="van-hairline--bottom" @click="goTo('/order')">
      <span>我的订单</span>
      <van-icon name="arrow" />
    </li>
    <li class="van-hairline--bottom" @click="goTo('/setting')">
      <span>账号管理</span>
      <van-icon name="arrow" />
    </li>
    <li class="van-hairline--bottom" @click="goTo('/address')">
      <span>地址管理</span>
      <van-icon name="arrow" />
    </li>
    <li class="van-hairline--bottom" @click="goTo('/about')">
      <span>关于我们</span>
      <van-icon name="arrow" />
    </li>
  </ul>
  <van-button class="logoutbtn" round block color="#42b983" @click="tologout"
    >退出登录</van-button
  >
</template>
<script setup>
import NavBar from "../../components/common/NavBar.vue";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { showSuccessToast } from "vant";
import { logout } from "../../network/user";
import { useUserStore } from "../../store/user";
import "vant/es/toast/style";
import pinia from "../../store/store";
const store = useUserStore();
const router = useRouter();
const state = reactive({
  user: {},
});
onMounted(() => {});
const tologout = () => {
  logout().then((res) => {
    if (res.status == "204") {
      showSuccessToast("退出成功");
      window.localStorage.setItem("token", "");
      store.setIsLogin;
      setTimeout(() => {
        router.push({
          path: "/login",
        });
      }, 1000);
    }
  });
};
const goTo = (query) => {
  router.push({
    path: query,
  });
};
</script>
<style scoped>
.infopic {
  width: 100vw;
  vertical-align: middle;
  text-align: center;
}
.van-hairline--bottom {
  height: 8vh;
  line-height: 8vh;
  font-size: 18px;
}
.logoutbtn {
  width: 80vw;
  position: relative;
  left: 10vw;
}
</style>
