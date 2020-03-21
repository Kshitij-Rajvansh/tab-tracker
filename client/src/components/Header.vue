<template>
  <v-toolbar dense class="deep-purple lighten-3">
    <v-btn
      text
      dark
      @click="navigateTo('/')"
    >
      <v-toolbar-title text dark>
        Tabtracker
      </v-toolbar-title>
    </v-btn>
    <v-toolbar-items>
       <v-btn
        text
        dark
        @click="navigateTo('/songs')"
        >
         Browse
       </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn
          text
          dark
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo('/login')"
        >
          Login
        </v-btn>

        <v-btn
          text
          dark
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo('/register')"
        >
          Signup
        </v-btn>

        <v-btn
          text
          dark
          v-if="$store.state.isUserLoggedIn"
          @click="logout"
        >
          Logout
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'page-header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/login')
    }
  }
}
</script>
