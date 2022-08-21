module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("categorias", {
        title: {
            type: DataTypes.STRING
        },
        level: {
            type: DataTypes.INTEGER
        }
    });
    return Category;
};