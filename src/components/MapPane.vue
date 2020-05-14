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
    <GmapMap
      :center="this.center"
      :zoom="this.zoom"
      :options="{ streetViewControl: false }"
      map-type-id="roadmap"
      style="width: 100vw; height: 100vh"
      @center_changed="onCenterChanged"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="markerClicked(m)"
      />
    </GmapMap>
  </div>
</template>

<script>
import Grampas from './grampas'
// import axios from 'axios'
export default {
  components: {
    Grampas
  },
  data() {
    return {
      center: { lat: 35.084605, lng: 137.170834 },
      mode: false,
      zoom: 18,
      coords: { lat: 35.084605, lng: 137.170834 },
      markers: [
        {
          position: { lat: 35.71, lng: 139.72 },
          title: 'marker_1',
          accessable: false
        },
        {
          position: { lat: 35.72, lng: 139.73 },
          title: 'marker_2',
          accessable: false
        },
        {
          position: { lat: 35.7, lng: 139.71 },
          title: 'marker_3',
          accessable: false
        },
        {
          position: { lat: 35.71, lng: 139.7 },
          title: 'marker_4',
          accessable: false
        }
      ]
    }
  },
  methods: {
    changeMode() {
      this.mode = !this.mode
    },
    markerClicked(marker) {
      this.center = marker.position
      console.log(marker.title)
    },
    onCenterChanged(center) {
      this.coords = { lat: center.lat(), lng: center.lng() }
    },
    distance(lat1, lng1, lat2, lng2) {
      lat1 *= Math.PI / 180
      lng1 *= Math.PI / 180
      lat2 *= Math.PI / 180
      lng2 *= Math.PI / 180
      return (
        6371 *
        Math.acos(
          Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) +
            Math.sin(lat1) * Math.sin(lat2)
        )
      )
    }
  },
  created() {
    console.log('created')
    // 5秒おきに実行
    setInterval(() => {
      // 現在地を更新
      navigator.geolocation.getCurrentPosition((position) => {
        this.coords.lat = position.coords.latitude
        this.coords.lng = position.coords.longitude
        console.log(this.coords)
      })
      // 現在地と周囲のポイントとの距離を計算
      for (var index in this.markers) {
        if (
          this.distance(
            this.markers[index].position.lat,
            this.markers[index].position.lng,
            this.coords.lat,
            this.coords.lng
          ) < 1.0
        ) {
          this.markers[index].accessable = true
        } else {
          this.markers[index].accessable = false
        }
      }
    }, 1000)
    // console.log('GET from kintone')
    // axios
    //   .get('https://dstn5.kumoko.club:443/dataspider/trigger/get_kintone_spot')
    //   .then((res) => {
    //     console.log(res.data)
    // this.markers.push{
    // }
    //   })
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
