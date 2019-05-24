const express = require("express")
const router = express.Router()
const {Genre} = require("../models/genre")

router.get("/", (req, res) => {
    Genre.find()
        .then((genre) => {
            res.status("200").send(genre)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

router.post("/", (req, res) => {
    const body = req.body

    const genre = new Genre(body)

    genre.save()
        .then((genre) => {
            res.status("200").send(genre)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

module.exports = {
    genreRouter: router
}