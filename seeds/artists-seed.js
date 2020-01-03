const db = require('../models');
const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, '/artists.json'));
let artists = JSON.parse(data);

db.sequelize.sync({ force: true }).then(function() {
  db.Artist.bulkCreate(artists)
    .then(function() {
      console.log('seeded');
      db.sequelize.close();
    })
    .catch(function(err) {
      console.log(err);
      db.sequelize.close();
    });
});