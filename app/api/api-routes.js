let artists = require("../data/artists.json");

module.exports = function(app) {
    app.get("/api/artists", function(req, res) {
      res.json(artists);
    });

   app.post("/api/add", function(req, res) {
     console.log(req.body)
     artists.push(req.body);
     console.log(artists);
     res.end();
   })

   app.put("/api/edit", function (req, res) {
     console.log(req.body);

     const artistUpdate = req.body;
     const name = artistUpdate.name;
     const url = artistUpdate.url;
     const photo = artistUpdate.photo;

     const index = artists.findIndex(artist => artist.name === name)

     artists[index].name = name;
     artists[index].url = url;
     artists[index].photo = photo;

     console.log(artists)
     res.json(artists[index]);
   })
  };