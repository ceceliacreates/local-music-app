const artists = require("../data/artists.json");

module.exports = function(app) {
    app.get("/api/artists", function(req, res) {
      console.log(artists);
      res.json(artists);
    });

    // app.post("/api/friends", function(req, res) {
    //   const newDog = req.body;
    //   const newScores = newDog.answers;
    //   const differences = [];
    //   const dogs = [];
    //   friendsArray.forEach(function(dog) {
    //     const matchScores = dog.answers;
    //     let totalDifference = 0;
    //     for (let i = 0; i < matchScores.length; i++) {
    //       totalDifference += Math.abs(matchScores[i] - newScores[i]);
    //     }
    //     differences.push(totalDifference);
    //     differences.sort();
    //     bestScore = differences[0];
    //     dogs.push({ name: dog.name, photoURL: dog.photoURL, difference: totalDifference });
    //   });
    //   const bestMatch = dogs.find(function(element) {
    //     return element.difference === bestScore;
    //   });
    //   friendsArray.push(newDog);
    //   res.json(bestMatch);
    // });
  };