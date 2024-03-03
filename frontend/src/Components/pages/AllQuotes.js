import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteComponent from '../QuoteComponent/QuoteComponent';

const AllQuotes = () => {

    let [quotes, setQuotes] = useState([]);
    
    async function getQuotes() {
        // let res = await axios.get('http://localhost:8080/allquotes');
        let res = await axios.get('https://quotes-app-quoe.onrender.com/allquotes')
        // console.log(res)
        setQuotes(res.data)
    }

    useEffect(() => {
        getQuotes();
    }, [])

  return (
    <div>
        <h1 className='text-center my-4'>All Quotes</h1>
        {
            quotes.map((quote, index) => {
                return <QuoteComponent key={index} author={quote.author} text={quote.text} id={quote._id} />
            })
        }

    </div>
  )
}

export default AllQuotes