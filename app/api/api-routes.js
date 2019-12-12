const artists = require("../data/artists.json");

module.exports = function(app) {
    app.get("/api/artists", function(req, res) {
      res.json(artists);
    });

   app.post("/api/add", function(req, res) {
     console.log(req.body)
     res.send('Artist added');
   })
  };