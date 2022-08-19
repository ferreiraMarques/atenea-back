const controller = require("../controllers/category.controller");

module.exports = function (app) {
  app.post("/api/category", controller.createCategory);
  app.get("/api/category", controller.showCategory);
};
