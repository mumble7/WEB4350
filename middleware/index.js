//import variables to models

module.exports = {
  isLoggedIn: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error", "Sign In First");
    res.redirect("/login");
  },
  isAdmin: function(req, res, next) {
    if (req.user.isAdmin) {
      next();
    } else {
      req.flash("error", "We are read only right now!");
      res.redirect("back");
    }
  },
};
