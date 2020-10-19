import React from 'react';

import Intro from './Intro';
import Left from './Left';
import Right from './Right';

const Portfolio = () => {
    return(
        <div className='intro-wrapper'>
            <Intro/>
            <Left/>
            <Right/>
        </div>
    )
}


export default Portfolio;