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

// module.exports = {
//   findAll: async function () {
//     return await Student.findAll();
//   },

//   save: async function (nome, autor, editora, ano) {
//     const book = await Student.create({
//       nome: nome,
//       autor: autor,
//       editora: editora,
//       ano: ano,
//     });
//     return book;
//   },

//   update: async function (id, obj) {
//     let book = await Student.findByPk(id);
//     if (!book) {
//       return false;
//     }

//     Object.keys(obj).forEach((key) => (book[key] = obj[key]));
//     await book.save();
//     return book;
//   },

//   delete: async function (id) {
//     const book = await Student.findByPk(id);
//     return book.destroy();
//   },

//   getById: async function (id) {
//     return await Student.findByPk(id);
//   },
// };
