const { Sequelize } = require("sequelize");
const Student = require("../models/students");
const StudentSubject = require("../models/studentsSubjects");
const Subject = require("../models/subjects");
const Teacher = require("../models/teachers");

exports.findAll = async (req, res) => {
  try {
    const list = await Subject.findAll({
      include: [
        {
          model: Teacher,
          as: "teacher",
        },
      ],
    });
    return res.json(list);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.findPerStudent = async (req, res) => {
  try {
    const studentSubject = await StudentSubject.findAll({
      include: [
        {
          model: Subject,
          as: "subject",
        },
      ],
      where: { student_id: req.params.studentId },
    });

    let subjects = studentSubject.map((element) => element.subject);

    return res.json(subjects);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.save = () => {
  return {};
};
