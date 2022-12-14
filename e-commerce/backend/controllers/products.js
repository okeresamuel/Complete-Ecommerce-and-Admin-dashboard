const product = require("../models/products")

const post_products = async (req, res)=>{
    try {
        const {name, price, image, qty, tag, desc, favorite, discount} =  req.body
        const data = new product({name, price, qty, image, tag, desc, favorite, discount})
         console.log(data)
    } catch (error) {
}
}

const get_products = async (req, res)=>{
    try {
      const products = await product.find()
      products ? res.status(200).json(products) : res.json("no item found!")
    } catch (error) {
    
    }
}

module.exports = {post_products, get_products}