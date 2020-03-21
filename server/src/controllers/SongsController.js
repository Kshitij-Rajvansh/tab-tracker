const { Song } = require('../models');

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
  },

  async show (req, res) {
    try {
      const song = await Song.findByPk(req.params.songId);
      res.send(song);
    } catch (error) {
      res.status(500).send({
        error: error.message//'An error ocurred while fetching the songs'
      })
    }
  },

  async editSong (req, res) {
    try {
      console.log('from controller ---->', req.params.songId);
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      });
      res.send(song);
    } catch (error) {
      res.status(500).send({
        error: error.message//'An error ocurred while fetching the songs'
      });
    }
  }
}