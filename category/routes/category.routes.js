const controller = require("../controllers/category.controller");

module.exports = function (app) {
  app.post("/api/category/:id", controller.createCategory);
  app.get("/api/category", controller.showCategory);
  app.get("/api/category/:id", controller.showCategoryById);
  app.get("/api/categoryName/:id", controller.showCategoryByName);
};
