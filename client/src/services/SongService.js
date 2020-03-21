import API from '@/services/API'

export default {
  addSong (song) {
    return API().post('add/song', song)
  },
  getAllSongs (credentials) {
    return API().get('songs')
  },
  show (songId) {
    return API().get(`songs/${songId}`)
  },
  put (songId) {
    return API().put(`songs/${songId}/edit`)
  }
}
