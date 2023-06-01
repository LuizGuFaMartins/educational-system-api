const Sequelize = require("sequelize");
const database = require("../resources/database");

const LoginRole = database.define("logins_roles", {
  login_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  role_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
});

LoginRole.sync();

module.exports = LoginRole;
