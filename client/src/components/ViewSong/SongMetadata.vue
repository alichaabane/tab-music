<template>
        <panel title="Song Metadata"  >
          <v-layout>
          <v-flex  xs6 id="flex-custom">
            <div class="song-title">
              {{song.title}} <i class="fas fa-music"  />
            </div>
            <div>
            <b> {{song.artist}} </b>
            </div>
            <div>
              {{song.genre}}
            </div>
             <v-btn class="cyan" @click="navigateTo({name: 'song-edit', params: {
            songId: song.id
          }})" dark>
            Edit
          </v-btn>
          </v-flex>

          <v-flex xs6>
            <div><img id="album-image" :src="song.albumImage" /><br>
          {{song.album}}
          </div>
          </v-flex>
        </v-layout>
          </panel>
</template>

<script>
import Panel from '../Panel.vue'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

@media (min-width:567px){
    #flex-custom{
        height:367px;
    }
  #album-image{
        width: 100%;
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
