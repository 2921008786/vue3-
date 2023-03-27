<script setup>
import { RouterView } from "vue-router";
</script>
<template>
  <routerView />
  <menu class="menu">
    <router-link to="/" class="menu-item">
      <i class="iconfont icon-home2"> </i>
      <div>首页</div>
    </router-link>
    <router-link to="/category" class="menu-item">
      <i class="iconfont icon-category"> </i>
      <div>分类</div>
    </router-link>
    <router-link to="/profile" class="menu-item">
      <i class="iconfont icon-user"> </i>
      <div>个人中心</div>
    </router-link>
    <router-link to="/shopcart" class="menu-item">
      <i class="iconfont icon-shop-cart-"></i>
      <div>购物车</div>
    </router-link>
  </menu>
</template>

<style>
/* 引入基本样式 */
@import "./assets/css/base.css";
/* 引入图标字体 */
@import "./assets/css/iconfont.css";
.menu {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  justify-content: space-between;
  width: 100%;
}
.menu-item {
  flex: 1;
  height: 50px;
  text-align: center;
  padding-top: 10px;
}
.router-link-exact-active {
  color: orange;
}
</style>
