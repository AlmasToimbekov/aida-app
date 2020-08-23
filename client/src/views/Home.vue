<template lang="pug">
v-row
  banner
  home-card(
    to="/equipment"
    title="СПЕЦТЕХНИКА"
    subtitle="Аренда спецтехники для строительства и ремонта"
    icon="construction"
    icon-color="amber accent-4")
  home-card(
    to="/materials"
    title="МАТЕРИАЛЫ С ДОСТАВКОЙ"
    subtitle="Продажа строительных материалов"
    icon="local_shipping"
    icon-color="orange accent-3")
</template>

<script>
import HomeCard from "../components/HomeCard"
import Banner from "../components/MainBanner"
export default {
  components: {
    HomeCard,
    Banner,
  },
};
</script>