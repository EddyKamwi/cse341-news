const routes = require("express").Router();
const EducationController = require("../controllers/EducationController");
const HealthController = require("../controllers/HealthController");
const { body, validationResult } = require("express-validator");
// READ
routes.get("/education", EducationController.index);
routes.get("/education/:id", EducationController.show);

routes.get("/health", HealthController.index);
routes.get("/health/:id", HealthController.show);

// CREATE
routes.post(
  "/education",
  [
    body("author").notEmpty().withMessage("Author field is required"),
    body("title").notEmpty().withMessage("Title field is required"),
    body("shortDescription")
      .notEmpty()
      .withMessage("Short Description field is required"),
    body("date")
      .notEmpty()
      .isLength(10)
      .withMessage("Date field is required and in dd/mm/yyyy format"),
  ],
  EducationController.create
);

routes.post(
  "/health",
  [
    body("author").notEmpty().withMessage("Author field is required"),
    body("title").notEmpty().withMessage("Title field is required"),
    body("shortDescription")
      .notEmpty()
      .withMessage("Short Description field is required"),
    body("date")
      .notEmpty()
      .isLength(10)
      .withMessage("Date field is required and in dd/mm/yyyy format"),
  ],
  HealthController.create
);

// UPDATE
routes.put(
  "/education/:id",
  [
    body("date")
      .notEmpty()
      .isLength(10)
      .withMessage("Date field should be in dd/mm/yyyy format"),
  ],
  EducationController.update
);

routes.put(
  "/health/:id",
  [
    body("date")
      .notEmpty()
      .isLength(10)
      .withMessage("Date field should be in dd/mm/yyyy format"),
  ],
  HealthController.update
);

// DELETE
routes.delete("/education/:id", EducationController.destroy);

routes.delete("/health/:id", HealthController.destroy);

module.exports = routes;
