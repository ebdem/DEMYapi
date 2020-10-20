import React from "react";
import "../styles/default.css";
import Plan3 from '../images/Plan3.jpeg';
import { AiFillMail, AiFillLinkedin } from "react-icons/ai"
const Social = () => {
  return (
    <div className="social-links">
      <img id="social_img" src={Plan3}  alt='Plan'/>
      <h3>
         Benimle İletişime Geçin
          
        </h3>

      <a href="https://www.youtube.com/c/dennisivy">
        
        <i></i>
        <p>adem@gmail.com <AiFillMail style={{color:'#b5838d',display:'inline',marginLeft:'5',paddingTop:'10'}}/></p>
      </a>
      <br />
      <a href="https://www.youtube.com/c/dennisivy">
        
        <i></i>
        <p>linkedin <AiFillLinkedin style={{color:'#b5838d',display:'inline',marginLeft:'5',paddingTop:'10'}}/></p>
      </a>
    </div>
  );
};

export default Social;
