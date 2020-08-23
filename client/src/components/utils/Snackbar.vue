<template lang="pug">
  v-snackbar(v-model="show" left :multi-line="multiLine") {{ message }}
    v-btn.bold(text color="purple lighten-2" @click.native="show = false") Закрыть
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Snackbar',

  data() {
    return {
      show: false,
      multiLine: false,
      message: '',
    }
  },

  computed: {
    ...mapState({
      snackbarMsg: state => state.tools.message,
    }),
  },

  watch: {
    snackbarMsg(msg) {
      if (msg !== '') {
        if (msg.length >= 130) {
          this.multiLine = true
        } else {
          this.multiLine = false
        }
        this.message = msg
        this.show = true
        this.setSnackbar('')
      }
    },
  },

  methods: {
    ...mapActions({
      setSnackbar: 'tools/setSnackbar',
    }),
  },
}
</script>
