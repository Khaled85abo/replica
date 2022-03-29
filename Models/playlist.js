const { DataTypes, Model } = require("sequelize");
const db = require("../db");
class Playlist extends Model {}

Playlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    trackCount: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "Playlist",
  }
);
// the defined model is the class itself
console.log(Playlist === db.models.Playlist); // true

module.exports = Playlist;
