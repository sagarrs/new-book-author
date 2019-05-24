const express = require("express")
const router = express.Router()
const {Book} = require("../models//book")
const {authenticateUser} = require("../middlewares/authentication")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './upload/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toString() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

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

router.post("/", authenticateUser, upload.single('previewImageUrl'),(req, res) => {
    const body = req.body
    // const book = new Book(body)

    const book = new Book({
        bookTitle: req.body.bookTitle,
        bookBody: req.body.bookBody,
        language: req.body.language,
        genre: req.body.genre,
        tagName: req.body.tagName,
        previewImageUrl: req.file.path
    })

    console.log(book)

    book.user_id = req.user._id

    book.save()
        .then((book) => {
            console.log("tag")
            if(book.tagName){
                return book.updateTags(book.tagName, book._id)
            }
        })
        .then((tag) => {
            // res.status("200").send(book)
            console.log("language")
            if(book.language){
                return book.updateLanguage(book.language, book._id)
            }
        })
        .then((language) => {
            console.log("genre")
            if(book.genre){
                return book.updateGenre(book.genre, book._id)
            }
        })
        .then((genre) => {
            console.log("book will be sent here")
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