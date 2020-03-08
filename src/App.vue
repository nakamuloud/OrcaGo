<template>
  <div class="main">
    <Map />
    <v-toolbar dark tabs flat
      ><v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Page title</v-toolbar-title></v-toolbar
    >
  </div>
</template>

<script>
import Map from './components/MapPane'
export default {
  components: { Map },
  data() {
    return {
      mode: 'map'
    }
  }
}
</script>
<style scoped>
.main {
  position: fixed;
  left: 0;
  top: 0;
  width: auto;
  min-width: 100%;
  height: auto;
  min-height: 100%;
  width: 100vw;
}
</style>
