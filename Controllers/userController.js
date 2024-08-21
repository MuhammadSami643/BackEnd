const { models } = require("../Models");
const { createUser, getAllUser } = require("../Models/userModel");
const responeHandler = require("../responseHandler");

// const users = [];
module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await createUser(req.body);
      responeHandler(user, res);

      /*     Our Old work when we didn't use any data base to store information and we store our information in array  

const { username, password } = req.body;
      users.map((user) => {
        if (user.username === username) {
          return res.send({
            response: "User Already Exists",
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
*/
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await getAllUser();
      responeHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
    /*  OLD WORK 
  try {
      return res.send({
        response: users,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
*/
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
