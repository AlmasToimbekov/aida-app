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
    title: 'Партнерство',
    msg: 'По вопросам сотрудничества обращаться по телефону +7-701-523-76-73.',
  })
};
</script>