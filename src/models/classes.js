const Sequelize = require("database");
const database = require("../services/database");

const Class = database.define("classes", {
  class_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  class_year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  class_period: {
    type: Sequelize.INTEGER,
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

Class.sync();

module.exports = Class;
