<<<<<<< HEAD
const express = require("express");
// const router = require("./users");
const routers = express.Router();

// user routes
routers.use("/", require("./users"));

// student routes
routers.use("/student", require("./students"));

// interview routes
routers.use("/interview", require("./interview"));

=======
const express = require("express");
// const router = require("./users");
const routers = express.Router();

// user routes
routers.use("/", require("./users"));

// student routes
routers.use("/student", require("./students"));

// interview routes
routers.use("/interview", require("./interview"));

>>>>>>> 833b6f12c5ba070e3037a960533adea02ad5f620
module.exports = routers;