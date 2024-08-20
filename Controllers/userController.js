const user = [];
module.exports = {
  createUser: (req, res) => {
    try {
      user.push(req.body);
      return res.send({
        response: `user created with username:${req.body.username}`,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getUsers: (req, res) => {
    try {
      return res.send({
        response: user,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
