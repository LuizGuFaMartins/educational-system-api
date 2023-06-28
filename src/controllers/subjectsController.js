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
      where: { student_id: req.params.studentId },
    });

    let subjectsIds = studentSubject.map((element) => element.subject_id);
    const subjects = await Subject.findAll({
      where: {
        subject_id: {
          [Sequelize.Op.in]: subjectsIds,
        },
      },
    });

    return res.json(subjects);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.save = () => {
  return {};
};
