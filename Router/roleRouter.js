var router = require("express").Router();

const { createUserSchema } = require("../validations/user");
const { createRole } = require("../Controllers/roleController");

router.post("/create-role", createUserSchema, createRole);

module.exports = router;
