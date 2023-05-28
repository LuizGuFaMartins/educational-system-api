const Sequelize = require("sequelize");
const database = require("../services/database");
const logins = require("./logins");
const Login = require("./logins");

const Student = database.define(
  "students",
  {
    student_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    student_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    student_birthday: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    student_phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    login_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Student.belongsTo(Login, { foreignKey: "login_id", allowNull: false });

Student.sync();

module.exports = Student;
