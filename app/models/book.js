const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    bookTitle: {
        type: String
    },
    bookBody: {
        type: String
    },
    isPublished: {
        type: Boolean
    },
    publishDate: {
        type: Date
    },
    previewImageUrl: {
        type: String
    },
    tagName: [

    ],
    comments: [

    ],
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    language: [

    ],
    genre: [

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