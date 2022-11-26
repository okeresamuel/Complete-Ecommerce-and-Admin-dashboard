const jwt = require("jsonwebtoken")
require("dotenv").config()


const protect = (req, res, next) =>{
    const token = req.header("x-auth-token")
    if(!token){
        res.status("401").json("unauthorized no token found...")
    }
    try {
        const decoded = jwt.verify(token, process.env.SECREAT)
        req.user = decoded
        next()   
    } catch (error) {
       res.send("invalid token...") 
    }
}

module.exports = {
    protect
}