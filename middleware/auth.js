const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).json("You are not authenticated, please login first");
  } else {
    next();
  }
};
module.exports = isAuth;
