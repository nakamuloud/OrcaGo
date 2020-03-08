<template>
  <div>
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
