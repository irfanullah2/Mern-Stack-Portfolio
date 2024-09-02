const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
import path from 'path';

// dotenv Configuration
dotenv.config();

// rest object
const app = express();

// middlwares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoutes'))

// Static path 
// changing to host the project
app.use(express.static(path.join(__dirname , './client/build')))

app.get('*' , function(req, res){
    res.sendFile(path.join(__dirname , './client/build/index.html'));
})




// port
const PORT  = process.env.PORT || 8080;

// listen
app.listen(PORT , ()=>{
    console.log(`Server Running on PORT ${PORT}`);
});