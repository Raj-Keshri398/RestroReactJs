import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // ⭐ ADD THIS FUNCTION
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <nav className="navbar">
        <h2 className="logo">Foodie</h2>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("menu")}>Menu</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <div className="toggle-btn" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </>
  );
};

export default Navbar;
