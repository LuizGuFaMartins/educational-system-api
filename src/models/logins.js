const Sequelize = require("sequelize");
const database = require("../services/database");
const Student = require("./students");

const Login = database.define(
  "logins",
  {
    login_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    login_email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    login_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    login_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    login_photo_url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Login.hasMany(Student, { foreignKey: "login_id" });

Login.sync();

module.exports = Login;


// module.exports = {
//   findAll: async function () {
//     return await Login.findAll();
//   },

//   save: async function (nome, autor, editora, ano) {
//     const book = await Login.create({
//       nome: nome,
//       autor: autor,
//       editora: editora,
//       ano: ano,
//     });
//     return book;
//   },

//   update: async function (id, obj) {
//     let book = await Login.findByPk(id);
//     if (!book) {
//       return false;
//     }

//     Object.keys(obj).forEach((key) => (book[key] = obj[key]));
//     await book.save();
//     return book;
//   },

//   delete: async function (id) {
//     const book = await Login.findByPk(id);
//     return book.destroy();
//   },

//   getById: async function (id) {
//     return await Login.findByPk(id);
//   },
// };
