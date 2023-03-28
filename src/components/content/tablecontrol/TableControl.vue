<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: currentIndex == index }"
      v-for="(item, index) in props.titles"
      :key="index"
      @click="itemClick(index)"
    >
      <span class="title-font">{{ item }}</span>
    </div>
  </div>
</template>
<script setup="setup">
import { ref } from "vue";
const props = defineProps({ titles: Array });
const emit = defineEmits(["tabclick"]);
const currentIndex = ref(0);
function itemClick(index) {
  currentIndex.value = index;
  emit("tabclick", index);
}
</script>
<style scoped="scoped">
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #f6f6f6;
  position: sticky;
  top: 44px;
  z-index: 9;
}

.tab-control-item {
  flex: 1;
}

.active {
  color: orange;
}

.active .title-font {
  border-bottom: 3px solid orange;
}
</style>
