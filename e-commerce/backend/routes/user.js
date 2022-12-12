const express = require("express")
const passport = require("passport")
const router = express.Router()
const { protect } = require("../middleware/auth")
const {register, login} = require("../controllers/user")
const {post_cart, get_cart} = require("../controllers/cart")



router.post("/Aparel/register", register)
router.post("/Aparel/login",  passport.authenticate("local"), login)
router.post("/Aparel/post_cart", post_cart)
router.get("/Aparel/get_cart", get_cart)

module.exports = router;