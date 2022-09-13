const multer = require ('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,files,cb) => {
        cb(null, `${__dirname}/uploads`);
    },
    filename: (req, files,cb ) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + ''+files.originalname)
    }
});

const upload = multer({storage: storage});

module.exports ={upload}
