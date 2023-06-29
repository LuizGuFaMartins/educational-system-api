const Student = require("../models/students");
const Login = require("../models/logins");
const StudentSubject = require("../models/studentsSubjects");
const Subject = require("../models/subjects");
const Teacher = require("../models/teachers");
const Activity = require("../models/activities");
const { Sequelize } = require("sequelize");

exports.create = async (req, res) => {
  try {
    const activity = {
      activity_name: req.body.activity_name,
      activity_init: req.body.activity_init,
      activity_end: req.body.activity_end,
      subject_id: req.body.subject_id,
    };

    const saved = await Activity.create(activity);

    return res.json(saved);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const list = await Student.findAll({
      include: [
        {
          model: Login,
        },
      ],
    });
    return res.json(list);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.findActivitiesPerStudentSubjects = async (req, res) => {
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

    let activities = await Activity.findAll({
      where: {
        subject_id: {
          [Sequelize.Op.in]: subjectsIds,
        },
      },
      include: [
        {
          model: Subject,
          as: "subject",
        },
      ],
    });

    return res.json(activities);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.save = () => {
  return {};
};
