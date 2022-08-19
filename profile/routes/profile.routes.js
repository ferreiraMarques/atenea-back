const controller = require("../controllers/profile.controller");

module.exports = function (app) {
  app.post("/api/profile/:id", controller.createProfile);
  app.get("/api/profile", controller.showProfile);
  app.get("/api/profile/:id", controller.showProfileById);
};