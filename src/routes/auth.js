const authRouter = require("express").Router()
const authController = require("../controllers/auth")
//login
authRouter.post("/", authController.authCon)

// register
authRouter.post("/", (req, res) => {

})

// edit password
authRouter.patch("/account", (req, res) => {

})


// edit profile
authRouter.patch("/", (req, res) => {
    
})

//logout
// authRouter.delete("/", (req, res) => {

// })

module.exports = authRouter