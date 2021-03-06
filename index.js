const express = require("express")
var cors = require("cors")
const {mongoose} = require("./config/database")
const {userRouter} = require("./app/controllers/usersController")
const {bookRouter} = require("./app/controllers/booksController")
const {tagRouter} = require("./app/controllers/tagsController")
const {languageRouter} = require("./app/controllers/languagesController")
const {genreRouter} = require("./app/controllers/genreController")

const port = 3005

const app = express()

// "use" is to configure express middleware
app.use(express.json())
app.use(cors())

app.get("/", function(req, res){
    res.send("<h1>Welcome To New sample</h1>")
})

// this is to make the upload folder static so that its available accross the app
app.use('/upload', express.static('upload'))

app.use("/users", userRouter)
app.use("/books", bookRouter)
app.use("/tags", tagRouter)
app.use("/languages", languageRouter)
app.use("/genres", genreRouter)

app.listen(port, function(){
    console.log("Listening on port", port)
})