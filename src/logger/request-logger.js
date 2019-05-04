const morgan = require('morgan');
const logger = require('./logger');
const config = require('../config');

morgan.token('body', (req) => JSON.stringify(req.body));

const skip = (req, res) => {
  let hasSkip = false;

  hasSkip = !config.get('LOG_HEALTH_STATUS') ? req.originalUrl === '/health-status' : hasSkip;
  hasSkip = !config.get('LOG_ALL_REQUESTS') ? res.statusCode < 400 : hasSkip;

  return hasSkip;
};


const requestLogger = (pattern = ':method :url :status - :body ') => morgan(pattern, { stream: { write: logger.info.bind(logger) }, skip });

module.exports = requestLogger;