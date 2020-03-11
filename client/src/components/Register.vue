<template>
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"
    />

    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />

    <br>

    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: 'test@test.com',
      password: 'password'
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      const resp = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(resp.data)
    }
  }
  // mounted () {
  //   setTimeout(() => {
  //     this.email = 'Hello There'
  //   }, 2000)
  // }
}
</script>
