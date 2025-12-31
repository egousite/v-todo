<template>
  <!-- 统计卡片 -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-value">{{ totalTasks }}</div>
      <div class="stat-label">总任务数</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{ completedTasks }}</div>
      <div class="stat-label">已完成</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{ pendingTasks }}</div>
      <div class="stat-label">待完成</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StatCard",
  computed: {
    ...mapGetters(["totalTasks", "completedTasks", "pendingTasks"]),
  },
};
</script>