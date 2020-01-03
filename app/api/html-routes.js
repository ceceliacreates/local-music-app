const path = require("path");
const db = require("../../models");
const fs = require("fs");

module.exports = function(app) {
    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.get("/artists", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/artists.html"));
    })

    app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    })

    app.get("/edit", function (req,res) {
        res.sendFile(path.join(__dirname, "../public/edit.html"));
    })

    app.get("/artist/:id", function(req,res) {
        db.Artist.findOne({where: {id: req.params.id}}).then(function (artist) {
            const artistName = artist.name;
            const artistUrl = artist.url;
            const artistPhoto = artist.photo;
            data = `
            <html>
            <head>
            <title>Local Artist App</title>
            </head>
            <body>
            <h3>${artistName}</h3>
            <img src=${artistPhoto}>
            <h5>${artistUrl}</h5>
            </body>
            </html>`;

            fs.writeFile('./app/data/artist.html', data, (err) => {
                if (err) throw err;
                console.log("File saved");
                res.sendFile(path.join(__dirname, "../data/artist.html"));
            })
        })

    })
}