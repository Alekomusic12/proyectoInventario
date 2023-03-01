const { Schema, model } = require('mongoose')

const FileSchema = Schema({
    name: {
        required: true,
        type: String
    },
    email:{
        required: true,
        type:String,
        unique: true
    }
})

module.exports = model('File', FileSchema)