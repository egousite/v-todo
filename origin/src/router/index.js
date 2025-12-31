import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ViewList from '../pages/ViewList.vue'
import ViewSearch from '../pages/ViewSearch.vue'
import ViewChart from '../pages/ViewChart.vue'

const router = new VueRouter({
    routes: [
        {
            // 根路由，默认跳转到任务列表
            path: '/',
            // component: '',
            redirect: '/viewlist' // 默认跳转到任务列表
        },
        {
            path: '/viewlist',
            component: ViewList
        },
        {
            path: '/viewsearch',
            component: ViewSearch
        },
        {
            path: '/viewchart',
            component: ViewChart
        }
    ]
})

// 解决重复导航错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}

export default router
