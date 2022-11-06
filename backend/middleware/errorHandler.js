const errorHandler = (err, req, res, next) => {
  let status = res.statusCode ? res.statusCode : 500; // server error

  if (status === 200) {
    status = 500;
  }

  return res.status(status).json({ error: err.message, isError: true });
};

module.exports = errorHandler;
