var router = require("express").Router();

const {
  createUserSchema,
  getUserSchema,
  getAllUserSchema,
  updateUserSchema,
} = require("../validations/user");

const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../Controllers/userController");

router.post("/create-user", createUserSchema, createUser);
router.get("/get-all-users", getAllUserSchema, getAllUsers);
router.get("/get-user-by-username", getUserSchema, getUser);
router.delete("/delete-user", getUserSchema, deleteUser);
router.patch("/update-user", updateUserSchema, updateUser);

module.exports = router;
