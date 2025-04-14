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
    .optional().isLength({ min: 10 })
    .withMessage("Short Description field should be at least 10 characters long")
    .notEmpty()
    .withMessage("Short Description field should not be empty")
    .isString(),
  body("date")
    .optional()
    .notEmpty()
    .withMessage("Date field should not be empty")
    .isDate({ format: "DD/MM/YYYY" })
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
    .withMessage("Date field is required")
    .isDate({ format: "DD/MM/YYYY" })
    .withMessage("Date field should be in dd/mm/yyyy format"),
  body("imageUrl")
    .optional()
    .notEmpty()
    .withMessage("Image URL field should not be empty")
    .isURL()
    .withMessage("Image URL field should be a valid URL"),
];
module.exports = { validateData, validateRequired };
