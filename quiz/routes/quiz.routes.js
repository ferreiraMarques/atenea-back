const controller = require("../controllers/quiz.controller");

module.exports = function (app) {
  app.post("/api/quiz/:idProfile/:idCourse", controller.createQuiz);
  app.get("/api/quiz", controller.showQuiz);
  app.get("/api/quiz/:id", controller.showQuizById);
};
