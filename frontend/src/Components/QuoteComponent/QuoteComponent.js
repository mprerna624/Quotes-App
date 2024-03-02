import React from 'react';
// import styles from './QuoteComponent.module.css';
import { useNavigate } from 'react-router-dom';

const QuoteComponent = (props) => {

    let navigate = useNavigate();
    
    function showQuoteHandler(id) {
        navigate(`/quotes/${id}`);
    }


  return (
  
      <div className="card container my-4">
          <div className="card-body d-flex justify-content-between align-items-center">
              <blockquote className="blockquote mb-0">
                  <p>{props.text}</p>
                  <footer className="blockquote-footer">
                    <cite title={props.author}>{props.author}</cite>
                  </footer>
              </blockquote>
              <button className='btn btn-md btn-primary' onClick={() => {showQuoteHandler(props.id)}}>View</button>
          </div>
        </div>
  )
}

export default QuoteComponent