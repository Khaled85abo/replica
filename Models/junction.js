const { Model, DataTypes } = require("sequelize");
const db = require("../db");
const Playlist = require("./playlist");
const Track = require("./track");
class Junction extends Model {}

Junction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    trackId: {
      type: DataTypes.INTEGER,
      references: {
        model: Track,
        key: "id",
      },
    },
    playlistId: {
      type: DataTypes.INTEGER,
      references: {
        model: Playlist,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Junction",
  }
);

// the defined model is the class itself
console.log(Junction === db.models.Junction); // true
module.exports = Junction;
