var router = require("express").Router();

const middleWare = require("../middleWare");
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
  getUserProfile,
} = require("../Controllers/userController");

router.post("/create-user", createUserSchema, createUser);
router.get("/get-all-users", middleWare, getAllUserSchema, getAllUsers);
router.get("/get-user-by-username", getUserSchema, getUser);
router.delete("/delete-user", getUserSchema, deleteUser);
router.patch("/update-user", updateUserSchema, updateUser);
router.get("/user-profile", middleWare, getUserProfile);

module.exports = router;
