const express = require("express")
const app = express()
const cors = require("cors")
const passport = require("passport")
const helmet = require("helmet")
const User = require("../backend/models/user")
const localStrategy = require("passport-local")
const session = require("express-session")
const morgan = require("morgan")
require("../backend/config/db")
require("colors")


app.use(session({
    secret: process.env.SESSION__SECREAT,
    resave: true,
    saveUninitialized: true,
}))


app.use(express.json({limit:"30mb"}))
app.use(express.urlencoded({extended:false, limit:"30mb"}))
app.use(passport.initialize())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(cors())
app.use(helmet())
app.use(morgan("common"))
app.use("/", require("./routes/routes"))
app.use("/", require("./routes/stripe"))


const port = process.env.PORT || 5000
app.listen(port, console.log(`App is listening on port ${port}`.blue.underline))