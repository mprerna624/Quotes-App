const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quoteRoutes = require('./api/quoteRoute');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/QuoteDB')
.then(() => {console.log('Database connected successfully!!')})
.catch((err) => {console.log(err)});



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: ['http://localhost:3000']}));

app.use(quoteRoutes);

app.get('/hello', (req,res) => {
    res.status(200).json({msg: "Hello froom Quotes App"})
})

// seedDB();

app.listen(8080, () => {
    console.log('Server connected at port 8080!!')
})