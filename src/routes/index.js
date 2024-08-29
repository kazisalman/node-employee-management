const auth = require("./auth.route")
const profileRoute = require("./user/profile.route")
const projectRoute = require("./project.route")

const routes = {
    auth,
    profile:profileRoute,
    project:projectRoute
  };
  
  module.exports = routes;