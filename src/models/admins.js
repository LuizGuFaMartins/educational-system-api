const Sequelize = require("sequelize");
const database = require("../resources/database");

const Admin = database.define("admins", {
  admin_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  admin_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  admin_birthday: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  admin_phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  login_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Admin.sync();

module.exports = Admin;
