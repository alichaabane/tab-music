<template>
  <v-app>
    <v-main>
          <page-header />

      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from './components/Header'

export default {
  components: {
    PageHeader
  },

  data: () => ({
    //
  })
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
