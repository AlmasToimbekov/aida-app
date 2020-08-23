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
    title: 'Поделиться',
    msg: 'Данный раздел находится в разработке, здесь будут доступны функции поделиться этим приложением.',
  }),
};
</script>