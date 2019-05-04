const database = require('../database');

const eventsModel = (() => {
  const create = async (event) => {
    const result = await database.getCollection('events').insertOne(event);

    if (result.result.ok === 1 && result.ops.length === 1) {
      return result.ops[0];
    }
  }

  return {
    create
  }
})();

module.exports = eventsModel;
