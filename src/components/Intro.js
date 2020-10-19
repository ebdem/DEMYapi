import React from 'react';
import '../styles/default.css';

const Intro = () => {
    return (
        <div className='nav-wrapper'>
            <a href="index.html">
						<div className="dots-wrapper">
							<div id="dot-1" className="browser-dot"></div>
							<div id="dot-2" className="browser-dot"></div>
							<div id="dot-3" className="browser-dot"></div>
						</div>
					</a>
					

					<ul id="navigation">
						<li><a href="index.html#contact">Contact</a></li>

					</ul>
        </div>
    )
}

export default Intro;
