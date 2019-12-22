module.exports = function(sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {
        name: DataTypes.STRING,
        url: DataTypes.STRING,
        photo: DataTypes.STRING
    });
    return Artist;
}