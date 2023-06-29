const { Sequelize } = require("sequelize");
const Student = require("../models/students");
const StudentSubject = require("../models/studentsSubjects");
const Subject = require("../models/subjects");
const Teacher = require("../models/teachers");

exports.create = async (req, res) => {
  try {
    const subject = {
      subject_code: req.body.subject_code,
      subject_name: req.body.subject_name,
      teacher_id: req.body.teacher_id,
      course_id: req.body.course_id,
    };

    const saved = await Subject.create(subject);

    return res.json(saved);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

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

    let subjectsIds = studentSubject.map(
      (element) => element.subject.subject_id
    );

    let subjects = await Subject.findAll({
      where: {
        subject_id: {
          [Sequelize.Op.in]: subjectsIds,
        },
      },
      include: [
        {
          model: Teacher,
          as: "teacher",
        },
      ],
    });

    return res.json(subjects);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.cancelSubscription = async (req, res) => {
  try {
    const studentSubject = await StudentSubject.destroy({
      where: {
        student_id: req.body.student_id,
        subject_id: req.body.subject_id,
      },
    });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.subscribe = async (req, res) => {
  try {
    const existent = await StudentSubject.findOne({
      where: {
        student_id: req.body.student_id,
        subject_id: req.body.subject_id,
      },
    });

    if (!existent) {
      const studentSubject = await StudentSubject.create({
        student_id: req.body.student_id,
        subject_id: req.body.subject_id,
      });
    } else {
      return res
        .status(409)
        .json({ error: "Estudante já matriculado na disciplina" });
    }

    return res.status(201).json(studentSubject);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.save = () => {
  return {};
};
