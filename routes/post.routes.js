const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const authController = require('../controllers/auth.controller')

router.get('/', verifyToken, authController.signIn)

module.exports = router;
