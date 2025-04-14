const routes = require("express").Router();
require("dotenv").config();
const EducationController = require("../controllers/EducationController");
const HealthController = require("../controllers/HealthController");
const { body, validationResult } = require("express-validator");
const passport = require("passport");
const isAuth = require("../middleware/auth");
const { validateData, validateRequired } = require("../middleware/validation");

routes.get("/login", passport.authenticate("github"));

routes.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

routes.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/api-docs");
  }
);

// READ
routes.get("/education", EducationController.index);
routes.get("/education/:id", EducationController.show);
routes.get("/health", HealthController.index);
routes.get("/health/:id", HealthController.show);

// CREATE
routes.post("/education", validateRequired, EducationController.create);

routes.post("/health", validateRequired, HealthController.create);

// UPDATE
routes.put("/education/:id", validateData, EducationController.update);

routes.put("/health/:id", validateData, HealthController.update);

// DELETE
routes.delete("/education/:id",isAuth, EducationController.destroy);

routes.delete("/health/:id",isAuth, HealthController.destroy);

module.exports = routes;
