// All tasks for which we don't want to use controller Like here we don't need Controller of Roles so where we want to use role we use CommonModel

const { models } = require("./index");
module.exports = {
  getRole: async ({ role }) => {
    try {
      const roles = await models.roles.findOne({
        where: {
          role: role,
        },
      });
      return {
        response: roles,
      };
    } catch (error) {
      console.log(error);
      return {
        error: error,
      };
    }
  },
};
