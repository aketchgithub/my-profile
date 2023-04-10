import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="app_navbar">
      <ul className="app_navbar-links">
        {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
          <li key={item} className="app_flex p-text">
            <div />
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app_navbar-menu">
        <HiMenuAlt4 onClick={toggleMenu} />
        {menuOpen && <Menu toggleMenu={toggleMenu} />}
      </div>
    </nav>
  );
}

function Menu({ toggleMenu }) {
  return (
    <motion.div
      whileInView={{ x: [300, 0] }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <HiX onClick={toggleMenu} />
      <ul>
        {["Home", "About", "Contact", "Skills", "Work"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Navbar;
