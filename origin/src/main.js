import Vue from 'vue'
import App from './App.vue'
import store from './store'

// import './assets/styles/dark-theme.css'
import './assets/styles/light-theme.css'

import './assets/styles/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    // console.log(this.$store);
  },
}).$mount('#app')
