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
    title: 'Поддержка',
    msg: 'Если у Вас возникли проблемы с использованием этого Приложения, вы можете связаться по телефону +7-707-367-52-25, либо по eMail: atoimbekov@gmail.com',
  }),
};
</script>