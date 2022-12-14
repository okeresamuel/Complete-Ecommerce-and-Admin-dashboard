const mongoose = require("mongoose")
const productSchma = new mongoose.Schema({
    name: String,
    price:String,
    Image:String,
    tag: Array,
    desc:String,
    favorite:{
        type:Boolean,
        default: false
    }, 
    discount:{
        type:Boolean,
        default:false
    },
    qty: {
        type:String,
        default: 0
    }
})

const product = mongoose.model("product", productSchma)
module.exports = product;