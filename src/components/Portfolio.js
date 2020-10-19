import React from 'react';
import '../styles/default.css';
import Intro from './Intro';
import Left from './Left';

const Portfolio = () => {
    return(
        <div className='intro-wrapper'>
            <Intro/>
            <Left/>
        </div>
    )
}


export default Portfolio;