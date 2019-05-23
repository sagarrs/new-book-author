const express = require("express")
const router = express.Router()
const {Book} = require("../models//book")
const {authenticateUser} = require("../middlewares/authentication")

router.get("/", (req, res) => {
    Book.find()
        .then((book) => {
            res.status("200").send(book)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

router.get("/account", authenticateUser, (req, res) => {
    Book.find({user_id: req.user._id})
        .then((books) => {
            res.send(books)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

router.get("/:id", (req, res) => {
    const id = req.params.id

    Book.findOne({_id: id})
        .then((book) => {
            if(book){
                res.status("200").send(book)
            }
            else{
                res.status("404").send({})
            }
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

router.post("/", authenticateUser, (req, res) => {
    const body = req.body
    const book = new Book(body)

    book.user_id = req.user._id

    book.save()
        .then((book) => {
            res.status("200").send(book)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body

    Book.findByIdAndUpdate({_id: id}, { $set : body}, { new: true, runValidators: true})
        .then((book) => {
            res.send(book)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id

    Book.findByIdAndDelete({_id: id})
        .then((book) => {
            res.status("200").send({notice: "your book is successfully deleted"})
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

module.exports = {
    bookRouter: router
}