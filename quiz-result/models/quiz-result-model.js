module.exports = (sequelize, Sequelize) => {
    const QuizResult = sequelize.define("quiz-result", {
        name:{
            type: Sequelize.INTEGER
        },
        value:{
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    });
    return QuizResult;
};