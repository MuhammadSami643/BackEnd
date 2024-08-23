var router = require("express").Router();

const { userLoginSchema } = require("../validations/user");

const { login } = require("../Controllers/authController");

router.post("/login", userLoginSchema, login);

module.exports = router;
