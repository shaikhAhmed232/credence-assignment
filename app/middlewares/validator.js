const { validationResult } = require("express-validator");
const { BadRequestError } = require("../errors");

module.exports = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorList = errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      }));
      const error = new BadRequestError("Invalid body", errorList);
      next(error);
      return;
    }
    next();
  };
};
