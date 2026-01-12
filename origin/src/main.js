import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// 导入公共样式
import './assets/styles/iconfont.css'

// 主题加载函数
const loadTheme = (theme) => {
  // 先移除旧的主题link标签
  const oldLink = document.getElementById('theme-link')
  if (oldLink) {
    oldLink.remove()
  }

  // 创建新的link标签
  const link = document.createElement('link')
  link.id = 'theme-link'
  link.rel = 'stylesheet'
  link.href = `${process.env.BASE_URL}css/${theme}-theme.css`

  // 插入到head中
  document.head.appendChild(link)
}

// 初始化主题
const initialTheme = localStorage.getItem('theme') || 'light'
store.commit('SET_THEME', initialTheme)
loadTheme(initialTheme)

// 监听主题变化
store.subscribe((mutation) => {
  if (mutation.type === 'TOGGLE_THEME' || mutation.type === 'SET_THEME') {
    const newTheme = store.state.theme
    loadTheme(newTheme)
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')