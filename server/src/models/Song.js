module.exports = (sequelize, DataTypes) => { 
  const Song = sequelize.define('Song', {
                title: {
                  type: DataTypes.STRING
                },
                artist: {
                  type: DataTypes.STRING
                },
                genre: {
                  type: DataTypes.STRING
                },
                album: {
                  type: DataTypes.STRING
                },
                albumImageUrl: {
                  type: DataTypes.STRING
                },
                youtubeID: {
                  type: DataTypes.STRING
                },
                lyrics: {
                  type: DataTypes.TEXT
                },
                tab: {
                  type: DataTypes.TEXT
                }
              });

  return Song;
}
