import Vue from "vue"
import "./index.scss"
// import el from "element-ui"
import VR from '../../code/vue-reservoir/npm-dist/js/reservoir'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VR)
import App from "./app.vue"
// import "./componets/button/index"

Vue.config.devtools = true
Vue.config.errorHandler = function (err, vm, info) {
  console.error(err,vm,info)
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}


Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪

  console.error(msg,vm,trace)
}
new Vue({
  render: (h) => h(App)
}).$mount("#app")