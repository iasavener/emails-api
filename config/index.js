require("dotenv").config();
const _ = require("lodash");
const defaults = require("./default");

const env = process.env.NODE_ENV || "dev";
const fs = require("fs");
let config;
if (fs.existsSync("./" + env + ".js")) {
  config = require("./" + env + ".js");
} else {
  config = require("./" + env);
}

module.exports = _.merge({}, config, defaults);