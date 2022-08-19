const db = require("../../config/model.config");
const Category = db.categories;
const Question = db.questions;

exports.createCategory = async(req, res) => {
  const category = req.body;
  try{
      await Category.create(category);
      res.status(201).json({ message: 'Categoria creada satisfactoriamente!' });
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.showCategory = async(req, res) => {
  try{
      const data = await Category.findAll();
      res.send(data);
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};



