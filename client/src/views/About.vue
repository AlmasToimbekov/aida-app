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
    items: [
      {
        src:
          "https://www.ssab.ru/-/media/images/industries/yellow-goods-and-construction-machinery/1200x360-yellow-goods.jpg?h=360&la=ru-RU&w=1200&m=20180614073755&hash=690FBA9D95C7DD040EDC9E516175664E98A8F803"
      },
      {
        src:
          "https://coronamachinery.com/wp-content/uploads/2017/08/slide_construcao_1b.jpg"
      }
    ],
    title: 'О приложении',
    msg: `AIDA позволяет объединить владельцев техники, продавцов строительных материалов с покупателями в едином пространстве. Теперь нет необходимости в различных источниках информации - все доступно в Вашем смартфоне, где вы можете посмотреть на карте наиболее удобный для Вас вариант.`,
  })
};
</script>