const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');

// router OBJECT
const router = express.Router();

// Routes 
router.post('/sendEmail' , sendEmailController);

// export 
module.exports = router