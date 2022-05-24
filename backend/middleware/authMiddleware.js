const checkAuth = (req, res, next) => {
  console.log("Desde mi mildelware");
  next();
};

module.exports = {
  checkAuth,
};
