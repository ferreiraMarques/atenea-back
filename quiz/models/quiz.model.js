module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define("quiz", {
        name:{
            type: Sequelize.STRING
        }
    });
    return Quiz;
};