const { eventsModel } = require('../model');

const eventsController = (() => {
  const postEvent = async (req, res, next) => {
    try {
      const { body } = req;

      const event = await eventsModel.create(body);

      return res.status(201).send(event);
    } catch (error) {
      next(error);
    }
  };

  return {
    postEvent
  };
})();

module.exports = eventsController;
