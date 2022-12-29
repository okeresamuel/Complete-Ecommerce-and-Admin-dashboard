const jwt = require("jsonwebtoken")
require("dotenv").config()


const protect = (req, res, next) =>{
    const token = req.header("token")
    if(!token){
        res.status(401).json("unauthorized no token found...")
    }
    try {
        const decoded = jwt.verify(token, process.env.SECREAT)
        req.user = decoded
        next()   
    } catch (error) {
       res.send("invalid token...") 
    }
}


const isAdmin = (req, res, next) =>{
 if(req.user.isAdmin){
    next()
 }else{
    res.send("You do not have proper admin privilages to make that request Pls contact an admin")
 }
}

module.exports = {
    protect,
    isAdmin,
}