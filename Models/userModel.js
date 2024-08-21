const { models } = require("./index");
module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getAllUser: async () => {
    try {
      const users = await models.users.findAll({
        // attributes: ["userId", "username"],   This format used when we want some of the fetch some selected items from database
        attributes: {
          //This format used when we want to exclude some specific data while fetching from database
          exclude: ["password"],
        },
      });
      return {
        response: users,
      };
    } catch (error) {
      return response.send({
        error: error.message,
      });
    }
  },
};
