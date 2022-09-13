const express = require('express');
const {upload} = require('./filehelper');
const {fileUpload} = require('./Uploader');
const {googleUpload} = require('./upload')
const {registerUser, authUser,googleLogin2, forgotPassword, authenticateEmail, resetEmail} = require('./AuthController');

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser)
router.route('/googlelogin').post(googleLogin2);
router.route('/authentication').post(authenticateEmail);
router.route('/forgotPassword').put(forgotPassword);
router.route('/reset').put(resetEmail);
router.route('/upload').post(upload.array('files'),  fileUpload, googleUpload);


module.exports = router;