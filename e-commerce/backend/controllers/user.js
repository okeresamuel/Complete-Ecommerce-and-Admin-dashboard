const User = require("../models/user")
const jwt = require("jsonwebtoken")

const register = async (req, res)=>{
    const {username, email, password} = req.body;
    const user = new User ({username, email})
    try {
      const registereduser = await User.register(user, password) 
      if(registereduser){
          res.status(200).json({
            id: registereduser._id,
            username: registereduser.username,
            email: registereduser.email,
            password: registereduser.hash,
            token: token(registereduser._id)
          })
        }
   } catch (error) {
      res.status(404).json(error.message)
   }
  }


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
        token: token(user._id)
    })
  }
   })
}

function token (id){
    return jwt.sign({id}, "sdusgudgsiug", {expiresIn:"30d"})
 }
 


  module.exports = {
    register,
    login
  }