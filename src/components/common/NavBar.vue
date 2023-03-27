<template>
  <!-- 导航栏结构 -->
  <div class="nav-bar">
    <div class="nav-bar-item left" @click="$router.go(-1)">
      <i class="iconfont icon-return"></i>
      <slot name="left"> </slot>
    </div>
    <div class="nav-bar-item center">
      <slot name="center"></slot>
    </div>
    <div class="nav-bar-item right">
      <slot name="right"> </slot>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.nav-bar {
  background-color: rgb(241, 196, 112);
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  height: 45px;
  text-align: center;
  line-height: 45px;
  color: rgb(85, 84, 84);
  z-index: 999;
}
.nav-bar-item {
  flex: 1;
  font-size: 18px;
}

.iconfont {
  font-size: 26px;
  position: absolute;
  left: 20px;
}
</style>
