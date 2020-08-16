<template lang="pug">
v-layout(row)
  v-flex.pa-2(xs6)
    v-btn(block x-large color="amber accent-4") Списком
  v-flex.pa-2(xs6)      
    v-btn(to="/map" block x-large color="amber accent-4") На карте
  v-flex(xs12 md6 v-for="eq in equipmentCategories")
    v-card.ma-2(:to="'/equipment/' + eq.id")
      v-card-text.px-2.py-2
        .text-center.subheading.mb-2 {{ eq.name }}
</template>

<script>
import { mapState } from "vuex"
export default {
  data: () => ({
  }),

  computed: {
    ...mapState('equipment', {
      equipmentCategories: state => state.equipmentCategories,
    })
  },
};
</script>