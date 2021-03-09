import Vue from "vue"
import "./index.scss"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import App from "./app.vue"



new Vue({
  render: (h) => h(App)
}).$mount("#app")