const db = require("../../config/model.config");
const QuizResult = db.quizResult;
const Quiz = db.quiz;

exports.createQuiz = async(req, res) => {
  const id = req.params.id;
  const obj = {
    name: req.body.name,
    value: req.body.value,
    quizId: id
  }
  try{
      await QuizResult.create(obj);
      res.status(201).json({ message: 'Pregunta creada satisfactoriamente!' });
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};

exports.showQuiz = async(req, res) => {
  try{
      const data = await Quiz.findAll({
        include: [
          {
            model: Course
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