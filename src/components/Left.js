import React from 'react';
import Logo from '../images/Adem.png'

const Left = () => {
    return(
        <div className='left-column'>
            <img id="profile_pic" src={Logo} alt='ADEM'/>
					<h5 style={{textAlign:'center',lineHeight:0}}>Personalize Theme</h5>

					<div id="theme-options-wrapper">
						<div data-mode="light" id="light-mode" class="theme-dot"></div>
						<div data-mode="blue" id="blue-mode" class="theme-dot"></div>
						<div data-mode="green" id="green-mode" class="theme-dot"></div>
						<div data-mode="purple" id="purple-mode" class="theme-dot"></div>
					</div>

					<p id="settings-note">*Theme settings will be saved for<br/>your next vist</p>
        </div>
    )
}


export default Left;