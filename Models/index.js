const sequelize = require("../bin/DBConnection");
const users = require("./definations/users");
const roles = require("./definations/roles");
const sessions = require("./definations/sessions");

const models = { users, roles, sessions };

roles.hasMany(users, { foreignKey: "roleId" });
users.belongsTo(roles, { foreignKey: "roleId" });

users.hasOne(sessions, { foreignKey: "userId" });
sessions.belongsTo(users, { foreignKey: "userId" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
