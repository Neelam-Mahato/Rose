const Express = require("express");
const router = Express.Router();

const indexController = require("../controllers/indexController.js");

router.get("/", indexController.index);

module.exports = router;