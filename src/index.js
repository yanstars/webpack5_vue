import Vue from "vue"
import  UI  from "../dist/index"
Vue.use(UI)
import App from "./app.vue"

Vue.config.devtools = true

new Vue({
  render: (h) => h(App)
}).$mount("#app")