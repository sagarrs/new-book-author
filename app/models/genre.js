const mongoose = require("mongoose")

const Schema = mongoose.Schema

const genreSchema = new Schema({
    genre: {
        type: String
    },
    books: [
        
    ]
})

const Genre = mongoose.model("Genre", genreSchema)

module.exports = {
    Genre
}