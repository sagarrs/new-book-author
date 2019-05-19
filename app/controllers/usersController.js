const express = require("express")
const router = express.Router()

const {User} = require("../models/user")
const {authenticateUser} = require("../middlewares/authentication")

router.get("/", (req, res) => {
    User.find()
        .then((user) => {
            res.status("200").send(user)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

router.post("/register", (req, res) => {
    const body = req.body

    const user = new User(body)

    user.save()
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.post("/login", (req, res) => {
    const body = req.body

    User.findByCredentials(body.email, body.password)
        .then((user) => {
            return user.generateToken()  
        })
        .then((user) => {
            res.send(user)
            // res.status("200").setHeader("x-auth", token).send(user)
        })
        .catch((err) => {
            res.status("401").send(err)
        })
})

router.get("/account", authenticateUser, (req, res) => {
    const {user} = req
    // res.send is done here and not in middleware is coz it shouldnt be done, and there might be 
    // some ops that needs to be done later, therefore we should send from controller
    res.send({user})
})

router.delete("/logout", authenticateUser, (req, res) => {
    const {user, token} = req

    User.findByIdAndUpdate(user._id, {$pull: {tokens: {token: token}}})
        .then(() => {
            res.send({notice:"loggedout successfully"})
        })
        .catch((err) => {
            res.send(err)
        })
})

module.exports = {
    userRouter: router
}