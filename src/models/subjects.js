const Sequelize = require("sequelize");
const database = require("../resources/database");
const Teacher = require("./teachers");

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


Subject.sync();

module.exports = Subject;
