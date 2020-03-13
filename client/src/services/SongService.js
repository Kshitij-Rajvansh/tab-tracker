import API from '@/services/API'

export default {
  addSong (song) {
    return API().post('add/song', song)
  },
  getAllSongs (credentials) {
    return API().get('songs')
  }
}
