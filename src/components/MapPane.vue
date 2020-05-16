<template>
  <div>
    <v-card color="red">
      <v-card-title>{{ this.info.titleName }}</v-card-title>
    </v-card>
    <img
      v-show="itemImageFlag"
      class="item"
      :src="itemImagePath"
      @click="itemImageFlag = false"
    />
    <v-btn v-show="itemImageFlag" class="item_button" color="red" dark>{{
      this.info.buttonMessage
    }}</v-btn>
    <GmapMap
      :center="this.center"
      :zoom="this.zoom"
      :options="{ streetViewControl: false }"
      map-type-id="roadmap"
      style="width: 100vw; height: 90vh"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        @click="markerClicked(m)"
      />
      <GmapMarker
        :position="this.coords"
        :clickable="false"
        :draggable="false"
        :icon="this.info.icon"
      />
    </GmapMap>
  </div>
</template>

<script>
// import Grampas from './grampas'
import axios from 'axios'
export default {
  components: {
    // Grampas
  },
  data() {
    return {
      center: { lat: 35.084605, lng: 137.170834 },
      mode: false,
      zoom: 18,
      coords: { lat: 35.084605, lng: 137.170834 },
      itemImageFlag: false,
      itemImagePath: require('../../images/grampas.png'),
      markers: [],
      info: {
        titleName: 'シャチGo!!',
        buttonMessage: 'Get',
        icon: {
          url: require('../../images/grampas.png'),
          scaledSize: { width: 44, height: 70, f: 'px', b: 'px' }
        }
      }
    }
  },
  methods: {
    changeMode() {
      this.mode = !this.mode
    },
    markerClicked(marker) {
      console.log(marker.title)
      this.center = marker.position
      this.info.titleName = marker.title
      this.itemImageFlag = true
      this.info.buttonMessage =
        marker.accessable === true ? 'Get!!' : '距離が遠すぎる...!!'
      // this.itemImagePath = this.markers[0].image
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
    // 地図の中心を設定
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords.lat = position.coords.latitude
      this.coords.lng = position.coords.longitude
    })
    this.center = this.coords
    // 5秒おきに実行
    setInterval(() => {
      console.log(this.markers)
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
    console.log('GET from kintone')
    axios
      .get('https://dstn5.kumoko.club:443/dataspider/trigger/get_kintone_spot')
      .then((res) => {
        for (let index in res.data) {
          this.markers.push({
            position: {
              lat: parseFloat(res.data[index].lng),
              lng: parseFloat(res.data[index].lat)
            },
            title: res.data[index].spot,
            itemName: res.data[index].item_name,
            itemLevel: res.data[index].item_level
          })
        }
      })
  }
}
</script>

<style scoped>
.item {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 50%;
  height: auto;
  animation: grampas_animation 3s ease infinite;
}
.item_button {
  position: absolute;
  z-index: 10;
  top: 70%;
  left: 0;
  right: 0;
  margin: auto;
  width: 50%;
  height: auto;
}
</style>
