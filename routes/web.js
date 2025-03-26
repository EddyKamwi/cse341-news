const routes = require("express").Router();
const EducationController = require("../controllers/EducationController");
const HealthController = require("../controllers/HealthController");
// READ
routes.get("/education", EducationController.index);
routes.get("/education/:id", EducationController.show);

routes.get("/health", HealthController.index);
routes.get("/health/:id", HealthController.show);

// CREATE
routes.post("/education", EducationController.create);

routes.post("/health", HealthController.create);

// UPDATE
routes.put("/education/:id", EducationController.update);

routes.put("/health/:id", HealthController.update);

// DELETE
routes.delete("/education/:id", EducationController.destroy);

routes.delete("/health/:id", HealthController.destroy);

module.exports = routes;
