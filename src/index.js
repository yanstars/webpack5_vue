import Vue from "vue"
import App from "./app.vue"

Vue.config.devtools = true

new Vue({
  render: (h) => h(App),
}).$mount("#app")
