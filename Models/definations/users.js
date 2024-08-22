const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/DBConnection");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");
const roles = require("./roles");

class users extends Model {}

users.init(
  {
    userId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    roleId: {
      type: DataTypes.STRING(256),
      allowNull: false,
      // defaultValue: "",  We can add default when there is already some data exist in database or when user not select a role
      references: {
        model: roles,
        key: "roleId",
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
  }
);

users.beforeCreate(async (user) => {
  user.userId = uuid();
  user.password = await hash(user.password, 10);
});

users.afterCreate((user) => {
  delete user.dataValues.password;
});

module.exports = users;
