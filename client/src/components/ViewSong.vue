<template>
    <div>
      <v-row>
        <v-col cols="6">
          <panel title="Song MetaData">
            <v-btn
                slot="slot-toolbar-button"
                small
                light
                absolute
                right
                middle
                fab
                @click="navigateTo({name: 'editSong'})"
              >
                <v-icon>edit</v-icon>
              </v-btn>
            <v-card
              slot="content-1"
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
              </v-img>
            </v-card>
          </panel>
        </v-col>

        <v-col cols="6">
            <you-tube
              :youTubeId="iframeURL"
            >
            </you-tube>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <panel title="Tabs">
            <textarea
              slot="content-1"
              label="Tab"
              v-model="song.tab"
              readonly
            ></textarea>
          </panel>
        </v-col>

        <v-col cols="6">
          <panel title="Lyrics">
            <textarea
              slot="content-1"
              label="Lyrics"
              v-model="song.lyrics"
              readonly
            ></textarea>
          </panel>
        </v-col>
      </v-row>
    </div>
</template>

<script>
import Panel from '@/components/ReusableComponents/Panel'
import YouTube from '@/components/ReusableComponents/YouTube'
import SongService from '@/services/SongService'

export default {
  name: 'ViewSong',
  data () {
    return {
      song: {},
      iframeURL: null
    }
  },
  components: {
    Panel,
    YouTube
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    this.iframeURL = `https://www.youtube.com/embed/${this.song.youtubeID}?autoplay=0`
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  padding: 40px;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;

}
</style>
