<template>
  <v-toolbar dense class="deep-purple lighten-3">
    <router-link to="home">
      <v-toolbar-title text dark>
        Tabtracker
      </v-toolbar-title>
    </router-link>
    <v-toolbar-items>
      <v-btn text dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link to="login">
        <v-btn text dark>
          Login
        </v-btn>
      </router-link>
      <router-link to="register">
        <v-btn text dark>
          Signup
        </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'page-header'
}
</script>
