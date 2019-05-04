const djv = require('djv');
const eventSchema = require('./schemas/event-schema.json');

const validator = (() => {
  const env = new djv();
  env.addSchema('event', eventSchema);
  
  const validate = (schemaName, json) => {
    let result = env.validate(schemaName, json);
    return result;
  }

  return {
    validate
  }
})();

module.exports = validator;
