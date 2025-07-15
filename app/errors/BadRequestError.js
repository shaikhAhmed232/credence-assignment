const BaseError = require("./BaseError");
const { httpStatusCode } = require("../constants");

class BadRequestError extends BaseError {
  constructor(message = "Bad Request", data) {
    super("BadRequestError", httpStatusCode.BAD_REQUEST, message);
    this.data = data;
  }
}

module.exports = BadRequestError;
