const Joi = require("joi");

module.exports = {
  createUserSchema: async (req, res, next) => {
    const createUser = Joi.object({
      role: Joi.valid("Admin", "Instructer", "Trainee").required(),
      username: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9_]{3,34}$"))
        .required(),
      firstName: Joi.string().min(3).max(18).required(),
      lastName: Joi.string().min(3).max(18).required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required().length(13),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });
    try {
      await createUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getUserSchema: async (req, res, next) => {
    const username = Joi.object({
      userId: Joi.string(),
      username: Joi.string().pattern(new RegExp("^[a-zA-Z0-9_]{3,34}$")),
    });
    try {
      await username.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllUserSchema: async (req, res, next) => {
    const getAllUser = Joi.object({
      pageNo: Joi.number().required(),
      limit: Joi.number().valid(3, 6).required(),
      orderWith: Joi.string().valid(
        "firstName",
        "lastName",
        "email",
        "username",
        "phone"
      ),
      orderBy: Joi.string().valid("ASC", "DESC"),

      username: Joi.string(),
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string(),
      phone: Joi.string(),
      role: Joi.string().valid("Admin", "Instructer", "Trainee"),
    });
    try {
      await getAllUser.validateAsync(req.query);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  updateUserSchema: async (req, res, next) => {
    const updateUser = Joi.object({
      userId: Joi.string().required(),
      username: Joi.string(),
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string(),
      phone: Joi.string(),
    });
    try {
      await updateUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
