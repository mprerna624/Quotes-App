const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quoteRoutes = require('./api/quoteRoute');
const cors = require('cors');

mongoose.connect('mongodb+srv://mprerna624:2jtyxqtkcLyARUt6@cluster0.idqcnbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {console.log('Database connected successfully!!')})
.catch((err) => {console.log(err)});



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: ['http://localhost:3000']}));

app.use(quoteRoutes);

app.get('/hello', (req,res) => {
    res.status(200).json({msg: "Hello from Quotes App"})
})

// seedDB();

app.listen(8080, () => {
    console.log('Server connected at port 8080!!')
})