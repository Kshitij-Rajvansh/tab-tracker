<template>
  <panel title="Songs">
    <v-btn
      slot="slot-toolbar-button"
      small
      light
      absolute
      right
      middle
      fab
      @click="navigateTo({name: 'createSong'})"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-container slot="content-1" v-for="song in songs" :key="song.id">
      <v-card
        color="#385F73"
        dark
      >
        <v-img
          class="white--text align-end"
          height="200px"
          v-bind:src="song.albumImageUrl"
        >
          <v-card-title class="headline">{{song.title}}</v-card-title>

          <v-card-subtitle>{{song.artist}}</v-card-subtitle>

          <v-card-actions>
            <v-btn
              class="deep-purple lighten-3"
              @click="navigateTo(`/song/${song.id}`)"
             >
              View Song
            </v-btn>
          </v-card-actions>
        </v-img>
      </v-card>
    </v-container>
  </panel>
</template>

<script>
import Panel from '@/components/ReusableComponents/Panel'
import SongService from '../services/SongService'

export default {
  name: 'songs',
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongService.getAllSongs()).data
  }
}
</script>
