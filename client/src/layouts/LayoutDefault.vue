<template lang="pug">
  div
    v-navigation-drawer(v-model='drawer', app right)
      v-list
        v-list-item
          v-list-item-content
            v-list-item-title.title
              | О приложении
        v-list-item(link='', to='/tech-cards')
          v-list-item-action
            v-icon mdi-hammer-wrench
          v-list-item-content
            v-list-item-title Вход в личный кабинет
        v-list-item
          v-list-item-content
            v-list-item-title.title
              | Зарегистрироваться
        v-list-item(link='', to='/tech-cards')
          v-list-item-action
            v-icon mdi-view-list
          v-list-item-content
            v-list-item-title Настройки
        v-list-item
          v-list-item-content
            v-list-item-subtitle
              | Уведомления
        v-list-item(link='', to='/resources')
          v-list-item-action
            v-icon mdi-minus
          v-list-item-content
            v-list-item-title По вопросам сотрудничества
        v-list-item(link='', to='/categories')
          v-list-item-action
            v-icon mdi-minus
          v-list-item-content
            v-list-item-title Служба поддержки
        v-list-item(link='', to='/measures')
          v-list-item-action
            v-icon mdi-minus
          v-list-item-content
            v-list-item-title Поделиться приложением
    v-app-bar(app='', color='orange darken-2', dark='')
      v-btn(icon='')
        v-icon mdi-dots-vertical
      v-toolbar-title AIDA
      v-spacer
      v-btn(icon='')
        v-icon mdi-magnify
      v-btn(icon='' @click="getCities")
        v-icon mdi-heart
      v-app-bar-nav-icon(@click.stop='drawer = !drawer')
    v-content
      v-container
        router-view
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },
  props: {
    source: String,
  },

  data: () => ({
    drawer: false,
  }),

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
