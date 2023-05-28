const Sequelize = require("database");
const database = require("../services/database");

const Teacher = database.define("teachers", {
  teacher_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teacher_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teacher_birthday: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  teacher_phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teacher_specialization: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  login_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Teacher.sync();

module.exports = Teacher;
