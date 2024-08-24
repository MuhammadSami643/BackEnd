require("dotenv").config();
const { response } = require("express");
const { authValidater } = require("../Models/userModel"); // We import this because in this we already defined everything which we need here for authentication
const responseHandler = require("../responseHandler");
const { compare } = require("bcryptjs"); // This used to compare the entered password with saved password
const { sign } = require("jsonwebtoken"); // This function helps us to create token

module.exports = {
  login: async (req, res) => {
    try {
      const isUser = await authValidater(req.body);
      if (isUser.error || !isUser.response) {
        isUser.error
          ? (isUser.error = "Invalid User")
          : (isUser.response = "Invalid User");
        res.cookie("auth", "undefined");
        return responseHandler(isUser, res);
      }
      // If user survives here that's mean its username is correct

      // Here we check that the password is either correct or not
      const { password } = isUser.response.dataValues;
      const isValid = await compare(req.body.password, password);

      if (!isValid) {
        res.cookie("auth", "undefined");
        return responseHandler(
          {
            response: "Invalid Credentials",
          },
          res
        );
      }
      // If user survived here at this point that's mean that its username and password is correct

      //Here we create the token

      const user = isUser.response.dataValues;
      delete user.password;

      const token = sign(user, process.env.SECRET, { expiresIn: 15 });
      res.cookie("auth", token);
      return responseHandler({ response: token }, res);
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
};
