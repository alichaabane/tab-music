<template>
<div>
  <div id="phone-mode">
    <v-layout>
      <v-flex>
                <song-metadata :song="song" /><br>
         <youtube :youtubeId="song.youtubeId" /><br>
        <tab :song="song" /><br>
        <lyrics :song="song" />
  </v-flex>
 </v-layout>
  </div>

  <div id="desktop-mode">
    <v-layout>
      <v-flex xs6>
    <div id="view-custom">
      <song-metadata :song="song" />
      </div>
    </v-flex>
      <v-flex xs6 class="ml-2">
    <div id="youtube-custom">
      <youtube :youtubeId="song.youtubeId" />
      </div>
    </v-flex>
    </v-layout>

 <v-layout class="mt-2">
      <v-flex xs6>
        <tab :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <lyrics :song="song" />
      </v-flex>
    </v-layout>
  </div>
</div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '../Panel.vue'
import SongMetadata from '@/components/ViewSong/SongMetadata.vue'
import Youtube from '@/components/ViewSong/Youtube.vue'
import Lyrics from '@/components/ViewSong/Lyrics.vue'
import Tab from '@/components/ViewSong/Tab.vue'

export default {
  components: { Panel, SongMetadata, Youtube, Lyrics, Tab },
  data () {
    return {
      song: {}
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  }
}
</script>

<style scoped>
#view-custom, #song-custom , #youtube-custom{
  margin-top: 25px;
  text-align: center;
}
#view-custom{
  height: 383px;
}
@media (min-width:567px){
  #album-image{
    width: 70%;
    height: 100%;
    margin: 0 auto;
    padding-top: 5px;
  }
  .song-title{
    font-size: 25px
  }
  #phone-mode{
    display: none;
  }
  #desktop-mode{
    display: initial;
  }
}

@media (max-width:566px){
  #phone-mode{
    display: initial;
  }
  #desktop-mode{
    display: none;
  }
    #album-image{
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding-top: 5px;
  }
  .song-title{
    font-size: 14px
  }
}

</style>
