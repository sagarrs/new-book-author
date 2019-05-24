const mongoose = require("mongoose")
const Schema = mongoose.Schema

const languageSchema = new Schema({
    language: {
        type: String
    },
    books: [
        
    ]
})

const Language = mongoose.model("Language", languageSchema)

module.exports = {
    Language
}