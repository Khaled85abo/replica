const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Track extends Model {}

Track.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.FLOAT,
    },
    album: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    singer: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "Track", // We need to choose the model name
  }
);

// the defined model is the class itself
console.log(Track === db.models.Track); // true
module.exports = Track;
