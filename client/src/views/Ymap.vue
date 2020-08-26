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
    
    h3.mt-5 Добавление меток/ресурсов
    v-row
      v-col.col-12(md="6")
        v-select(label='Выбор типа ресурса' v-model='productType' :items='resourceTypes' item-text='name' item-value='code')
      v-col.col-12(md="6")
        v-select(label='Выбор категории' v-model='selectedCategory' :items='categoryOptions' item-text='name' item-value='id')
      template
        v-col.col-12(md="6")
          v-select(label='Материал/Механизм' v-model='productId' :items='filteredProducts' item-text='name' item-value='id')
    v-btn(@click="additionDialog = true") Создать новый ресурс
    v-dialog(v-model="additionDialog" scrollable)
      v-card
        v-card-title.pb-0
          v-row
            v-col
              p Создание ресурса
        v-card-text
          v-row
            v-col.col-12(md="6")
              v-select(label='Выбор типа ресурса' v-model='productType' :items='resourceTypes' item-text='name' item-value='code')
            v-col.col-12(md="6")
              v-select(label='Выбор категории' v-model='selectedCategory' :items='categoryOptions' item-text='name' item-value='id')
            v-col.col-12(md="6")
              v-text-field(label='Введите название нового ресурса' v-model='newProduct')
        v-card-actions
          v-spacer
          v-btn(color="primary" @click="addNewroduct") Создать
          v-btn(color="primary" text @click="additionDialog = false") Отмена
    v-row
    
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
    selectedCategory: null,
    productType: null,
    productId: '',
    additionDialog: false,
    newProduct: '',
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
    },
    categoryOptions() {
      if (!this.productType) return []
      return this.productType === 'materials' ? this.materialCategories : this.equipmentCategories
    },
    filteredProducts() {
      const type = this.productType === 'materials' ? this.materials : this.equipment
      return type.filter(item => item.category_id === this.selectedCategory)
    },
  },

  methods: {
    ...mapActions({
      setMarker: 'markers/setMarker',
      createProduct: 'products/createProduct',
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
    },
    addNewroduct() {
      this.createProduct({name: this.newProduct, category_id: this.selectedCategory})
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