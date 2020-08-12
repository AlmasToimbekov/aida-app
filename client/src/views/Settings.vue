<template lang="pug">
v-row
  v-carousel(xs-12 height="200" cycle progress)
    v-carousel-item(
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition")
  v-col(cols="12")
    v-card
      v-card-title {{ title }}
      v-card-text {{ msg }}

</template>

<script>
export default {
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
    title: 'Настройки',
    msg: 'Данный раздел находится в разработке, здесь будут доступны различные конфигурации для Вашего удобства.',
  })
};
</script>