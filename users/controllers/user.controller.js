const db = require("../../config/model.config");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.showuserById = async(req, res) => {
    const id = req.params.id;
    try{
        const data = await User.findByPk(id, {
          attributes: ["valid"]
        })
        res.send(data);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
  };