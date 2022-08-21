const db = require("../../config/model.config");
const Profile = db.profile;
const User = db.user;

exports.createProfile = async(req, res) => {
  const id = req.params.id;
  const profile = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    direction: req.body.direction,
    image: req.file.filename,
    userId: id,
  }
  try{
      await Profile.create(profile);
      res.status(201).json({ message: 'Perfil creado satisfactoriamente!' });
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.updateProfile = async(req, res) =>{
  const id = req.params.id;
  let new_image = '';
  if(req.file){
      new_image = req.file.filename;
      try{
          fs.unlinkSync("./uploads/" + req.body.old_image);
      }catch(err){
          console.log(err);
      }
  }else{
      new_image = req.body.old_image;
  }
  const newProfile = req.body;
  newProfile.image = new_image;
  try{
      await Producto.update(newProfile, {
          where: { id: id}
      });
      res.status(200).json({ message: "Producto actualizado satisfactoriamente " });
  }catch{
      res.status(404).json({ message: err.message});
  }
}

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