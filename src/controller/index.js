const login = require("./login.controller")
const signup = require("./signup.controller");
const profileController = require("./user/profileController");

const controller = {
    login,
    signup,
};

module.exports = controller;