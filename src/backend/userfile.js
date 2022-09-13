const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    title:{type:String, unique: false, required: true},
    text:{type:String, unique:false, required: true},
    files: [Object]},
{timestamps: true}
);
const File = mongoose.model('File', fileSchema);
module.exports = File;