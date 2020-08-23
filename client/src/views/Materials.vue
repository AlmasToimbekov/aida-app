<template lang="pug">
v-layout(row)
  v-flex.pa-2(xs6)
    v-btn(block x-large color="amber accent-4") Списком
  v-flex.pa-2(xs6)      
    v-btn(to="/map" block x-large color="amber accent-4") На карте
  v-flex(xs12 md6 v-for="category in materialCategories")
    v-card.ma-2(:to="'/products/' + category.id")
      v-card-text.px-2.py-2
        .text-center.subheading.mb-2 {{ category.name }}
</template>

<script>
import { mapState } from "vuex"
export default {

  data: () => ({
  }),

  computed: {
    ...mapState('products', {
      materialCategories: state => state.materialCategories,
    })
  },
};
</script>