const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json("You are not authenticated, please login first"); 
};
module.exports = isAuth;