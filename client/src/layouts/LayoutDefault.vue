<template lang="pug">
v-container
  v-navigation-drawer(v-model='drawer' app right)
    v-list(dense)
      v-list-item(link, to='/about')
        v-list-item-action
          v-icon import_contacts
        v-list-item-content
          v-list-item-title
            | О приложении

      v-list-item(link, to='/cabinet')
        v-list-item-action
          v-icon weekend
        v-list-item-content
          v-list-item-title Вход в личный кабинет

      v-list-item(link, to='/signup')
        v-list-item-action
          v-icon how_to_reg
        v-list-item-content
          v-list-item-title
            | Зарегистрироваться

      v-list-item(link, to='/settings')
        v-list-item-action
          v-icon settings
        v-list-item-content
          v-list-item-title
            | Настройки

      v-list-item(link, to='/notifications')
        v-list-item-action
          v-icon notification_important
        v-list-item-content
          v-list-item-title
            | Уведомления

      v-list-item(link, to='/partnership')
        v-list-item-action
          v-icon people_outline
        v-list-item-content
          v-list-item-title
            | Сотрудничество

      v-list-item(link, to='/support')
        v-list-item-action
          v-icon support
        v-list-item-content
          v-list-item-title
            | Служба поддержки

      v-list-item(link, to='/share')
        v-list-item-action
          v-icon share
        v-list-item-content
          v-list-item-title
            | Поделиться приложением
  v-app-bar(app color='orange darken-2' dark)
    v-overflow-btn.mt-5(
      style="min-width:170px"
      label="Город"
      no-data-text="Перезагрузите страницу"
      v-model="selectedCity"
      :items="cities"
      item-text="name"
      item-value="code"
      background-color="orange darken-2"
      hide-selected
      flat)
      v-icon mdi-dots-vertical
    v-spacer
    v-toolbar-title AIDA
    v-spacer
    v-spacer
    v-btn(icon)
      v-icon mdi-magnify
    v-btn.btn-center(icon to="/home")
      v-icon home
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
  v-main
    v-container
      router-view
</template>

<script>
import { mapGetters } from "vuex"

export default {
  components: {},
  props: {
    source: String
  },

  data: () => ({
    drawer: false,

    selectedCity: null,
  }),

  computed: {
    ...mapGetters({
      cities: "globe/cities"
    })
  },

  methods: {
    home() {
      this.$router.push("/");
    }
  }
};
</script>
