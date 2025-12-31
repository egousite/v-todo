<template>
  <div class="task-list">
    <div
      v-for="task in tasks"
      :key="task.id"
      :class="['task-item', { completed: task.completed }]"
    >
      <div
        :class="['task-checkbox', { checked: task.completed }]"
        @click="toggleTaskCompleted(task.id)"
      ></div>
      <div class="task-content">
        <div class="task-title" v-show="!task.isEdit">{{ task.text }}</div>
        <div class="input-group" v-show="task.isEdit">
          <input
            maxlength="64"
            class="input-field task-title"
            v-model="task.text"
            ref="inputField"
            @blur="handlerBlur(task)"
            :data-is-edit="task.isEdit"
            @keydown.enter="handlerEnterBlur($event)"
          />
        </div>
        <div class="task-meta">
          <!-- <span
            class="task-priority priority-high"
            v-if="task.priority === 'high'"
          >
            高优先级
          </span> -->
          <!-- <span><i class="iconfont icon-calendar"></i> 今天</span> -->
          <!-- <span><i class="iconfont icon-clock"></i> 30分钟</span> -->
        </div>
      </div>
      <div class="task-actions">
        <button
          class="btn-icon"
          @click="editTask(task)"
          v-show="!task.completed"
        >
          <i class="iconfont icon-edit"></i>
        </button>
        <button class="btn-icon" @click="deleteTask(task.id)">
          <i class="iconfont icon-delete"></i>
        </button>
      </div>
    </div>
    <div class="no-tasks" v-if="!tasks.length">没有任务了</div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "TodoItem",
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapActions(["toggleTaskCompleted", "deleteTask"]),
    // 编辑任务
    editTask(task) {
      // 动态添加 isEdit 属性，避免一开始所有任务都处于编辑状态
      if (task.hasOwnProperty("isEdit")) {
        task.isEdit = true;
      } else {
        this.$set(task, "isEdit", true);
      }

      this.$nextTick(() => {
        // 确保输入框获得焦点
        const inputs = Array.isArray(this.$refs.inputField)
          ? this.$refs.inputField
          : [this.$refs.inputField];
        const inputField = inputs.find((input) => {
          return input.dataset.isEdit === "true";
        });
        if (inputField) {
          inputField.focus();
        }
      });
    },
    // 编辑任务，失去焦点时，将任务状态设置为非编辑状态
    handlerBlur(task) {
      task.isEdit = false;
      // 提交更新任务 mutation
      this.$store.commit("UPDATE_TASK", task);
    },
    // 在输入框中编辑任务时，按下回车键，失去焦点
    handlerEnterBlur(e) {
      e.target.blur();
    },
  },
};
</script>

<style scoped>
/* 无任务 */
.no-tasks {
  text-align: center;
  padding: 20px;
  color: #888;
}
</style>