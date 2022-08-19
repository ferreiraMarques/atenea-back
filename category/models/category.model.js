module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("categorias", {
        title: {
            type: DataTypes.STRING
        }
    });
    return Category;
};