import YMsg from "./index.vue"
import Vue from "vue"

const cusFn = Vue.extend(YMsg)


const msg = ({ message, time }) => {
  const vv = new cusFn({
    propsData: {
      message
    }
  })
  vv.vm = vv.$mount()
  document.body.append(vv.vm.$el)
  setTimeout(() => {
    document.body.removeChild(vv.vm.$el)
  }, time)
  return vv
}

const install = () => {

  window['$msg'] = msg
}
export default install