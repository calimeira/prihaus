import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/css/components/Header.css"; // Importamos los estilos
import logo from "../styles/img/logos/logo2.png"; // Importamos la imagen del logo

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <Link to="/">
        <img src={logo} alt="Logo" className="header-logo" />
      </Link>
      <nav className="nav-center">
        <ul>
          <Link>
            <a to="/">HOME</a>
          </Link>
          <Link>
            <a to="/">WHAT WE DO?</a>
          </Link>
          <Link>
            <a to="/">HOW WE DO IT?</a>
          </Link>
          <Link>
            <a to="/">WHY WE DO IT?</a>
          </Link>
          <Link>
            <a to="/">WHO WE ARE?</a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
