const { body } = require("express-validator");

exports.movieValidations = [
  body("name")
    .notEmpty()
    .withMessage("Movie name is required")
    .bail()
    .isLength({ max: 255 })
    .withMessage("Movie name should not exceed 255 characters"),

  body("img")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Image must be a valid URL"),

  body("summary")
    .notEmpty()
    .withMessage("Summary is required")
    .bail()
    .isLength({ max: 1000 })
    .withMessage("Summary should not exceed 1000 characters"),
];
