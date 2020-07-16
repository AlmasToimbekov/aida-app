<template lang="pug">
  v-card(color='grey lighten-4' flat='' height='200px' tile='')
    v-toolbar(dense='')
      v-app-bar-nav-icon
      v-toolbar-title AIDA
      v-spacer
      v-btn(icon='')
        v-icon mdi-magnify
      v-btn(icon='' @click="getCities")
        v-icon mdi-heart
      v-btn(icon='')
        v-icon mdi-dots-vertical


</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Toolbar',

  computed: {
    ...mapGetters({
      brand: 'globe/cities',
    }),
  },

  methods: {
    ...mapActions({
      getCities: 'globe/getCities',
    }),

    home() {
      this.$router.push('/')
    },
  },
}
</script>
<style lang="stylus">
</style>
