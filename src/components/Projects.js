import React from 'react';

import Proje from './Proje';
import P1 from '../images/P1.jpg';
import P2 from '../images/P2.jpg';
import P3 from '../images/P3.jpg';




const Projects = () => {
    
    return(
        <div className='s1'>
           <div className='main-container'>
                <h3 style={{textAlign:'center'}}>Bazı Yaptığım Projeler</h3>
                <div className='post-wrapper'>
                    <Proje
                         name='Plan'
                         description='Some of my past projects'
                         image={P1}/>
                    <Proje
                    name='Çizim'
                    description='Some of my past projects'
                    image={P2}
                    />
                    <Proje
                    name='Bina'
                    description='Some of my past projects'
                    image={P3}
                    
                    />
                </div>
                
           </div>
        </div>
    )
}

export default Projects;