<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
data:{
  option = {
    accessToken:
      'pk.eyJ1IjoibmFrYW11bG91ZCIsImEiOiJjazc4cWY0d28wbGF1M2VwNXk1eno4bjN3In0.MG5S58nJXJNB_o0LKdeH0w',
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8',
    center: [143.767125, 38.681236],
    zoom: 4
  }
},
  mounted:function() {
    this.map = new mapboxgl.Map(this.option)
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
