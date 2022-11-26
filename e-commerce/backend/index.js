const express = require("express")
const app = express()
const cors = require("cors")
const passport = require("passport")
const helmet = require("helmet")
const User = require("../backend/models/user")
const localStrategy = require("passport-local")
const session = require("express-session")
require("../backend/config/db")
require("colors")

app.use(session({
    secret: process.env.SESSION__SECREAT,
    resave: true,
    saveUninitialized: true,
}))


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(passport.initialize())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(cors())
app.use(helmet())
app.use("/", require("./routes/user"))


const port = process.env.PORT || 5000
app.listen(port, console.log(`App is listening on port ${port}`.blue.underline))