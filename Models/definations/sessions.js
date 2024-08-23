const { Model, DataTypes } = require("sequelize");
const users = require("./users");
const sequelize = require("../../bin/DBConnection");

class sessions extends Model {}

sessions.init(
  {
    sessionId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userId: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(),
      references: {
        model: users,
        key: "userId",
      },
    },
  },
  {
    timestamps: true,
    modelName: "sessions",
    sequelize,
  }
);

module.exports = sessions;
