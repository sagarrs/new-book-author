const express = require("express")
const {Tag} = require("../models/tag")
const router = express.Router()

router.get("/", (req, res) => {
    Tag.find()
        .then((tag) => {
            res.status("200").send(tag)
        })
        .catch((err) => {
            res.status("200").send(err)
        })
})

router.post("/", (req, res) => {
    const body = req.body
    const tag = new Tag(body)

    tag.save()
        .then((tag) => {
            res.status("200").send(tag)
        })
        .catch((err) => {
            res.status("401").send(err)
        })
})

router.put("/:id", (req, res) => {
    const id = req.params.id
    const body = req.body

    Tag.findOneAndUpdate({_id: id}, { $set : body}, { new: true, runValidators: true})
        .then((tag) => {
            res.status("200").send(tag)
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id

    Tag.findOneAndDelete({_id: id})
        .then((tag) => {
            res.status("200").send({notice: "the tags are successfully deleted"})
        })
        .catch((err) => {
            res.status("404").send(err)
        })
})

module.exports = {
    tagRouter: router
}