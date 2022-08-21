const db = require("../../config/model.config");
const Category = db.categories;
const Course = db.course;

exports.createCategory = async(req, res) => {
  const id = req.params.id;
  const obj = {
    title: req.body.title,
    level: req.body.level,
    courseId: id,
  }
  try{
      await Category.create(obj);
      res.status(201).json({ message: 'Categoria creada satisfactoriamente!' });
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.showCategory = async(req, res) => {
  try{
      const data = await Category.findAll({
        include: [
          {
            model: Course,
            as: "courses"
          }
        ]
      });
      res.send(data);
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.showCategoryById = async(req, res) => {
  const id = req.params.id;
  try{
      const data = await Category.findByPk(id, {
        include: [
          {
            model: Course,
            as: "courses",
          }
        ],
        where: {
          courseId: id
        }
      })
      res.send(data);
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.showCategoryByName = async(req, res) => {
  const id = req.params.id;
  try{
      const data = await Category.findAll(id, {
        include: [
          {
            model: Course,
            as: "courses",
            where: {
              courseId: id
            }
          },
          
        ]
      })
      res.send(data);
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};









