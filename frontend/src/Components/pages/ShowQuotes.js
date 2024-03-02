import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ShowQuotes = () => {

    //In Backend, we get path(route/url) parameter through let {id} = req.params object whereas
    // in React(Frontend) we get path parameter through useParams hook  
    const params = useParams();  

    let [quote, setQuote] = useState({
        author: "",
        text: ""
    }); 

    async function fetchQuote() {
        let res = await axios.get(`http://localhost:8080/quotes/${params.id}`);
        let {author, text} = res.data;
        setQuote({author, text})
    }

    useEffect(() => {
        fetchQuote();
    }, [])

  return (
    <div className='container'>

        <h1 className='text-center my-4'>Showing a Particular Quote</h1>
        <div>
            <h3 className='fst-italic'>"{quote.text}"</h3>
            <p className='fst-italic'> - Said by <span className='fw-medium'>{quote.author}</span></p>
        </div>

    </div>
  )
}

export default ShowQuotes