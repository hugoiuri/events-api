const { logger } = require('../logger')

const errorHandlers = (err, req, res, next) => {
  logger.error(err);

  const httpStatus = err.status ? err.status : 500;

  res.status(httpStatus).send(err.message);
  next();
};

module.exports = errorHandlers;
