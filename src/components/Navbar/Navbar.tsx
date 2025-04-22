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
    setIsVisible((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="navbar-container">
      {/* Bottone per mostrare/nascondere la navbar */}
      {!isVisible && (
        <button className="menu-button" onClick={toggleNavbar}>
          ☰ Menu
        </button>
      )}

      {/* Navbar */}
      {isVisible && (
        <nav className="navbar visible">
          <ul className="navbar-list">
            {navbarElements.map((element, index) => (
              <li key={index} className="navbar-item">
                <Link to={element.href} onClick={handleLinkClick} className="navbar-link">
                  {element.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;