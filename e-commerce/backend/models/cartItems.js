const mongoose = require("mongoose")
const cartSchma = new mongoose.Schema({
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

const cart = mongoose.model("cartItem", cartSchma)
module.exports = cart;