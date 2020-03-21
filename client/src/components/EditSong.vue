<template>
  <div>
    <v-row>
      <v-col cols="4">
        <panel title="Song Metadata">
          <v-container slot="content-1">
            <v-form
              ref="form"
            >
              <v-text-field
                label="Title"
                v-model="song.title"
                required
                :rules="[required]"
              ></v-text-field>

              <v-text-field
                label="Artist"
                v-model="song.artist"
                required
                :rules="[required]"
              ></v-text-field>

              <v-text-field
                label="Genre"
                v-model="song.genre"
                required
                :rules="[required]"
              ></v-text-field>

              <v-text-field
                label="Album"
                v-model="song.album"
                required
                :rules="[required]"
              ></v-text-field>

              <v-text-field
                label="Album Image URL"
                v-model="song.albumImageUrl"
                required
                :rules="[required]"
              ></v-text-field>

              <v-text-field
                label="You Tube ID"
                v-model="song.youtubeID"
                required
                :rules="[required]"
              ></v-text-field>

              <div>
                <span class="my-error" v-if="error">
                  {{error}}
                </span>
              </div>

              <v-btn
                color="success"
                class="mr-4"
                @click="editSong"
              >
                Save Changes
              </v-btn>
            </v-form>
          </v-container>
        </panel>
      </v-col>

      <v-col cols="8">
        <panel title="Song Structure">
          <v-container slot="content-1">
            <v-textarea
                label="Tab"
                v-model="song.tab"
                required
                :rules="[required]"
              ></v-textarea>

              <v-textarea
                label="Lyrics"
                v-model="song.lyrics"
                required
                :rules="[required]"
              ></v-textarea>
          </v-container>
        </panel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Panel from '@/components/ReusableComponents/Panel'
import SongService from '@/services/SongService'

export default {
  name: 'editSong',
  data () {
    return {
      error: null,
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeID: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async editSong () {
      const allFieldsAreFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!allFieldsAreFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        const songId = this.$store.state.route.params.songId
        const resp = await SongService.put(songId)
        console.log(resp)
        this.$router.push({
          name: 'songs',
          params: {
            songId: songId
          }
        })
      } catch (error) {
        console.log(error.response.data.error)
      }
    }
  },
  components: {
    Panel
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongService.show(songId)).data
    } catch (error) {
      this.error = error.response.data.error
    }
  }
}
</script>
