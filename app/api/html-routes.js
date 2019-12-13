const path = require("path");

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
}