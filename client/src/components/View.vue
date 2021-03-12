<template>
  <v-layout column  align-center>
     <v-flex class="v-flex" col-md-3 offset-md-0>
      <panel title="View" >
      </panel>
     </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

import Panel from './Panel.vue'
export default {
  components: { Panel },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // request to the backend to grab all songs
    this.songs = (await SongsService.getAllSongs()).data
    console.log('songs', this.songs)
  }
}
</script>

<style scoped>
</style>
