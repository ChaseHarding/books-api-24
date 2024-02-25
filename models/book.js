const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: Number,
    quantity: Number,
    imageURL: { type: String}
})

const book = mongoose.model('book', bookSchema)

module.exports = book