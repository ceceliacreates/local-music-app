const { Artist } = require("../app/scripts/components/Artist.js");
let artists = require("../app/data/artists.json");

var assert = require('chai').assert;
 require('../app/scripts/components/Artist.js');

describe('Artist', function() {
  describe('constructor', function() {
    it('should create a new Artist', function() {
      //arrange
      const artist = new Artist("The Beatles", "http://thebeatles.com", "beatles.jpg");

      //act

      //assert
      assert.equal(artist.name, "The Beatles");
      assert.equal(artist.url, "http://thebeatles.com");
      assert.equal(artist.photo, "beatles.jpg");
    });
  });

  describe('validateValid', function () {
      it('should return true when passed valid data', function() {
          //arrange
          const artist = new Artist("The Beatles", "http://thebeatles.com", "beatles.jpg");
          const expected = true;

          //act
        const actual = artist.validate();

          //assert

          assert.equal(expected, actual)

      })
  })

  describe('invalidateInvalid', function () {
      it('should return false when constructed with only two parameters', function () {
          //arrange
          const artist = new Artist("The Beatles", "http://thebeatles.com");
          const expected = false;

          //act
          const actual = artist.validate();
          //assert

          assert.equal(expected, actual);
      })
  })
});