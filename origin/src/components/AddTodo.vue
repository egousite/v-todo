<template>
  <!-- 添加任务卡片 -->
  <div class="card mb-6">
    <h2 class="card-title">添加新任务</h2>
    <div class="input-group">
      <input
        v-model="newTask"
        type="text"
        placeholder="输入任务内容..."
        class="input-field"
        @keyup.enter="addTask"
        maxlength="64"
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
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    // addTask() {},
    // ...mapActions('addTask')
    addTask() {
      //
      if (!this.newTask.trim()) {
        // return this.$message.error("任务内容不能为空");
        return;
      }
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

<style></style>