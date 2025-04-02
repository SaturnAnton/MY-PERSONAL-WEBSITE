import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isVisible, setIsVisible] = useState(false);

  const navbarElements = [
    ...(isHome ? [] : [{ label: "HOME", href: "/" }]),
    { label: "ABOUT ME", href: "/aboutme" },
    { label: "PROJECTS", href: "/projects" },
  ];

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Bottone per mostrare/nascondere la navbar */}
      <button className="menu-button" onClick={toggleNavbar}>
        ☰ Menu
      </button>

      {/* Navbar */}
      <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
        <ul className="navbar-list">
          {navbarElements.map((element, index) => (
            <li key={index}>
              <Link to={element.href} onClick={() => setIsVisible(false)}>
                {element.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
