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
          fab>  <i class="fas fa-plus"></i> <!-- uses solid style -->
          </v-btn>
      <div class="songs-custom" v-for="song in songs"
      :key="song.id">
         <hr />
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}} <i class="fas fa-music"  />
          </div>
          <div class="song-artist">
           <b> {{song.artist}} </b>
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
          <img id="album-image" :src="song.albumImage" /><br>
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

.songs-custom{
  margin: 5px;
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

@media (max-width:420px){
  #add-btn{
  margin-right: 10px;
    width: 40px;
    height: 40px;
    margin-top: -53px;
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
  .song-genre{
    font-size: 12px
  }
  .song-artist{
    font-size: 16px;
  }
  .song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
}

@media (min-width:421px){
  #add-btn{
  margin-right: 10px;
    margin-top: -60px;
}
    #album-image{
    width: 40%;
    height: 100%;
    margin: 0 auto;
    padding-top: 5px;
  }
  .song-title{
    font-size: 25px
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
}

</style>
