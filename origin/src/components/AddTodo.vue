<template>
  <!-- 添加任务卡片 -->
  <div class="card mb-6">
    <h2 class="card-title">添加新任务</h2>
    <div class="input-group">
      <input
        type="text"
        class="input-field"
        maxlength="64"
        placeholder="输入任务内容..."
        v-model="newTask"
        @keyup.enter="addTask"
      />
      <div class="flex gap-2 mt-4">
        <button @click="addTask" class="btn btn-primary">
          <span class="iconfont icon-add"></span>
          添加任务
        </button>
        <!-- <button class="btn btn-secondary">
          <span class="iconfont icon-discount"></span>
          添加标签·
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "AddTodo",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    // 添加任务
    addTask() {
      // 任务不能为空
      if (!this.newTask.trim()) {
        return;
      }
      // 调用 Vuex 中的 addTask 方法添加任务
      this.$store.dispatch("addTask", {
        id: nanoid(),
        text: this.newTask,
        completed: false,
        priority: "low",
      });
      // 清空输入框
      this.newTask = "";
    },
  },
};
</script>