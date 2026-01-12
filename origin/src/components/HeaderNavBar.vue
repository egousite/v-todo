<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon"><i class="iconfont icon-success"></i></span>
        <span>任务管理</span>
      </div>
      <div class="flex items-center gap-4">
        <!-- 主题切换按钮 -->
        <button class="btn-icon" @click="toggleTheme">
          <i class="iconfont" :class="{ 'icon-dark': theme === 'light', 'icon-light': theme === 'dark' }"></i>
        </button>
        <!-- <button class="btn-icon">
          <span class="iconfont icon-set"></span>
        </button> -->
        <!-- <button class="btn-icon">
          <span class="iconfont icon-account"></span>
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: "HeaderNavBar",
  computed: {
    ...mapState(['theme']),
  },
  methods: {
    ...mapActions(['toggleTheme']),
  },
};
</script>

<style></style>