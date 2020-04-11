//import variables to models

// Since we're building with Axios I don't think we need this but I left it just in case.

// module.exports = {
//   isLoggedIn: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     req.flash("error", "Sign In First");
//     res.redirect("/login");
//   }
//I added an admin option but we didn't initially account for this within to the Server and it isn't really necesseary either.
// isAdmin: function(req, res, next) {
//   if (req.user.isAdmin) {
//     next();
//   } else {
//     req.flash("error", "We are read only right now!");
//     res.redirect("back");
//   }
// },
// };
