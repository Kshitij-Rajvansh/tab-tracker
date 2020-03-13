<template>
  <v-toolbar dense class="deep-purple lighten-3">
    <router-link to="home">
      <v-toolbar-title text dark>
        Tabtracker
      </v-toolbar-title>
    </router-link>
    <v-toolbar-items>
      <router-link to="songs">
        <v-btn text dark>
          Browse
        </v-btn>
      </router-link>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link to="login">
        <v-btn text dark v-if="!$store.state.isUserLoggedIn">
          Login
        </v-btn>
      </router-link>
      <router-link to="register">
        <v-btn text dark v-if="!$store.state.isUserLoggedIn">
          Signup
        </v-btn>
      </router-link>
      <router-link to="register">
        <v-btn
          text
          dark
          v-if="$store.state.isUserLoggedIn"
          @click="logout"
        >
          Logout
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'page-header',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>
