module.exports = function(sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {
        name: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING(2),
        url: DataTypes.STRING,
        description: DataTypes.TEXT,
        photoUrl: DataTypes.STRING
    });
    return Artist;
}