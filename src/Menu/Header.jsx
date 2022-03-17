import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./x.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
   <div className="header">
      <ul className={click ? "nav-options active" : "nav-options"}>
          <Link to="/" className="option">INICIO</Link>
          <Link to="/Incoming" className="option">ESTRENOS</Link>
          <Link to="/RatedFilms" className="option">RANKING</Link>
          <Link to="/NowPlaying" className="option">MAS VISTAS</Link>
        </ul>
        
      
      
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );

        }

export default Header;
