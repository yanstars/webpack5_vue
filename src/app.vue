<template>
  <div id="main">
    <my-header title="this is a testTiele"></my-header>
    <img src="./test.png"
         alt="error">
    <p>this is pic</p>
    <span :class="flag ? 'classone' : ' classtwo'">this is text </span>
    <el-button @click="flag =!flag">change</el-button>
  </div>
</template>

<script>
  import MyHeader from './componets/header.vue'
  export default {
    name: 'App',
    components: {
      MyHeader,
    },
    data () {
      return {
        flag: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "./index.scss";
  .classone {
    color: $text-color;
  }
  .classtwo {
    color: $body-color;
  }
</style>