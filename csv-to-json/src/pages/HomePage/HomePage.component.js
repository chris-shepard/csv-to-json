import React from 'react';
import './HomePage.styles.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homePage">
      <h2>Convert your .csv file into a customizable JSON object</h2>
      <Link to="/convert"><button>Get Started</button></Link>
    </div>
  )
}

export default HomePage;