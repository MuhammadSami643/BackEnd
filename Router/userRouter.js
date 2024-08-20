var router = require("express").Router();

const { createUser, getUsers } = require("../Controllers/userController");

router.post("/create-user", createUser);
router.get("/get-all-users", getUsers);

module.exports = router;
