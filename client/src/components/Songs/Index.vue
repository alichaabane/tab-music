<template>
  <v-layout column align-center>
    <!-- <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recently-viewed-songs class="mt-2" />
    </v-flex> -->

    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel.vue'
import SongsSearchPanel from './SongsSearchPanel.vue'
import {mapState} from 'vuex'

export default {
  components: { SongsPanel, SongsSearchPanel },
  data () {
    return {
      isLoggedIn: true
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])},
  methods: {
    LoginCheck () {
      if (!this.$store.state.isUserLoggedIn) {
        this.$router.push('login')
        this.isLoggedIn = false
      } else {
        this.isLoggedIn = true
      }
      console.log(this.isLoggedIn)
      return this.isLoggedIn
    }
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
