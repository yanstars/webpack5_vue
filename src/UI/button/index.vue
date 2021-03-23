<template>
  <div class="y_button">
    <slot>

    </slot>

  </div>
</template>

<script>
  export default {
    name: "Ybutton"
  }
</script>

<style lang="scss">
  .y_button {
    user-select: none;
    border-radius: 3px;
    display: inline-flex;
    background-color: #8e8e8e;
    color: white;
    font-size: 16px;
    box-sizing: border-box;
    padding: 5px 20px;
    &:hover {
      opacity: 0.8;
    }
  }
</style>