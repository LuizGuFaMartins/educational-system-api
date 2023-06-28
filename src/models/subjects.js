const Sequelize = require("sequelize");
const database = require("../resources/database");
const Teacher = require("./teachers");
const StudentSubject = require("./studentsSubjects");
const Student = require("./students");

const Subject = database.define(
  "subjects",
  {
    subject_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subject_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    teacher_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    course_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Subject.belongsTo(Teacher, { foreignKey: "teacher_id", allowNull: false });
// Subject.belongsToMany(Student, {
//   through: StudentSubject,
//   foreignKey: "subject_id",
// });

Subject.sync();

module.exports = Subject;
