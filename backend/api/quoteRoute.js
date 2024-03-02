const router = require('express').Router();
const Quotes = require('../models/Quote');

//For fetching all quotes from DB and showing it in frontend component(through cors)
router.get('/allquotes', async (req, res) => {
    try {
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    }
    catch(e) {
        res.status(400).json({msg: "Something went wrong!!"});
    }
});


//For creating a new quote in the DB
router.post('/addquotes', async (req, res) => {
    let {text, author} = req.body;
    await Quotes.create({text, author});
    res.status(201).json({msg: "New quote added successfully"})
});


//For getting a particular quote from the DB
router.get('/quotes/:id', async (req, res) => {
    let {id} = req.params; //its actually the ObjectId _id present in every record
    const quote = await Quotes.findById(id);
    res.status(200).json(quote);
})


module.exports = router;