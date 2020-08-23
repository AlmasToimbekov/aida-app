<template lang="pug">
v-row
  banner
  v-col(cols="12")
    v-card
      v-card-title {{ title }}
      v-card-text {{ msg }}

</template>

<script>
import Banner from "../components/MainBanner"
export default {
  components: {
    Banner,
  },
  data: () => ({
    title: 'Настройки',
    msg: 'Данный раздел находится в разработке, здесь будут доступны различные конфигурации для Вашего удобства.',
  })
};
</script>