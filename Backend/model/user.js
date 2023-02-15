const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    studentName:String, 
    maths: Number, 
    science: Number,
    english:Number,
    hindi:Number,
    marathi:Number,
    total:Number,
    per:Number,
    Grade:String,
})
module.exports = mongoose.model('datas', userSchema);