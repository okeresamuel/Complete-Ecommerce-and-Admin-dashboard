const express = require("express")
const passport = require("passport")
const router = express.Router()
const { protect, isAdmin } = require("../middleware/auth")
const {register, login, get__Allusers} = require("../controllers/user")
const {post_products, get_products, update_product, delete_product} = require("../controllers/products")

// users routes
router.post("/Aparel/register", register)
router.post("/Aparel/login",  passport.authenticate("local"), login)
router.get("/Aparel/AllUser", protect,  isAdmin, get__Allusers)

//products routes 
router.get("/Aparel/get_products", get_products)
router.post("/Aparel/post_products", protect,  isAdmin, post_products)
router.delete("/Aparel/delete_product/:id", protect, isAdmin, delete_product)
router.patch("/Aparel/update_product/:id", protect, isAdmin, update_product)

module.exports = router;