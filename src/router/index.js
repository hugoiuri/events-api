const express = require('express');
const healthStatusRoutes = require('./health-status-routes');
const eventsRoutes = require('./events-routes');

module.exports = () => {
  const router = new express.Router();
  
  healthStatusRoutes(router);
  eventsRoutes(router);

  router.get('*', (req, res) => {
    res.sendStatus(404);
  })

  return router;
};
