var router = require("express").Router();

const { createUserSchema, getUserSchema } = require("../validations/user");

const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
} = require("../Controllers/userController");

router.post("/create-user", createUserSchema, createUser);
router.get("/get-all-users", getAllUsers);
router.get("/get-user-by-username", getUserSchema, getUser);
router.delete("/delete-user", getUserSchema, deleteUser);

module.exports = router;
