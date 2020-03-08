<template>
  <div>
    <img
      v-show="isEnabled"
      img
      id="grampas"
      src="../../images/grampas.png"
    /></div
></template>

<script>
export default {
  props: {
    isEnabled: Boolean
  }
}
</script>

<style scoped>
#grampas {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
