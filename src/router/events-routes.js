const { eventsController } = require('../controller');
const { validate } = require('./validator');

const { postEvent } = eventsController;

const validateSchema = (req, res, next) => {
  const result = validate('event', req.body);

  if (result) {
    const error = new Error(JSON.stringify(result));
    error.status = 400;
    throw error;
  }

  next();
};

const routes = (router) => {
  router.post('/events', validateSchema, postEvent);
};

module.exports = routes;