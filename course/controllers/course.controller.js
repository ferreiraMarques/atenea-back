const db = require("../../config/model.config");
const Course = db.course;

exports.createCourse = async(req, res) => {
    const course = req.body;
    try{
        await Course.create(course);
        res.status(201).json({ message: 'Curso creado satisfactoriamente!' });
    }catch(err){
        res.status(400).json({ message: err.message });
    }
  };
  
  exports.showCourse = async(req, res) => {
    try{
        const data = await Course.findAll();
        res.send(data);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
  };

  exports.showCourseById = async(req, res) => {
    const id = req.params.id;
    try{
        const data = await Course.findByPk(id);
        res.send(data);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
  };