const sequelize = require("../bin/DBConnection");
const users = require("./definations/users");
const roles = require("./definations/roles");

const models = { users, roles };

roles.hasMany(users, { foreignKey: "roleId" });
users.belongsTo(roles, { foreignKey: "roleId" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
