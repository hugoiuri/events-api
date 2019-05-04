const { healthStatusController } = require('../controller');

const { getStatus } = healthStatusController;

const routes = (router) => {
  router.get('/health-status', getStatus);
};

module.exports = routes;