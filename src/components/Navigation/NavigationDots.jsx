import React, { useState } from "react";

function NavigationDots ({ active }) {
  const [navigationItems] = useState([
    { title: "home", id: "home" },
    { title: "about", id: "about" },
    { title: "work", id: "work" },
    { title: "skills", id: "skills" },
    { title: "contact", id: "contact" },
  ]);

  const handleDotClick = (id) => {
    const element = document.getElementById(id);
    window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
  };

  return (
    <div className="app__navigation">
      {navigationItems.map(({ title, id }) => (
        <button
          key={id}
          className="app__navigation-dot"
          onClick={() => handleDotClick(id)}
          style={active === id ? { backgroundColor: "#313BAC" } : {}}
        >
          {/* {title} */}
        </button>
      ))}
    </div>
  );
};

export default NavigationDots;

