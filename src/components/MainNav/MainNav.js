import React from "react";
import "./MainNav.css";
import { Link } from "react-router-dom";
import x from "../../images/baseline_close_white_18dp.png";

const MainNav = ({ visible, handleNavClick }) => {
  return (
    <div>
      <div id="navbar" className={visible ? "slideIn" : "slideOut"}>
        <ul>
          <div className="XToClose">
            <Link to="/">
              <li onClick={handleNavClick}>Home</li>
            </Link>
            <img className="theX" src={x} alt="" onClick={handleNavClick} />
          </div>
          <div className="other_links">
            <Link to="/plants">
              <li onClick={handleNavClick}>Plants</li>
            </Link>
            <Link to="/containers">
              <li onClick={handleNavClick}>Containers</li>
            </Link>
            <Link to="/design">
              <li onClick={handleNavClick}>Design</li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
