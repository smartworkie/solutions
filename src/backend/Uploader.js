const File = require('./userfile')

const fileUpload = async(req, res, next) => {
    try {
        let filesArray = [];
        req.files.forEach(element => {
            const file =  {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            
            filesArray.push(file);    
        })
        const filess = new File ({
            title: req.body.title,
            text: req.body.text,
            files: filesArray
     })
       
        await filess.save();
res.status(201).send('File Uploaded Successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
    next()
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes===0) {return '0 Bytes'}
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'Z']
    const index = Math.floor(Math.log(bytes)/Math.log(1000));
    return parseFloat((bytes/Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index]
}
module.exports = {fileUpload}