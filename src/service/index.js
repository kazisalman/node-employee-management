const login = require("./login.service");
const signup = require("./signup.service");
const profileService = require("./user/profile.service");

const service = {
  login,
  signup,
  profile: profileService
};

module.exports = service;


