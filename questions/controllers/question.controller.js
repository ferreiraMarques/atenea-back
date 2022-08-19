const db = require("../../config/model.config");
const Question = db.questions;
const Category = db.categories;

exports.createQuestion = async(req, res) => {
  const id = req.params.id;
  const obj = {
    question: req.body.question,
    answer: req.body.answer,
    categoriaId: id,
  }
  try{
      await Question.create(obj);
      res.status(201).json({ message: 'Pregunta creada satisfactoriamente!' });
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.showQuestion = async(req, res) => { //categorias
  try{
      const data = await Question.findAll({
        include: [
          {
            model: Category,
            as: "categorias"
          }
        ]
      });
      res.send(data);
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.showQuestionById = async(req, res) => {
  const id = req.params.id;
  try{
      const data = await Category.findByPk(id, {
        include: [
          {
            model: Question,
            as: "question"
          }
        ]
      })
      res.send(data);
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};


