const product = require("../models/products")
const cloudinary =  require("../utils/cloudinary/cloudinary")

const post_products = async (req, res)=>{
    try {
        const {name, price, image, qty, tag, desc, category, tipe, color, favorite, discount} =  req.body
        const savedCloudinaryImg =  await cloudinary.uploader.upload(image, {upload_preset: "Aparel"})
        const data = new product({name, price, qty, category, tipe, color, image:savedCloudinaryImg.url, tag, desc, favorite, discount})
        data.save()
    } catch (error) {
        console.log(error.message)
}
}

const get_products = async (req, res)=>{
    try {
      const products = await product.find()
      products ? res.status(200).json(products) : res.json("no item found!")
    } catch (error) {
        console.log(error.message)
    }
}

const update_product = async (req, res)=>{
    const {id} = req.params;
    try {
      const products = await product.findByIdAndUpdate(id, req.body, {new: true})
      products ? res.status(200).json(products) : res.json("no products found")
    } catch (error) {
        console.log(error.message)
    }
}



const delete_product = async (req, res)=>{
  const {id} = req.params;
    try {
      const deleted_products = await product.findByIdAndDelete(id, {new: true})
      deleted_products ? res.status(200).json(deleted_products) : res.json("no item to be deleted")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {post_products, get_products, update_product, delete_product}