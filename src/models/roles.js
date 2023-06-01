const Sequelize = require("sequelize");
const database = require("../resources/database");

const Role = database.define("roles", {
  role_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role_description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Role.sync();

module.exports = Role;
