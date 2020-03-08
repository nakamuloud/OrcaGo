<template>
  <div>
    <v-btn
      style="bottom:5%"
      absolute
      dark
      fab
      bottom
      right
      color="pink"
      @click="flyTo"
    >
      <v-icon>mdi-plus</v-icon></v-btn
    >
    <mapbox
      class="main_map"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      @load="mapLoaded"
    >
      <MglMarker :coordinates.sync="markerCoordinates" color="green" />
    </mapbox>
  </div>
</template>

<script>
import { MglMap, MglMarker } from 'vue-mapbox'
// import Mapbox from 'mapbox-gl'
export default {
  components: {
    mapbox: MglMap,
    MglMarker
  },
  data() {
    return {
      map: {},
      accessToken:
        'pk.eyJ1IjoibmFrYW11bG91ZCIsImEiOiJjazc4cWY0d28wbGF1M2VwNXk1eno4bjN3In0.MG5S58nJXJNB_o0LKdeH0w', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/light-v10', // your map style
      antialias: true,
      markerCoordinates: [50, 50]
    }
  },
  methods: {
    mapLoaded(event) {
      this.map = event.map
    },
    flyTo() {
      console.log(this.map)
      this.map.flyTo({
        center: [
          -74.5 + (Math.random() - 0.5) * 10,
          40 + (Math.random() - 0.5) * 10
        ]
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
