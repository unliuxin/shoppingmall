import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //创建$bus事件总线，在组件内this.$bus调用就是vue实例

new Vue({
    render: h => h(App),
    router
}).$mount('#app')