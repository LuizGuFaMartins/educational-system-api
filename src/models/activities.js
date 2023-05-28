const Sequelize = require("database");
const database = require("../services/database");

const Activity = database.define("activities", {
  activity_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  activity_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  activity_init: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  activity_end: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  subject_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Activity.sync();

module.exports = Activity;
