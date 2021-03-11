<template>
  <div id="main">
    <Ybutton @click.native="test">notice</Ybutton>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      test () {
        $msg({
          message: 'this is a test msg box hhhh ',
          time: 2000
        })
      }
    },
  }
</script>

<style lang="scss" >
  @import "./index.scss";
  .classone {
    color: $text-color;
  }
  .classtwo {
    color: $body-color;
  }
</style>