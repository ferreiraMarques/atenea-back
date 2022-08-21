const controller = require("../controllers/profile.controller");
module.exports = function (app) {
  const multer = require("multer");

    //multer middelware
    let storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, 'uploads');
        },
        filename: function(req, file, cb){
            cb(null, file.fieldname+ "_" + Date.now() + "_" + file.originalname);
        },
    });

    let upload = multer({
        storage: storage,
    }).single("image");

  app.post("/api/profile/:id", upload, controller.createProfile);
  app.get("/api/profile", controller.showProfile);
  app.get("/api/profile/:id", controller.showProfileById);
};