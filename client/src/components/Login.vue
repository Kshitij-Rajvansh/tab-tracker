<template>
    <panel title="Login">
      <v-form
        slot="content-1"
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
    </panel>
</template>

<script>
import Panel from '@/components/ReusableComponents/Panel'
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
  components: {
    Panel
  },
  methods: {
    async login () {
      try {
        const resp = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', resp.data.token)
        this.$store.dispatch('setUser', resp.data.user)
        this.$router.push('/')
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
