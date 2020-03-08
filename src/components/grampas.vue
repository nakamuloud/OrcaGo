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

  animation: grampas_animation 3s ease infinite;
}

@keyframes grampas_animation {
  0% {
    transform: translateY(0);
  }
  5% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-15px);
  }
  25% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-15px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
