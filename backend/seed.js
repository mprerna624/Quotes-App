const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyQuotes = [
    {
        author: "Steve Jobs",
        text: "The only way to do great work is to love what you do."
    },
    {
        author: "Winston Churchill",
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts."
    },
    {
        author: "Theodore Roosevelt",
        text: "Believe you can and you're halfway there."
    },
    {
        author: "Abraham Lincoln",
        text: "In the end, it's not the years in your life that count. It's the life in your years."
    },
    {
        author: "Eleanor Roosevelt",
        text: "The future belongs to those who believe in the beauty of their dreams."
    }
]

async function seedDB() {
    await Quotes.insertMany(dummyQuotes);
    console.log('Data seeded successfully!!')
}

module.exports = seedDB;