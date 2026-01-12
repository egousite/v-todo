<template>
  <div>
    <!-- 搜索框 -->
    <div class="mb-6">
      <div class="input-group">
        <input type="text" maxlength="64" placeholder="输入任务关键词并按下Enter..." class="input-field" ref="searchInput"
          v-model="keyword" @keyup.enter="search" />
      </div>
    </div>
    <!-- 任务列表 -->
    <TodoItem :tasks="searchTasks" :showText="showText" />
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue";
import { mapState } from "vuex";
export default {
  name: "ViewSearch",
  data() {
    return {
      keyword: "",
      searchTasks: [],
      showText: "暂无任务！请输入关键字搜索任务或添加任务吧~~",
    };
  },
  components: {
    TodoItem,
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    // 根据关键词模糊搜索任务
    search() {
      // 过滤任务列表，返回包含关键词的任务，不区分大小写
      this.searchTasks = this.tasks.filter((item) => {
        let text = item.text.toUpperCase()
        return text.includes(this.keyword.toUpperCase())
      });

      if (!this.searchTasks.length) {
        this.searchTasks = [];
        this.showText = "暂无搜索结果";
      }
    },
  },
  mounted() {
    this.$refs.searchInput.focus();
  },
};
</script>

<style></style>