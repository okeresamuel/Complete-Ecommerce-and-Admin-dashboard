const mongoose = require("mongoose")
const passportlocalmongoose = require("passport-local-mongoose")
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps:true})

userSchema.plugin(passportlocalmongoose)

const User = mongoose.model("userschema", userSchema)
module.exports = User;