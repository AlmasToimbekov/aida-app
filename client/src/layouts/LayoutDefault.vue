<template lang="pug">
  v-app#inspire
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
    v-app-bar(app='', color='indigo', dark='')
      v-app-bar-nav-icon(@click.stop='drawer = !drawer')
      v-toolbar-title Home
    v-content
      v-container
        slot
    v-footer(color='indigo', app='')
      span.white--text © 2020
</template>

<script>
export default {
  props: {
    source: String,
  },

  data: () => ({
    drawer: false,
  }),
}
</script>
