const mongoose = require("mongoose")
const productSchma = new mongoose.Schema({
    name: String,
    price:Number,
    image:String,
    tag: Array,
    desc:String,
    favorite:{
        type:Boolean,
        default: false
    },
    category:{
      type:String,
      default: ""
    }, 
    tipe:{
        type:String,
        default: ""
      }, 
    color:{
        type:String,
        default: ""
      }, 
    discount:{
        type:Boolean,
        default:false
    },
    likes: {
        type:Number,
        default: 0
    },
    qty:{
        type:Number,
        default:1
    }
},{
    timestamps:true
})

const product = mongoose.model("Allproduct", productSchma)
module.exports = product;