const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    bookName: {
        type: String
    },
    user_id: [

    ],
    language_id: [

    ],
    genre_id: [

    ],
    page_display_from: {
        type: Number
    },
    page_display_to: {
        type: Number
    }
})

const Book = mongoose.model("Book", bookSchema)

module.exports = {
    Book
}