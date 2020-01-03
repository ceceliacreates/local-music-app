module.exports = function(sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url:{
            type: DataTypes.STRING
        },
        photo:{
            type: DataTypes.STRING
        } 
    });
    return Artist;
}