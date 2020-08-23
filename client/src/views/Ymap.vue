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
    
    h3.mt-5 Добавление меток
    v-row
      v-col
        v-select(label='Выбор типа ресурса' v-model='productType' :items='resourceTypes' item-text='name' item-value='code')
      v-col(v-if='productType === "materials"')
        v-select(label='Материал' v-model='productId' :items='materials' item-text='name' item-value='id')
      v-col(v-if='productType === "equipment"')
        v-select(label='Механизм' v-model='productId' :items='equipment' item-text='name' item-value='id')
    h3.mt-5 Добавление ресурсов
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { mapState, mapActions } from "vuex"
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
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: require('@/static/icons/autocrane.png'),
      imageSize: [43, 43],
      imageOffset: [-20, -35],
      content: 'Автокран',
      contentOffset: [50, 10],
      contentLayout: '<div style="background: green; width: 70px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      coordinates: [51.0966224, 71.4027974],
    },

    resourceTypes: [{name: 'Материалы', code: 'materials'}, {name: 'Механизмы', code: 'equipment'}],
    productType: null,
    productId: '',
  }),

  watch: {
    productId() {
      this.setSnackbar('Кликните по карте, чтобы добавить свою метку')
      this.canAddMark = true
    },
  },

  computed: {
    ...mapState({
      markers: state => state.markers.markersByCategories,
      materials: state => state.products.materials,
      equipment: state => state.products.equipment,
      materialCategories: state => state.products.materialCategories,
      equipmentCategories: state => state.products.equipmentCategories,
    }),

    markerIcons() {
      const markerIcons = []
      this.markers.forEach(item => {
        const icon = { ...this.markerIcon }
        icon.id = item.id
        icon.coordinates = item.coordinates
        icon.content = item.name
        icon.imageHref = require(`@/static/icons/${item.category}.png`),
        markerIcons.push(icon)
      })
    return markerIcons
    }
  },

  methods: {
    ...mapActions({
      setMarker: 'markers/setMarker',
      setSnackbar: 'tools/setSnackbar',
    }),
    addItem(e) {
      if (!this.productId || !this.canAddMark) return
      const coords = e.get('coords')

      this.setMarker({
        markerInfo: {
          user_id: 'test',
          coordinates: coords,
          product_id: this.productId,
        }
      })
      this.canAddMark = false
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