const express = require("express")
const router = express.Router()
const {Language} = require("../models/language")

router.get("/", (req, res) => {
    Language.find()
        .then((language) => {
            res.status("200").send(language)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

router.post("/", (req, res) => {
    const body = req.body

    const language = new Language(body)

    language.save()
        .then((lang) => {
            res.status("200").send(lang)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})


module.exports = {
    languageRouter: router
}