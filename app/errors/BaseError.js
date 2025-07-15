class BaseError extends Error {
  constructor(name, statusCode, message, isOperational = true) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = BaseError;
