<template>
  <!-- 任务列表 -->
  <div class="card mt-6">
    <div class="card-header">
      <h2 class="card-title">我的任务</h2>
      <div class="flex gap-2">
        <!-- 视图分类 -->
        <button class="btn-icon" @click="ViewSearch">
          <i class="iconfont icon-search"></i>
        </button>
        <button class="btn-icon" @click="ViewList">
          <i class="iconfont icon-viewlist"></i>
        </button>
        <button class="btn-icon" @click="ViewChart">
          <i class="iconfont icon-rank"></i>
        </button>
      </div>
    </div>
    <!-- 路由视图 -->
    <keep-alive include="ViewSearch">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  computed: {},
  methods: {
    ViewSearch() {
      this.$router.replace("/viewsearch");
    },
    ViewList() {
      this.$router.replace("/viewlist");
    },
    ViewChart() {
      this.$router.replace("/viewchart");
    },
  },
};
</script>