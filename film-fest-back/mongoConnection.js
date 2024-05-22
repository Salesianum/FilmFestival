const mongoose = require('mongoose');


const mongoConnection = async() =>{
    try {
        (await mongoose.connect(process.env.ATLAS_URI))
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(`Mongo DB Connection Error: ${error}`);
    }
}


 module.exports = { mongoose, mongoConnection }