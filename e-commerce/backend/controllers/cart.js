const cart = require("../models/cartItems")

const post_cart = async (req, res)=>{
    try {
        const {name, price, image, qty, tag, desc, favorite, discount} =  req.body
        const data = new cart({name, price, qty, image, tag, desc, favorite, discount})
        data.save()
    } catch (error) {
}
}

const get_cart = async (req, res)=>{
    try {
      const cartItemsFound = await cart.find()
      cartItemsFound ? res.status(200).json(cartItemsFound) : res.json("no item found!")
    } catch (error) {
    
    }
}

module.exports = {post_cart, get_cart}