module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("question", {
        question:{
            type: DataTypes.STRING
        },
        answer:{
            type: DataTypes.STRING
        }
    });
    return Question;
};
