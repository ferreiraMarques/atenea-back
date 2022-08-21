module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("courses", {
        name: {
            type: DataTypes.STRING
        }
    });
    return Course;
};