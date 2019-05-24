const mongoose = require("mongoose")
const Schema = mongoose.Schema
const {Tag} = require("./tag")
const {Language} = require("./language")
const {Genre} = require("./genre")

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

bookSchema.methods.updateTags = function(tagName, id){
    const Book = this

    // tagName = tagName.toString()
    // Tag.update({
    //     tagName: tagName
    // }, {
    //     $push: {
    //         books: id
    //     }
    // }).exec(function(err, user){
    //     console.log("story id is added to the list of your Tags");
    // })
    tagName = tagName.toString()
    const tags = {
        tagName: tagName,
        books: id
    }
    const tag = new Tag(tags)

    tag.save()
        .then((tag) => {
            return Promise.resolve(tag)
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

bookSchema.methods.updateLanguage = function(language, id){
    const Book = this

    language = language.toString()
    const languages = {
        language: language,
        books: id
    }
    const lang = new Language(languages)

    lang.save()
        .then((lang) => {
            return Promise.resolve(lang)
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

bookSchema.methods.updateGenre = function(genre, id){
    console.log("update genre")
    const Book = this

    genre = genre.toString()
    const genres = {
        genre: genre,
        books: id
    }
    const genr = new Genre(genres)

    genr.save()
        .then((genr) => {
            console.log("control is after genre resolve")
            return Promise.resolve(genr)
        })
        .catch((err) => {
            console.log("control is after genre reject")
            return Promise.reject(err)
        })
}

const Book = mongoose.model("Book", bookSchema)

module.exports = {
    Book
}