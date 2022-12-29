const User = require("../models/user")
require("dotenv").config()
const jwt = require("jsonwebtoken")

// register
const register = async (req, res)=>{
    const {username, email, password} = req.body;
    const user = new User ({username, email})
    try {
      const registereduser = await User.register(user, password.trim()) 
      if(registereduser){
          res.status(200).json({
            id: registereduser._id,
            username: registereduser.username,
            email: registereduser.email,
            password: registereduser.hash,
            Admin: registereduser.isAdmin,
            token: token(registereduser._id, registereduser.isAdmin,)
          })
        }
   } catch (error) {
      res.status(404).json(error.message)
   }
  }


//login user. 
const login =  async (req, res)=>{
  const {username} = req.body
  User.findOne({username:username}, (err, user)=>{
  if(err){
   res.status(401).json({message:"no user was found"})
  }else if(user){
    res.status(200).json({
        username:user.username,
        email:user.email,
        id: user._id,
        Admin:user.isAdmin,
        token: token(user._id, user.isAdmin)
    })
  }
   })
}

//fetch all users.
const get__Allusers = async (req, res) => {
 try {
 const Allusers = await User.find()
 res.status(200).json(Allusers)
  } catch (error) {
   res.status(400).json(error.message)   
}

}


function token (id, isAdmin){
  return jwt.sign({id, isAdmin}, process.env.SECREAT, {expiresIn:"30d"})
}
 

module.exports = {
    register,
    login,
    get__Allusers
  }