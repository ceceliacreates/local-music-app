const express = require("express");
const path = require("path");
const db = require("./models")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/public/'));
app.use('/scripts', express.static(__dirname + '/app/scripts/'));

require("./app/api/api-routes")(app);
require("./app/api/html-routes")(app);

db.sequelize.sync().then(function() {

    app.listen(PORT, function() {
        console.log("Sever is listening at http://localhost:" + PORT);
    })
})