<template>
<v-toolbar fixed class="cyan" dark  src="../static/img/image_toolbar.jpg">
  <v-toolbar-title class="mr-4">
    <span id="home" @click="navigateTo({name:'root'})">
    Tab Music
    </span>
  </v-toolbar-title>
    <v-spacer> </v-spacer>
    <v-toolbar-items class="v-btn-custom">
       <v-btn id="browse-btn"  dark @click="navigateTo({name:'songs'})">
         <span> Browse </span>
        </v-btn>
      <v-btn id="login-btn" v-if="!$store.state.isUserLoggedIn"   dark @click="navigateTo({name:'login'})">
                   <span> Login </span>
        </v-btn>
        <v-btn id="register-btn" v-if="!$store.state.isUserLoggedIn"   dark @click="navigateTo({name:'register'})">
                   <span> Sign Up </span>
        </v-btn>
         <v-btn id="logout-btn" v-if="$store.state.isUserLoggedIn"   dark @click="logout">
                   <span> Log Out </span>
        </v-btn>
  </v-toolbar-items>
</v-toolbar>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.navigateTo('/')
    }
  }
}
</script>

<style scoped>
@media (max-width:420px){
  .v-btn-custom{
    margin-top: 0;
  }
  span, v-btn{
    font-size: 10px;
  }
}

@media (min-width:421px){
  span, v-btn{
    font-size: 16px;
  }
  #login-btn, #browse-btn, #logout-btn,  #register-btn{
        background-color: transparent;
        margin-top: -3px;
        padding-top: 15px;
        font-size: 0;
  }

}

@media (max-width:420px){
  span, v-btn{
    font-size: 10px;
  }
  #login-btn, #browse-btn, #logout-btn,  #register-btn{
        background-color: transparent;
        margin-top: -3px;
        padding-top: 15px;
        font-size: 0;
  }

}
#home{
  cursor: pointer;
}
</style>
