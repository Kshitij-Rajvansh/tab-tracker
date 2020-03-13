<template>
  <panel title="Songs">
    <v-container slot="content-1" v-for="song in songs" :key="song.title">
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">{{song.title}}</v-card-title>

            <v-card-subtitle>{{song.artist}}</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn slot="content-inside-div">
      More Songs
    </v-btn>
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
  async mounted () {
    this.songs = (await SongService.getAllSongs()).data
  }
}
</script>
