module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        answer:{
            type: Sequelize.STRING
        },
        correct:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        }
    });
    return Question;
};
