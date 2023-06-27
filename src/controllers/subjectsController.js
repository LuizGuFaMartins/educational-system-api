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
    console.log("\n\nid: ", req.params.studentId);

    const student = await Student.findOne({
      where: { student_id: req.params.studentId },
    });
    const subjects = await Subject.findAll({
      include: [
        {
          model: Student,
          where: { id: student.id },
        },
      ],
    });

    console.log("\n\n subjects: ", subjects);

    return res.json(list);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.save = () => {
  return {};
};
