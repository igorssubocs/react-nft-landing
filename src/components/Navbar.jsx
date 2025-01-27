import React, { useState } from "react";
import logo from "../assets/logo.png";
import { ImSun } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-conteiner">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <div className="toggle-conteiner">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode">
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-conteiner ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#lounch">Lounch</a>
          </li>
          <li>
            <a href="#signup">Sign Up</a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
