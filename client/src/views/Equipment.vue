<template lang="pug">
v-layout(row)
  v-flex.pa-2(xs6)
    v-btn(block x-large color="amber accent-4") Списком
  v-flex.pa-2(xs6)      
    v-btn(block x-large color="amber accent-4") На карте
  v-flex(xs12 md6 v-for="eq in equipment")
    v-card.ma-2(:to="'/equipment/' + eq.id")
      v-card-text.px-2.py-2
        .text-center.subheading.mb-2 {{ eq.name }}
</template>

<script>
import { mapGetters } from "vuex"
import HomeCard from "../components/HomeCard";
export default {
  components: {
    HomeCard
  },

  data: () => ({
  }),

  computed: {
    ...mapGetters({
      equipment: "equipment/equipment"
    })
  },
};
</script>