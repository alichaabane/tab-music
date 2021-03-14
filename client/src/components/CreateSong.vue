<template>
<div>
<div id="phone-mode">
  <v-layout>
    <v-flex>
      <div id="div-custom">
        <panel title="Song Metadata" >
          <v-layout>
          <v-flex>
          <v-text-field
          label="Title"
          v-model="song.title"
          required
          :rules="[rules.required]"
          ></v-text-field>

          <v-text-field
          label="artist"
          required
          :rules="[rules.required]"
          v-model="song.artist"></v-text-field>

          <v-text-field
          label="genre"
          required
          :rules="[rules.required]"
          v-model="song.genre"></v-text-field>

          <v-text-field
          label="album"
          required
          :rules="[rules.required]"
          v-model="song.album"></v-text-field>

          <v-text-field
          label="albumImage"
          required
          :rules="[rules.required]"
          v-model="song.albumImage"></v-text-field>

          <v-text-field
          label="youtubeId"
          required
          :rules="[rules.required]"
          v-model="song.youtubeId"></v-text-field>
          </v-flex>
          </v-layout>
        </panel>
      </div>
      <br>
  <div class="song-custom">
      <v-flex>
        <panel title="Song Structure" class="ml-2">
          <v-textarea
          label="lyrics"
          multi-line
          required
      :rules="[rules.required]"
          v-model="song.lyrics">
          </v-textarea>

          <v-textarea
          label="tab"
          multi-line
          required
      :rules="[rules.required]"
          v-model="song.tab">
          </v-textarea>
        </panel>
        <br>
          <div class="error" v-if="error" >
            {{error}}
          </div>

    <div class="success" v-else >
            {{success}}
          </div>
        <br>
        <v-btn class="cyan" @click="createSong" dark>
          Create Song
        </v-btn>
      </v-flex>
  </div>
  </v-flex>
    </v-layout>
</div>

<div id="desktop-mode">
  <v-layout>
    <v-flex xs4>
  <panel title="Song Metadata" >
    <v-text-field
    label="Title"
    v-model="song.title"
    required
    :rules="[rules.required]"
    ></v-text-field>

    <v-text-field
    label="artist"
    required
    :rules="[rules.required]"
    v-model="song.artist"></v-text-field>

    <v-text-field
    label="genre"
    required
    :rules="[rules.required]"
    v-model="song.genre"></v-text-field>

    <v-text-field
    label="album"
    required
    :rules="[rules.required]"
    v-model="song.album"></v-text-field>

    <v-text-field
    label="albumImage"
    required
    :rules="[rules.required]"
    v-model="song.albumImage"></v-text-field>

    <v-text-field
    label="youtubeId"
    required
    :rules="[rules.required]"
    v-model="song.youtubeId"></v-text-field>
  </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-textarea
        label="lyrics"
        multi-line
        required
    :rules="[rules.required]"
        v-model="song.lyrics">
        </v-textarea>

        <v-textarea
        label="tab"
        multi-line
        required
    :rules="[rules.required]"
        v-model="song.tab">
        </v-textarea>
      </panel>
      <br>
         <div class="error" v-if="error" >
           {{error}}
         </div>

   <div class="success" v-else >
           {{success}}
         </div>
      <br>
      <v-btn class="cyan" @click="createSong" dark>
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</div>
</div>
</template>

<script>
import Panel from './Panel.vue'
import SongsService from '@/services/SongsService'
export default {
  components: { Panel },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      success: null,
      rules: {
        required: (value) => !!value || 'Required'
      }
    }
  },
  methods: {
    async createSong () {
      this.error = null
      this.success = null
      const checkAllFields = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!checkAllFields) {
        this.error = 'Please fill in all the required fields'
      }
      try {
        if (checkAllFields) {
          await SongsService.post(this.song)
          this.success = 'Song created with sucess'
          console.log(this.song)
          this.$router.push('/songs')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.song-custom{
  margin-left: -8px;
  margin-right: 2px;
}
.div-custom, .song-custom{
  margin-top: 25px;
}
@media (max-width:566px){
 #phone-mode{
    display: initial;
    margin-left: -8px;
  }
  #desktop-mode{
    display: none;
  }
}

@media (min-width:567px){
 #phone-mode{
    display: none;
  }
  #desktop-mode{
    display: initial;
  }
}
.error{
  color:white;
  margin-left: 7px;
}

.success{
  color:white;
  background-color: greenyellow;
  margin-left: 7px;
}
</style>
