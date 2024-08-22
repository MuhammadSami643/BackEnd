const { query } = require("express");
const { models } = require("./index");
const { Op } = require("sequelize");

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
  getAllUser: async (query) => {
    try {
      const user = await models.users.findAll({
        where: {
          ...(query.firstName
            ? { firstName: { [Op.substring]: query.firstName } }
            : true),
          ...(query.lastName
            ? { lastName: { [Op.substring]: query.lastName } }
            : true),
          ...(query.username
            ? { username: { [Op.substring]: query.username } }
            : true),
          ...(query.phone ? { phone: { [Op.substring]: query.phone } } : true),
          ...(query.email ? { email: { [Op.substring]: query.email } } : true),
        },
        // attributes: ["userId", "username"],   This format used when we want some of the fetch some selected items from database
        attributes: {
          //This format used when we want to exclude some specific data while fetching from database
          exclude: ["password"],
        },
        include: [
          {
            model: models.roles,
            attributes: ["role"],
          },
        ],
        order: [
          [
            query.orderWith ? query.orderWith : "firstName",
            query.orderBy ? query.orderBy : "ASC",
          ],
        ],
        offset: query.offset,
        limit: query.limit,
      });
      return {
        response: user,
      };
    } catch (error) {
      return response.send({
        error: error.message,
      });
    }
  },
  getUser: async ({ userId, username }) => {
    try {
      const user = await models.users.findOne({
        where: {
          ...(userId ? { userId: userId } : { username: username }),
        },
        // attributes: ["userId", "username"],   This format used when we want some of the fetch some selected items from database
        attributes: {
          //This format used when we want to exclude some specific data while fetching from database
          exclude: ["password"],
        },
        include: [
          {
            model: models.roles,
            attributes: ["role"],
          },
        ],
      });
      return {
        response: user,
      };
    } catch (error) {
      return response.send({
        error: error.message,
      });
    }
  },
  deleteUser: async ({ userId, username }) => {
    try {
      const user = await models.users.destroy({
        where: {
          ...(userId ? { userId: userId } : { username: username }),
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return response.send({
        error: error.message,
      });
    }
  },
};
