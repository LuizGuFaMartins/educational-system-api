const Sequelize = require("database");
const database = require("../services/database");

const Subject = database.define("subjects", {
  subject_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subject_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teacher_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  course_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Subject.sync();

module.exports = Subject;
