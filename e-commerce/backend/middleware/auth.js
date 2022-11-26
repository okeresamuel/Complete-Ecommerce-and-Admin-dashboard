const jwt = require("jsonwebtoken")



const protect = (req, res, next) =>{
    const token = req.header("x-auth-token")
    if(!token){
        res.status("401").json("unauthorized no token found...")
    }
    try {
        const decoded = jwt.verify(token, "sdusgudgsiug")
        req.user = decoded
        next()   
    } catch (error) {
       res.send("invalid token...") 
    }
}

module.exports = {
    protect
}