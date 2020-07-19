<template>
  <yandex-map
    class="yandex-map"
    :coords="[51.1966224, 71.4027974]"
    :zoom="10"
    style="width: 500px; height: 500px;"
    :cluster-options="{
    1: {clusterDisableClickZoom: true}}"
  >
    <ymap-marker :coords="[51.0966224, 71.4027974]" :icon="markerIcon" marker-id="123123" />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  components: {
    yandexMap,
    ymapMarker,
  },

  data: () => ({
    settings: {
      apiKey: "",
      lang: "ru_RU",
      coordorder: "latlong",
      version: "2.1"
    },
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'https://cdn4.iconfinder.com/data/icons/onstruction-vehicles/64/autocrane_truck_mobile_crane-512.png',
      imageSize: [43, 43],
      imageOffset: [-20, -35],
      content: 'Автокран',
      contentOffset: [35, 15],
      contentLayout: '<div style="background: red; width: 70px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    },
  })
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