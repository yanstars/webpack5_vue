<template>
  <div id="main">
    <yu-button type="primary"
               @click="display2 = true">打开抽屉</yu-button>
    <!-- <YuCityPicker></YuCityPicker> -->
    <!-- <my-header title="this is a testTiele"></my-header> -->
    <img src="./test.png"
         alt="error">
    <p @click="test">this is pic</p>
    <span :class="flag ? 'classone' : ' classtwo'">this is text </span>
    <!-- <el-button @click="flag =!flag">change</el-button> -->
  </div>
</template>

<script>
  // import MyHeader from './componets/header.vue'
  // import msgboxVue from "./componets/test/indexs"
  export default {
    name: 'App',
    components: {
      // MyHeader,
    },
    methods: {
      test () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    data () {
      return {
        display2:false,
        flag: true,
        formVisible:false,
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