require('dotenv').config();
const {google} = require('googleapis');
const fs = require('fs');
const { firebaserules } = require('googleapis/build/src/apis/firebaserules');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET, 
    REDIRECT_URI
)
oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
    version: 'v3', 
    auth: oauth2Client
})

async function uploadFile(files) {
    for(let i=0; i<files.length; i++){
    console.log(files[0].originalname);
try {
    const response = await drive.files.create({
        requestBody: {
            name: files[i].originalname,
            mimeType: files[i].mimetype,

        },
        media: {
            mimeType: files[i].mimetype,
            body: fs.createReadStream(files[i].path),
             }
    })
    console.log(response.data)
}
catch (error) {
    console.log(error.message);
}}
}

module.exports= {uploadFile};