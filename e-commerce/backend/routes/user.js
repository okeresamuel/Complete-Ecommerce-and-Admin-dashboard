const express = require("express")
const passport = require("passport")
const router = express.Router()
const { protect } = require("../middleware/auth")
const {register, login} = require("../controllers/user")


router.post("/Aparel/register", register)
router.post("/Aparel/login",  passport.authenticate("local"), login)



module.exports = router;