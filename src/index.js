import Vue from "vue"
// import "./index.scss"
import UI from "../dist/index.js"
// import VR from '../../code/vue-reservoir/npm-dist/js/reservoir'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(UI)
import App from "./app.vue"
// import "./componets/button/index"

Vue.config.devtools = true

new Vue({
  render: (h) => h(App)
}).$mount("#app")