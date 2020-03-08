<template>
  <div>
    <div class="ui">
      <v-btn
        style="bottom:5%"
        absolute
        dark
        fab
        bottom
        right
        color="pink"
        @click="changeMode"
      >
        <v-icon>mdi-plus</v-icon></v-btn
      >
    </div>
    <Grampas :isEnabled="mode" />
    <mapbox
      class="main_map"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :zoom="zoom"
      @load="mapLoaded"
      :center="mapCenter"
    >
      <MglMarker
        :coordinates.sync="markerCoordinates"
        draggable="draggable"
        color="green"
        @dragend="onDragend"
      />
    </mapbox>
  </div>
</template>

<script>
import { MglMap, MglMarker } from 'vue-mapbox'
import Grampas from './grampas'
// import Mapbox from 'mapbox-gl'
export default {
  components: {
    mapbox: MglMap,
    MglMarker,
    Grampas
  },
  data() {
    return {
      map: {},
      accessToken:
        'pk.eyJ1IjoibmFrYW11bG91ZCIsImEiOiJjazc4cWY0d28wbGF1M2VwNXk1eno4bjN3In0.MG5S58nJXJNB_o0LKdeH0w', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/streets-v11', // your map style
      antialias: true,
      mapCenter: { lon: 80, lat: 30 },
      markerCoordinates: [50, 50],
      mode: false,
      zoom: 5,
      draggable: true
    }
  },
  methods: {
    mapLoaded(event) {
      this.map = event.map
    },
    changeMode() {
      this.mode = !this.mode
    },
    onDragend() {
      console.log(this.markerCoordinates)
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
