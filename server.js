const passport = require("passport");

async function main() {
  const express = require("express");
  const contactRouter = require("./routes/web");
  const swaggerUi = require("swagger-ui-express");
  const swaggerDoc = require("swagger-jsdoc");
  const options = require("./swagger.json");
  const specs = swaggerDoc(options);
  const app = express();
  const GitHubStrategy = require("passport-github").Strategy;
  const session = require("express-session");

  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
     },
  })


  passport.initialize();
  passport.session();

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    done(null, id);
  });

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "https://cse341-news.onrender.com/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        {
          return cb(null, profile);
        }
      }
    )
  );
  // loading my routes
  app.use(express.json());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
  app.use("/", contactRouter);

  // starting server
  app.listen(8080, () => {
    console.log("server listening at port:" + 8080);
  });
}

main().catch((error) => {
  console.log(error);
});
