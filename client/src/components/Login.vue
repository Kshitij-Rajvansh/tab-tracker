<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>

    <v-form
      ref="form"
      lazy-validation
    >

      <v-container>
        <v-text-field
          label="Email"
          v-model="email"
        >
      </v-text-field>
      <br>
      <v-text-field
          label="Password"
          type="password"
          v-model="password"
          autocomplete="new-password"
      >
      </v-text-field>
      <br>
        <div class="danger-alert" v-html="error" />
      <br>
      <v-btn
          color="success"
          class="mr-4"
          @click="login"
      >
        Login
      </v-btn>
      </v-container>

    </v-form>
  </v-card>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
  },
  methods: {
    async login () {
      try {
        const resp = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(resp.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
  .error {
    color: red;
  }
</style>
