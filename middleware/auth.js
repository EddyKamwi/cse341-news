const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json("You are not authenticated, please login first");
  }
};
module.exports = isAuth;
