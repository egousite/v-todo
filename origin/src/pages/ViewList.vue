<template>
  <div>
    <TodoItem :tasks="tasks" showText="暂无任务"></TodoItem>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";
import { mapState } from "vuex";
export default {
  name: "ViewList",
  computed: {
    ...mapState(["tasks"]),
  },
  components: {
    TodoItem,
  },
};
</script>

<style>
</style>