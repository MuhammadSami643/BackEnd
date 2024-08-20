const role = [];
module.exports = {
  createRole: (req, res) => {
    try {
      role.push(req.body);
      return res.send({
        response: `role created with username :${req.body.username}`,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
