require("dotenv").config();

const { verify } = require("jsonwebtoken");

const middleWare = (req, res, next) => {
  try {
    const { auth } = req.cookies;
    if (auth === "undefined") {
      return res.send({
        error: "unauthorized",
      });
    }

    verify(auth, process.env.SECRET, (error, data) => {
      if (error) {
        return res.send({ error: "forbidden" });
      }

      req.user = data;
      next();
    });
  } catch (error) {
    return res.send({
      error: error,
    });
  }
};

module.exports = middleWare;
