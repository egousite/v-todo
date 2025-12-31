<template>
  <!-- 主容器 -->
  <div id="" class="bg-primary">
    <!-- 导航栏 -->
    <HeaderNavBar />

    <!-- 主内容区 -->
    <main class="container py-6">
      <!-- 添加任务卡片 -->
      <AddTask />

      <!-- 统计卡片 -->
      <StatCard />

      <!-- 任务列表卡片 -->
      <TodoList />
    </main>
  </div>
</template>

<!-- 

1、清空任务（图标、还是按钮）
2、筛选任务
3、图表
4、列表不同显示类型的路由组件 （列表，搜索、图标）
-->

<script>
import HeaderNavBar from "./components/HeaderNavBar.vue";
import AddTask from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import StatCard from "./components/StatCard.vue";
export default {
  components: {
    HeaderNavBar,
    AddTask,
    TodoList,
    StatCard,
  },
  mounted() {},
};
</script>

<style scoped>
/* 这里只需要写组件特定的样式，基础样式在全局CSS中 */
</style>