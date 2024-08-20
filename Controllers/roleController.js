module.exports = {
  createRole: (req, res) => {
    try {
      return res.send({
        response: "Create Role API",
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
