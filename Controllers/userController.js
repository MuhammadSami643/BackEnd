const { hash } = require("bcryptjs");

const users = [];
module.exports = {
  createUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      users.map((user) => {
        if (user.username === username) {
          return res.send({
            response: "User Already Exists ",
          });
        }
      });
      password = await hash(password, 10);
      users.push({ username, password });
      return res.send({
        response: {
          username,
          password,
        },
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllUsers: (req, res) => {
    try {
      return res.send({
        response: users,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getUser: (req, res) => {
    try {
      const { username } = req.query;
      users.map((user) => {
        if (user.username === username) {
          return res.send({
            response: user,
          });
        }
        return res.send({
          response: "User does not exist",
        });
      });

      return res.send({
        response: users,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
