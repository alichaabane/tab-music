<template>
  <v-layout column  align-center>
     <v-flex class="v-flex" col-md-3 offset-md-0>
      <panel title="Songs" >
          <v-btn  slot="default"
          @click="navigateTo({name:'songs-create'})"
          id="add-btn"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
          </v-btn>
      <div v-for="song in songs"
      :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          <v-btn class="cyan" @click="navigateTo({name: 'song', params: {
            songId: song.id
          }})" dark>
            View
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img id="album-image" :src="song.albumImage" />
        </v-flex>
      </v-layout>
      </div>
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
#add-btn{
  margin-right: 10px;
    margin-top: -60px;
}
.error{
  color:white;
}
 .input-group--text-field input{
  border-bottom: 1px solid black;
}
.btn-color{
  color: white;
}
.v-flex{
  margin-top: 25px;
}
#album-image{
  width: 40%;
  margin: 0 auto;
}
.song-title{
  font-size: 30px
}
.song-genre{
  font-size: 18px
}
.song-artist{
  font-size: 24px;
}
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
</style>
