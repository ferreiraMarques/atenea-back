const db = require("../../config/model.config");
const Course = db.course;
const Quiz = db.quiz;

exports.createQuiz = async(req, res) => {
  const idProfile = req.params.idProfile;
  const idCourse = req.params.idCourse;
  const obj = {
    name: req.body.name,
    profileId: idProfile,
    courseId: idCourse,
  }
  try{
      await Quiz.create(obj);
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

exports.showQuizById = async(req, res) => {
  const id = req.params.id;
  try{
      const data = await Quiz.findByPk(id, {
        include: [
          {
            model: Course
          }
        ]
      })
      res.send(data);
  }catch(err){
      res.status(400).json({ message: err.message });
  }
};


