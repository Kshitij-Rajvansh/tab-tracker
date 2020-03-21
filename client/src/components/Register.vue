<template>
  <panel title="Register">
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
            @click="register"
        >
          Register
        </v-btn>
        </v-container>

      </v-form>
    </panel>
</template>

<script>
import Panel from '@/components/ReusableComponents/Panel'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  components: {
    Panel
  },
  methods: {
    async register () {
      try {
        const resp = await AuthenticationService.register({
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
