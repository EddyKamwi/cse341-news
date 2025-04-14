const body = require("express-validator").body;

const validateData = [
  // Validate the request body for author, title, shortDescription,date and content and make all optional
  body("author")
    .optional()
    .notEmpty()
    .withMessage("Author field should not be empty"),
  body("title")
    .optional()
    .notEmpty()
    .withMessage("Title field is required")
    .isString(),
  body("shortDescription")
    .optional()
    .notEmpty()
    .withMessage("Short Description field should not be empty")
    .isString(),
  body("date")
    .optional()
    .notEmpty()
    .isLength(10)
    .withMessage("Date field should be in dd/mm/yyyy format"),
  body("content")
    .optional()
    .notEmpty()
    .withMessage("Content field should not be empty")
    .isString(),
];
const validateRequired = [
  body("author").notEmpty().withMessage("Author field is required"),
  body("title").notEmpty().withMessage("Title field is required"),
  body("shortDescription")
    .notEmpty()
    .withMessage("Short Description field is required"),
  body("date")
    .notEmpty()
    .isLength(10)
    .withMessage("Date field is required and in dd/mm/yyyy format"),
];
module.exports = { validateData, validateRequired };
