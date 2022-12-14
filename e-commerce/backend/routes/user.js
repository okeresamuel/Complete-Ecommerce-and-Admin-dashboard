const express = require("express")
const passport = require("passport")
const router = express.Router()
const { protect } = require("../middleware/auth")
const {register, login} = require("../controllers/user")
const {post_products, get_products} = require("../controllers/products")


router.post("/Aparel/register", register)
router.post("/Aparel/login",  passport.authenticate("local"), login)
router.post("/Aparel/post_cart", get_products)
router.get("/Aparel/get_cart", post_products)

module.exports = router;