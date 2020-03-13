const { Song } = require('../models/Song');

module.exports = {
  async addSong (req, res) {
    try {
      const song = await Song.create(req.body);
      res.send(song);
    } catch (error) {
      console.log(error.message)
      res.status(500).send({
        error: 'An error ocurred while adding the song'
      })
    }
  },

  async getAllSongs (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      });
      res.send(songs);
    } catch (error) {
      res.status(500).send({
        error: 'An error ocurred while fetching the songs'
      })
    }
  }
}