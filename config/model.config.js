const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../users/models/user.model")(sequelize, Sequelize);
db.role = require("../role/role.model")(sequelize, Sequelize);
db.categories = require("../category/models/category.model")(sequelize, Sequelize);
db.questions = require("../questions/models/question.models")(sequelize, Sequelize);
db.profile = require("../profile/models/profile.model")(sequelize, Sequelize);
db.course = require("../course/models/course.mode")(sequelize, Sequelize);
db.quiz = require("../quiz/models/quiz.model")(sequelize, Sequelize);
db.quizResult = require("../quiz-result/models/quiz-result-model")(sequelize, Sequelize);

/** Un user tienes muchos roles y al revez**/
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.ROLES = ["user", "admin", "moderator"];

//course tiene una category
db.course.hasMany(db.categories, { as: "category"});
db.categories.belongsTo(db.course, {
  foreignKey: "courseId",
  as: "courses"
});

//category tiene una questions
db.categories.hasMany(db.questions, { as: "question"});
db.questions.belongsTo(db.categories, {
  foreignKey: "categoriaId",
  as: "categorias"
});

//relacion one to one, perfil y usuario
db.user.hasOne(db.profile);
db.profile.belongsTo(db.user);


//un usuario tiene un quiz
db.profile.hasOne(db.quiz);
db.quiz.belongsTo(db.profile);

//un course tiene un quiz
db.course.hasOne(db.quiz);
db.quiz.belongsTo(db.course);

//un quiz tiene un quiz-result
// db.quiz.hasMany(db.quizResult, { as: "quizResul"});
// db.quizResult.belongsTo(db.quiz, {
//   foreignKey: "quizId",
//   as: "quiz"
// });

module.exports = db;