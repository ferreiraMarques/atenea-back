const fs = require('fs');
const path = require('path');
const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize(
  {
    host: process.env.HOSTDB,
    dialect: "mysql",
    username: process.env.USERDB,
    database: process.env.DB,
    password: process.env.PASSWORDDB,
    dialectOptions: {
       ssl: {
          required: true,
          rejectUnauthorized:true,
          cert: fs.readFileSync(path.join(__dirname, 'ca-cert.pem'))
       }
     },
    define: {
      timestamps: true
      ,
    },
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


module.exports = db;