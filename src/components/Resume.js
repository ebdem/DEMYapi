import React from 'react';

import Skills from './Skills';
import Social from './Social';

const Resume = (props) => {
    return(
        <div className='about-wrapper'>
            <div className='about-me'>
                <h4>{props.title}</h4>

                <p>I build new projects just to tickle my brain and love teaching others how they're made.</p>

                <p>While I keep busy teaching courses, I still take interviews in search of a great team & projects that interest me.</p>


                <hr/>

                <h4>TOP EXPERTISE</h4>

                
                <Skills/>
                
            </div>
            <Social/>
        </div>
    )
} 

export default Resume;