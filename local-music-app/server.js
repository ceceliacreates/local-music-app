const express = require("express");
const app = express();

const PORT = process.env.PORT || 3305;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, function () {
    console.log("App running on port " + PORT)
});