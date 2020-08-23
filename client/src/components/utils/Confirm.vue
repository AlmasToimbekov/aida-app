<template lang="pug">
v-layout(row justify-center)
  v-dialog(v-model="confirm.show" :persistent="confirm.persistent" scrollable :max-width="390")
    v-card
      v-card-title.pb-0
        v-layout(row wrap)
          v-flex(xs11) {{ confirm.title }}
          v-flex(xs1)
            v-btn(icon @click.native="hideConfirm")
              v-icon close
      v-card-text {{ confirm.text }}
      v-card-actions
        v-spacer
        v-btn(color="primary" @click.native="resolve") {{ confirm.resolveText }}
        v-btn(color="primary" text @click.native="reject") {{ confirm.rejectText }}
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Confirm',

  computed: {
    ...mapState({
      confirm: state => state.tools.confirm,
    }),
  },

  methods: {
    ...mapActions({
      hideConfirm: 'tools/hideConfirm',
    }),

    resolve() {
      this.confirm.deferred.resolve()
      this.hideConfirm()
    },

    reject() {
      this.confirm.deferred.reject()
      this.hideConfirm()
    },
  },

}
</script>
