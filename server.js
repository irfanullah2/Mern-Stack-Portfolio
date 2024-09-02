const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// dotenv Configuration
dotenv.config();

// rest object
const app = express();

// middlwares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoutes'))


// port
const PORT  = process.env.PORT || 8080;

// listen
app.listen(PORT , ()=>{
    console.log(`Server Running on PORT ${PORT}`);
});