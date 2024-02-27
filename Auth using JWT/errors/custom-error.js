class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

module.exports = CustomAPIError

//function based CustomAPIError
// function createCustomAPIError(message, statusCode) {
//   const error = new Error(message);
//   error.statusCode = statusCode;
//   return error;
// }

// module.exports = createCustomAPIError;
// You can then use this function to create custom errors like so:

// const createCustomAPIError = require('./createCustomAPIError');

// const customError = createCustomAPIError('Custom error message', 500);
// throw customError;