<template lang="pug">
  v-container
    v-row
      v-col
        yandex-map(
          class="yandex-map"
          :coords="viewCoords"
          :zoom="10"
          style="width: auto; min-height: 400px;"
          :cluster-options="{1: {clusterDisableClickZoom: true}}"
          @click="addItem"
        )
          ymap-marker(v-for="icon in markerIcons" :coords="icon.coordinates" :icon="icon" :marker-id="icon.id")
    v-row
      v-col
        v-select(label='Выбор типа ресурса')
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  components: {
    yandexMap,
    ymapMarker,
  },

  data: () => ({
    viewCoords: [51.1966224, 71.4027974],
    settings: {
      apiKey: "",
      lang: "ru_RU",
      coordorder: "latlong",
      version: "2.1"
    },
    markerIcons: [],
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: require('@/static/icons/autocrane.png'),
      imageSize: [43, 43],
      imageOffset: [-20, -35],
      content: 'Автокран',
      contentOffset: [35, 15],
      contentLayout: '<div style="background: red; width: 70px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      coordinates: [51.0966224, 71.4027974],
    },
  }),

  methods: {
    addItem(e) {
      const coords = e.get('coords')
      this.markerIcon.coordinates = coords
      this.markerIcons.push({...this.markerIcon})
      this.viewCoords = coords
    }
  },
};
</script>

<style>
.yandex-map {
  width: 100%;
  height: 100%;
  border-radius: 40px;
  border: 1px solid transparent;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.15);
}
</style>