const Playlist = require("./playlist");
const Track = require("./track");

Track.belongsToMany(Playlist, { through: "Junction" });
Playlist.belongsToMany(Track, { through: "Junction" });

module.exports = { Track, Playlist };
