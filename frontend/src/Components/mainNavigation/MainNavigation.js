import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  return (

    // <nav className={styles.nav}>
    //     <h2>Quotes App</h2>
    //     <ul>
    //         <li><Link to='/'>All Quotes</Link></li>
    //         <li><Link to='/new'>New Quote</Link></li>
    //     </ul>
    // </nav>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Quotes App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link active" aria-current="page" to="/">All Quotes</Link>
            <Link class="nav-link" to="/new">Add New Quote</Link>
          </div>
        </div>
      </div>
    </nav>
  ) 
}

export default MainNavigation