const db = require("../../config/model.config");
const Profile = db.profile;
const User = db.user;

exports.createProfile = async(req, res) => {
  const id = req.params.id;
  const profile = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    direction: req.body.direction,
    userId: id,
  }
  try{
      await Profile.create(profile);
      res.status(201).json({ message: 'Perfil creado satisfactoriamente!' });
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.showProfile = async(req, res) => {
  try{
      const data = await Profile.findAll({
        include: [
          {model: User}
        ]
      });
      res.send(data);
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.showProfileById = async(req, res) => {
  const id = req.params.id;
  try{
      const data = await Profile.findByPk(id, {
        include: [
          {
            model: User,
            attributes: ["id", "email"]
          }
        ],
        attributes: ["first_name", "last_name", "direction", "image"]
      })
      res.send(data);
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};
