const mongoose = require("mongoose")
const Schema = mongoose.Schema

const paymentSchema = new Schema({
    user_id : [
        
    ],
    book_id: [

    ],
    paymentStatus: {
        type: String
    }
})

const Payment = mongoose.model("Payment", paymentSchema)

module.exports = {
    Payment
}