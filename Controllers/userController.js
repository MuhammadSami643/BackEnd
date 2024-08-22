const { models } = require("../Models");
const {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
} = require("../Models/userModel");
const { getRole } = require("../Models/commonModel");
const responeHandler = require("../responseHandler");

// const users = [];
module.exports = {
  createUser: async (req, res) => {
    try {
      const role = await getRole(req.body);
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      delete req.body.role;
      console.log(role);
      req.body.roleId = role.response.dataValues.roleId;
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
        error: error.message,
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
  getUser: async (req, res) => {
    try {
      const users = await getUser(req.query);
      responeHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const users = await deleteUser(req.query);
      responeHandler(users, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
