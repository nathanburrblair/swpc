import React from "react";
import './Footer.css'
import fb from "../../images/facebook-logo.svg";
import insta from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="contact_info">
        <h3>SOIL & WATER</h3>
        <p>
          123 Main St.
          <br />
          Anytown, USA
          <br />
          87654
        </p>
        <p>(987) 654-3210</p>
      </div>
      <div className="social">
        <img src={fb} alt="" />
        <img src={insta} alt="" />
        <img src={twitter} alt="" />
      </div>
    </div>
  );
}

export default Footer;
