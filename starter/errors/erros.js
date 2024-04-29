class CustomAPiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPiError(msg, statusCode);
};
module.exports = { createCustomError, CustomAPiError };
