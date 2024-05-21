const mongoose = require('mongoose')
const { Schema } = mongoose

const movieSchema = new Schema({
    title: String,
    description: String, 
    genre: String, 
    director: String, 
    year: Number,
    cast: [ String ]
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie