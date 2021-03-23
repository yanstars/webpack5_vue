import YButton from "./button/index"
import Msg from "./msg/index"

const com = [
  YButton
]

const fn = [
  Msg
]
const install = (Vue) => {
  com.forEach(item => {
    Vue.component(item.name, item)
  })

  fn.forEach(item => {
    item()
  })
}

export default {
  YButton,
  install,
  Msg
}