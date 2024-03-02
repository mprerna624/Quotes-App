import React, { useRef } from 'react';
import styles from './NewQuote.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewQuotes = () => {

    let navigate = useNavigate();

    let authornameInputRef = useRef();
    let quoteInputRef = useRef();

    const addQuoteHandler = async (e) => {
        e.preventDefault();
        const author = authornameInputRef.current.value;
        const text = quoteInputRef.current.value;
        try{
            let res = await axios.post('http://localhost:8080/addquotes', {author, text});
            console.log(res.data);
            navigate('/'); 
        }
        catch(e){
            console.log("Cannot create a new quote at this moment")
        }
    }


  return (


    <div className='container row justify-content-center'>
        <div className="col-6">
            <h3 className='my-4'>Form for adding new quote</h3>
            <form className={styles['new-quote-form']} onSubmit={addQuoteHandler}>
                <div className='mb-3'>
                    <label htmlFor="author">Author: </label>
                    <input type="text" id='author' name='author' placeholder="Author's Name" ref={authornameInputRef} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="quote">Quote: </label>
                    <textarea name="text" id="quote" cols="15" rows="4" placeholder="Author's Quote" ref={quoteInputRef}></textarea>
                </div>
                <button className='btn btn-primary'>Add Quote</button>
            </form>
        </div>

    </div>
  )
}

export default NewQuotes