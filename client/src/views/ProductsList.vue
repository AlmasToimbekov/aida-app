<template lang="pug">
v-layout(row)
  v-flex.pa-2(xs6)
    v-btn(block x-large color="amber accent-4") Списком
  v-flex.pa-2(xs6)      
    v-btn(to="/map" block x-large color="amber accent-4") На карте
  v-flex(xs12 md6 v-for="product in selectedProducts")
    v-card.ma-2
      v-card-text.px-2.py-2
        .text-center.subheading.mb-2 {{ product.name }}
  v-flex(v-if="!selectedProducts.length" xs12)
    v-card.ma-2
      v-card-text.px-2.py-2
        .text-center.subheading.mb-2 Список пуст
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
  }),

  computed: {
    ...mapState('products', {
      selectedProducts: state => state.selectedProducts,
    })
  },
};
</script>