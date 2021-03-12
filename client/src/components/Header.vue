<template>
<v-toolbar fixed class="cyan" dark  src="../static/img/image_toolbar.jpg">
  <v-toolbar-title class="mr-4">
    <span id="home" @click="navigateTo({name:'root'})">
    Tab Music
    </span>
  </v-toolbar-title>
    <v-spacer> </v-spacer>
    <v-toolbar-items class="v-btn-custom">
       <v-btn id="login-btn" flat dark @click="navigateTo({name:'songs'})">
          Browse
        </v-btn>
      <v-btn id="login-btn" v-if="!$store.state.isUserLoggedIn"  flat dark @click="navigateTo({name:'login'})">
          Login
        </v-btn>
        <v-btn id="register-btn" v-if="!$store.state.isUserLoggedIn"  flat dark @click="navigateTo({name:'register'})">
          Sign Up
        </v-btn>
         <v-btn id="logout-btn" v-if="$store.state.isUserLoggedIn"  flat dark @click="logout">
          Log Out
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
#login-btn, #logout-btn,  #register-btn{
      background-color: transparent;
      margin-top: -2px;
      margin: 0;
}
#home{
  cursor: pointer;
}
</style>
