var router = require("express").Router();

const { createUser } = require("../Controllers/userController");

router.post("/create-user", createUser);

module.exports = router;
