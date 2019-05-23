const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema({
    user: {
        type: String
    },
    body: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = {
    Comment
}