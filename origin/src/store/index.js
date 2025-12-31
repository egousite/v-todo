import Vue from 'vue'
import Vuex from 'vuex'
// 应用 Vuex 插件
Vue.use(Vuex)

// 行为 actions
const actions = {
    // 切换任务完成状态
    toggleTaskCompleted({ commit }, id) {
        commit('TOGGLE_TASK_COMPLETED', id)
    },
    // 添加任务
    addTask({ commit }, task) {
        commit('ADD_TASK', task)
    },
    // 删除任务
    deleteTask({ commit }, id) {
        commit('DELETE_TASK', id)
    }
}
// 状态变更 mutations
const mutations = {
    // 修改任务完成状态数据
    TOGGLE_TASK_COMPLETED(state, id) {
        state.tasks = state.tasks.map(task => {
            // 找到id 对应的一项，将其completed属性取反
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task
        })
        // 缓存 切换后的任务数据
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    // 添加任务数据
    ADD_TASK(state, task) {
        state.tasks.unshift(task)
        // 缓存 添加后的任务数据
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    // 删除任务数据
    DELETE_TASK(state, id) {
        state.tasks = state.tasks.filter(task => task.id !== id)
        // 缓存 删除后的任务数据
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    // 更新任务数据
    UPDATE_TASK(state, { id, text }) {
        state.tasks = state.tasks.map(task => {
            if (task.id === id) {
                task.text = text
                return task
            }
            return task
        })
        // 缓存 更新后的任务数据
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
}
// 状态数据
const state = {
    // 从 localStorage 中获取任务数据,确认是数组再解析,否则使用空数组
    tasks: Array.isArray(JSON.parse(localStorage.getItem('tasks'))) ? JSON.parse(localStorage.getItem('tasks')) : []
    // tasks: [
    // { id: nanoid(), text: "完成Vue项目开发", completed: true, priority: "high" },
    // { id: nanoid(), text: "学习Vue Router", completed: true, priority: "medium" },
    // { id: nanoid(), text: "编写项目文档", completed: false, priority: "low" },
    // ]
}
// 状态数据的计算属性
const getters = {
    // 总任务数量
    totalTasks({ tasks }) {
        return tasks.length
    },
    // 已完成任务数量
    completedTasks({ tasks }) {
        return tasks.filter(task => task.completed).length
    },
    // 未完成任务数量
    pendingTasks({ tasks }) {
        return tasks.filter(task => !task.completed).length
    },
}

// 创建并导出 Vuex 实例
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})

