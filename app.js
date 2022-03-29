const db = require("./db");
const express = require("express");
const { Session } = require("express-session");
const app = express();

const { Playlist, Track } = require("./Models");
const Junction = require("./Models/junction");

async function authenticate() {
  try {
    await db.authenticate();
    await Playlist.sync();
    await Track.sync();
    await Junction.sync();
    console.log("Successful connection.");
  } catch (error) {
    console.log("error authenticating sequelize: ", error);
  }
}
authenticate();
insertData();
async function insertData() {
  // await Track.create({
  //   name: "When you left me alone in the darkness",
  //   duration: 4.35,
  //   singer: "Nabhan/Khaled",
  //   year: new Date(),
  //   language: "Bangali/Arabiska",
  // });
  // await Track.create({
  //   name: "When you left me alone in the light",
  //   duration: 12,
  //   singer: "Nabhan/Khaled",
  //   year: new Date(),
  //   language: "Bangali/Arabiska",
  // });
  // await Playlist.create({
  //   name: "Where hoo woo",
  //   trackCount: 14,
  // });
  await Junction.create({
    trackId: 2,
    playlistId: 1,
  });
}

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hej");
});

app.listen(4000);
