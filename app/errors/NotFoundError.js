const BaseError = require("./BaseError");
const { httpStatusCode } = require("../constants");

class NotFoundError extends BaseError {
  constructor(message = "Resource not found") {
    super("NotFoundError", httpStatusCode.NOT_FOUND, message);
  }
}

module.exports = NotFoundError;
