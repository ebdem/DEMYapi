import React from 'react';
import '../styles/default.css';
import Portfolio from './Portfolio';

const Header = () =>{
    return(
        <div className='s1'>
            <div className='main-container'>
                <div className="greeting-wrapper">
                    <h1>Merhaba Ben ADEM DEMİRAY</h1>
                </div>
                <Portfolio/>
            </div>
        </div>
    )
}


export default Header;