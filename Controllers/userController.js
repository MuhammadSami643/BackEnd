module.exports = {
  createUser: (req, res) => {
    try {
      return res.send({
        response: "Create User API",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
