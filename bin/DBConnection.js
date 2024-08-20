require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log("Failed to connect to database", error);
  });

module.exports = sequelize;
