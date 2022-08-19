const controller = require("../controllers/question.controller");

module.exports = function (app) {
  app.post("/api/question/:id", controller.createQuestion);
  app.get("/api/question", controller.showQuestion);
  app.get("/api/question/:id", controller.showQuestionById);
};
