const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));
app.use('/scripts', express.static(__dirname + '/app/scripts'));

const artists = require("./app/data/artists.json");

require("./app/api/api-routes")(app);
require("./app/api/html-routes")(app);

app.listen(PORT, function() {
    console.log("Sever is listening at http://localhost:" + PORT);
})