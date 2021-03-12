<template>
<div>
<v-layout column  align-center>
  <v-flex class="v-flex" col-md-3 offset-md-0>
    <panel title="Login">
      <form name="tab-music-form"
       autocomplete="off">
      <v-text-field
           label="E-Mail"
           v-model="email"
           class="input-group--focused"
           />
           <br>
            <v-text-field
           type="password"
           label="Password"
           v-model="password"
           class="input-group--focused"
          />
          <br>
      <div class="error" v-html="error" />
          <br>
      <v-btn
           class="btn-color cyan"
           @click="login">
           Login
      </v-btn>
      </form>
        </panel>
  </v-flex>
  </v-layout>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from './Panel.vue'

export default {
  components: {
    Panel
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        this.error = ''
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        console.log(this.$store.state.isUserLoggedIn)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
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
</style>
