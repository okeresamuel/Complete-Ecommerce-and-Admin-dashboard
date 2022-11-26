const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test") ? console.log("connecting to mongodb...") : console.log("mongodb error")
mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected".yellow)
})
mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected".red)
})