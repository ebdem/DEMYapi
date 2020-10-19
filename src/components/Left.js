import React,{useState} from 'react';
import Logo from '../images/Adem.png'

const Left = () => {
	// let theme = localStorage.getItem('theme')
	const [theme,setTheme] = useState(localStorage.getItem('theme'))
	
	const handleClick = (color) => {
		//console.log('Tıklando')
		// if(theme === 'light'){
		// 	setTheme('light')
		// }else {
		// 	setTheme(theme)
		// }
		localStorage.setItem("theme", color)
		window.location.reload()

	}
    return(
        <div className='left-column'>
            <img id="profile_pic" src={Logo} alt='ADEM'/>
					<h5 style={{textAlign:'center',lineHeight:0}}>Personalize Theme</h5>

					<div id="theme-options-wrapper">
						<div onClick={()=>handleClick("light")} data-mode="light" id="light-mode" className="theme-dot"></div>
						<div onClick={()=>handleClick("blue")} data-mode="blue" id="blue-mode" className="theme-dot"></div>
						<div onClick={()=>handleClick("green")} data-mode="green" id="green-mode" className="theme-dot"></div>
						<div onClick={()=>handleClick("purple")} data-mode="purple" id="purple-mode" className="theme-dot"></div>
					</div>

					<p id="settings-note">*Theme settings will be saved for<br/>your next vist</p>
        </div>
    )
}


export default Left;