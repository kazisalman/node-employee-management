const auth = require("./auth.route")
const profileRoute = require("./user/profile.route")

const routes = {
    auth,
    profile:profileRoute
  };
  
  module.exports = routes;