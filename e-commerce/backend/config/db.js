const mongoose = require("mongoose")
require("dotenv").config()


mongoose.connect(process.env.dburl) ? console.log("connecting to mongodb...") : console.log("mongodb error")
mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected".yellow)
})
mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected".red)
})