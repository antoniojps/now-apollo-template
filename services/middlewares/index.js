const cors = require('./cors');

// add new middleware like so:
// const middlewareHandler = handler => cors(databaseConnection(jwtParser(handler)));

const middlewareHandler = handler => cors(handler);

module.exports = middlewareHandler;