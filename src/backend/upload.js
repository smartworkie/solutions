
const asyncHandler = require('express-async-handler');
const {uploadFile}= require('./Google1');

const googleUpload = asyncHandler(async (req, res) => {
   
    if (!req.files){
        res.status(400).send("No file uploaded");
        return;
    }
    const fileUploadResponse =  uploadFile(req.files);
    res.status(200).send({
        response: fileUploadResponse
     } )
})
module.exports = {googleUpload}