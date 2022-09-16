'use strict'
const express = require('express');
const cors = require('cors');
const path= require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes= require('./userRoutes');
const {notFound, errorHandler} = require('./errorMiddleware');

const connectDB = require('./mongo');
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

 const _dirname = path.resolve();

app.get('/', (req,res) => {
        res.send('We Are Here')
    })
    app.use('/api/users', userRoutes)
    
    app.use(errorHandler)

    const PORT = process.env.PORT1 || 500;
app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`)
);