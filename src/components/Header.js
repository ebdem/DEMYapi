import React from 'react';

import Portfolio from './Portfolio';

const Header = () =>{
    return(
        <div className='s1'>
            <div className='main-container'>
                <div className="greeting-wrapper">
                    <h2>Merhaba Ben ADEM DEMİRAY</h2>
                </div>
                <Portfolio/>
            </div>
        </div>
    )
}


export default Header;