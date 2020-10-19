import React from "react";
import "../styles/default.css";
import Plan3 from '../images/Plan3.jpeg'

const Social = () => {
  return (
    <div className="social-links">
      <img id="social_img" src={Plan3}  alt='Plan'/>
      <h3>Find me on Twitter & Youtube</h3>

      <a href="https://www.youtube.com/c/dennisivy">
        YouTube: @DennisIvy
      </a>
      <br />
      <a href="https://twitter.com/dennisivy11">
        Twitter: @DennisIvy11
      </a>
    </div>
  );
};

export default Social;
