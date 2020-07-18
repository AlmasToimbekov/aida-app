<template lang="pug">
v-flex(xs12 md6)
  v-card.ma-2(ripple elevation="1" :to="to" :href="href" :target="target")
    v-card-title.justify-center.pb-0(v-if="icon")
      v-avatar(:color="iconColor")
        v-icon(dark) {{ icon }}
    v-card-text.px-2.py-2
      .text-center.subheading.mb-2 {{ title }}
      v-divider.mb-2
      .caption.text-center.grey--text.subtitle {{ subtitle }}
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    iconColor: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },

  data() {
    return {

    }
  },

}
</script>

<style scoped lang="stylus">
  .subtitle
    height 54px
  @media(min-width: 321px)
    .subtitle
      height 36px
</style>
