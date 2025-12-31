<template>
    <!-- 任务列表 -->
    <div class="card mt-6">
        <div class="card-header">
            <h2 class="card-title">我的任务</h2>
            <div class="flex gap-2">
                <button class="btn-icon"><i class="iconfont icon-viewlist"></i></button>
                <button class="btn-icon"><i class="iconfont icon-search"></i></button>
                <button class="btn-icon"><i class="iconfont icon-rank"></i></button>
            </div>
        </div>

        <TodoItem />

    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
    name: "TodoList",
    components: {
        TodoItem,
    },
    data() {
        return {

        };
    },
    computed: {

    },
    methods: {

    },

}
</script>

<style></style>