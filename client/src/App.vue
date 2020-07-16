<template lang="pug">
  div(id="app")
    layouts-default
      toolbar
</template>

<script>
import Toolbar from './components/Toolbar'
import LayoutDefault from './layouts/LayoutDefault'

export default {
  name: 'App',
  components: {
    toolbar: Toolbar,
    LayoutDefault
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
