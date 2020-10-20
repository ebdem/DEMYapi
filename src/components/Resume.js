import React from 'react';

import Skills from './Skills';
import Social from './Social';

const Resume = (props) => {
    return(
        <div className='about-wrapper'>
            <div className='about-me'>
                <h4>{props.title}</h4>

                <p>Sadece beynimi gıdıklamak ve başkalarına nasıl yapıldığını öğretmeyi seviyorum.</p>

                <p>Ders vermekle meşgul olsam da, beni ilgilendiren harika bir ekip ve projeler bulmak için röportajlar alıyorum.</p>


                <hr/>

                <h4>Niteliklerim</h4>

                
                <Skills/>
                
            </div>
            <Social/>
        </div>
    )
} 

export default Resume;