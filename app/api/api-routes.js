//let artists = require("../data/artists.json");
const db = require("../../models");

module.exports = function(app) {
    app.get("/api/artists", function(req, res) {
      db.Artist.findAll().then(function (artists) {

        res.json(artists);
      })
    });

   app.post("/api/add", function(req, res) {

    //add to server only
    //  console.log(req.body)
    //  artists.push(req.body);
    //  console.log(artists);

     let name = req.body.name;
     let url = req.body.url;
     let photo = req.body.photo;

     //add to database
     db.Artist.create({
       name: name,
       url: url,
       photo: photo
     }).then(res.end());
   })

   app.put("/api/edit", function (req, res) {

     //server only code
    //  const artistUpdate = req.body;
    //  const name = artistUpdate.name;
    //  const url = artistUpdate.url;
    //  const photo = artistUpdate.photo;

    //  const index = artists.findIndex(artist => artist.name === name)

    //  artists[index].name = name;
    //  artists[index].url = url;
    //  artists[index].photo = photo;

    //  console.log(artists)
    //  res.json(artists[index]);

    const artistUpdate = {
      name: req.body.name,
      url: req.body.url,
      photo: req.body.photo
    }

    db.Artist.update(artistUpdate, {
      where: {
        name: artistUpdate.name
      }
    }).then(function (updatedArtist) {
      res.json(updatedArtist);
    })
   })

   app.delete("/api/delete", function (req, res) {
    
    const artistId = req.body.id;

  // Server only
  //   const index = artists.findIndex(artist => artist.name === artistName);

  //  const deleted = artists.splice(index, 1);

  //    if (deleted.length >= 1) {

  //      res.json(deleted);
  //    }

  //    else {
  //     res.status(400).send('Bad Request')
  //    }

  db.Artist.destroy({
    where: {
      id: artistId
    }
  }).then(function (response) {
    if (response == 0) {
      res.status(400).send('Bad Request')
    }
    else {
      res.end()
    }
  })
   })
  };