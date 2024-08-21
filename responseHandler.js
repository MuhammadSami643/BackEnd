const responeHandler = (data, res) => {
  try {
    if (data.error) {
      return res.send({
        error: data.error,
      });
    }
    return res.send({
      res: data.response,
    });
  } catch (error) {
    return res.send({
      error: error,
    });
  }
};

module.exports = responeHandler;
