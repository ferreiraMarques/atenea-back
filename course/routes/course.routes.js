const controller = require("../controllers/course.controller");

module.exports = function (app) {
  app.post("/api/course", controller.createCourse);
  app.get("/api/course", controller.showCourse);   
  app.get("/api/course/:id", controller.showCourseById); 
};
