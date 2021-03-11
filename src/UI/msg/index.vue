<template>
  <transition  name="fade" mode="out-in">
    <div v-if="show"
         class="y_msg">
      {{message}}
    </div>

  </transition>

</template>

<script>
  export default {
    name: "YMsg",
    props: {
      message: String
    },
    data () {
      return {
        show: false
      }
    },
    mounted () {
      this.show = true
    }
  }
</script>

<style lang="scss">
  .y_msg {
    background-color: #50db43;
    border-radius: 4px;
    width: 300px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
  }
</style>