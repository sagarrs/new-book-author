const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        validate: {
            // the emaid id used by user will be passes as argument to this fuction
            // which will be caught in vlue
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return "invalid email format"
            }
        },
    },
    password: {
        type: String
    },
    location: {
        type: String
    },
    ratings: {
        type: String
    },
    language: [

    ],
    genreId: [

    ],
    followers: [

    ],
    following: [

    ],
    bookId: [

    ],
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

// hooks can be written here

userSchema.pre("save", function(next){
    const user = this

    if(user.isNew){
        bcryptjs.genSalt(10)
        .then((salt) => {
            bcryptjs.hash(salt, user.password)
                .then((encryptedPwd) => {
                    user.password = encryptedPwd
                    next()
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch((err) => {
            console.log(err)
        })
    }else{
        next()
    }
})


userSchema.statics.findByCredentials = function(email, password){
    const User = this

    return User.findOne({email})
            .then(function(user){
                if(!user){
                    return Promise.reject({notice: "invalid email"})
                }
                return bcryptjs.compare(password, user.password)
                        .then(function(result){
                            if(result){
                                return Promise.resolve(user)
                            }else{
                                return Promise.reject({notice: "invalid password"})
                            }
                        })
            })
            .catch(function(err){
                return Promise.reject(err)
            })
}

userSchema.methods.generateToken = function(){
    const user = this

    const tokenData = {
        "_id": user.id,
        "username": user.username,
        "createdAt": Number(new Date())
    }

    const token = jwt.sign(tokenData, "jwt@123")

    user.tokens.push({token: token})

    // why are we doing this ? may be to send token
    return user.save()
            .then(function(user) {
                return Promise.resolve({user, token})
            })
            .catch(function(err){
                return Promise.reject(err)
            })
}


userSchema.statics.findByToken = function(token){
    const User = this

    let tokenData

    try{
        tokenData = jwt.verify(token, "jwt@123")
    }catch(err){
        return Promise.reject(err)
    }

    return User.findOne({
            "_id": tokenData._id,
            "tokens.token": token
        })
}

const User = mongoose.model("User", userSchema)

module.exports = {
    User
}