<template>
  <v-app>
    <v-snackbar v-model="snackbar">
      {{ this.snackbarText }}
    </v-snackbar>
    <v-card color="red">
      <v-card-title style="color:white">{{ this.info.titleName }}</v-card-title>
    </v-card>
    <img
      v-show="itemImageFlag"
      class="item"
      :src="itemImagePath"
      @click="onImageClicked"
    />
    <v-btn
      v-show="itemImageFlag"
      class="item_button"
      color="red"
      dark
      @click="onButtonClicked"
      >{{ this.info.buttonMessage }}</v-btn
    >
    <v-card color="red" class="footer">
      <v-card-title style="color:white"
        >Lv:{{ this.info.level }},TotalExp:{{ this.info.exp }}</v-card-title
      >
    </v-card>
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
  </v-app>
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
      snackbar: false,
      snackbarText: '',
      focusedMarker: [],
      coords: { lat: 35.084605, lng: 137.170834 },
      itemImageFlag: false,
      itemImagePath: require('../../images/grampas.png'),
      markers: [],
      info: {
        level: 1,
        exp: 100,
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
    markerClicked(marker) {
      this.itemImageFlag = true
      this.info.titleName = marker.title + ',Exp:' + marker.itemLevel

      this.focusedMarker = marker
      this.center = marker.position
    },
    onImageClicked() {
      this.itemImageFlag = false
      this.info.titleName = 'シャチGo!!'
    },
    changeMode() {
      this.mode = !this.mode
    },
    onButtonClicked() {
      console.log('onButtonClicked', this.focusedMarker.title)
      this.getItem(this.focusedMarker)
      // this.itemImagePath = require('../../images/' + marker.itemName)
    },

    getItem(marker) {
      const val = this.markers[
        this.markers.findIndex(({ title }) => title === marker.title)
      ]
      console.log(val)
      if (val.accessable == false) {
        this.popMessage('もう少し近づこう')
      } else {
        val.exist = false
        if (this.calcLevel(val.itemLevel)) {
          this.popMessage('アイテムゲット!レベルアップ!!!')
        } else {
          this.popMessage('アイテムゲット!')
        }
        this.itemImageFlag = false
      }
    },
    calcLevel(exp) {
      this.info.exp += parseInt(exp)
      if (this.info.exp - this.info.level * 100 >= 100) {
        this.info.level += 1
        return true
      } else {
        return false
      }
    },
    popMessage(msg) {
      console.log(msg)
      this.snackbar = true
      this.snackbarText = msg
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
      // console.log(this.markers)
      // 現在地を更新
      navigator.geolocation.getCurrentPosition((position) => {
        this.coords.lat = position.coords.latitude
        this.coords.lng = position.coords.longitude
        // console.log(this.coords)
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
          this.markers[index].accessable = true
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
            itemLevel: res.data[index].item_level,
            exist: false
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
.footer {
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: auto;
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
