<template>
  <MglMap
    class="main_map"
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    :antiatias="antialias"
  />
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap } from 'vue-mapbox'

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken:
        'pk.eyJ1IjoibmFrYW11bG91ZCIsImEiOiJjazc4cWY0d28wbGF1M2VwNXk1eno4bjN3In0.MG5S58nJXJNB_o0LKdeH0w', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/light-v10', // your map style
      antialias: true
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
    console.log(this.mapbox)
  },
  methods: {
    onTest() {
      this.mapbox.on('click', () => {
        console.log('hello')
      })
    }
  }
}
</script>

<style scoped>
.main_map {
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
