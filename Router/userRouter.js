var router = require("express").Router();

const { createUserSchema } = require("../validations/user");
const { createUser, getUsers } = require("../Controllers/userController");

router.post("/create-user", createUserSchema, createUser);
router.get("/get-all-users", getUsers);

module.exports = router;
