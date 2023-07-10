import React from "react";

const Nav = ({ handleNavigation, currentPage }) => {
  return (
    <nav className="fixed top-0 w-full h-[100px] flex justify-between items-center px-5 bg-blue-700 text-amber-700 text-2xl font-serif">
      <button
        onClick={() => handleNavigation("home")}
        className={currentPage === "home" ? "active" : ""}
      >
        Home
      </button>
      <button
        onClick={() => handleNavigation("about")}
        className={currentPage === "about" ? "active" : ""}
      >
        About
      </button>
      <button
        onClick={() => handleNavigation("projects")}
        className={currentPage === "projects" ? "active" : ""}
      >
        Projects
      </button>
      <button
        onClick={() => handleNavigation("contact")}
        className={currentPage === "contact" ? "active" : ""}
      >
        Contact
      </button>
    </nav>
  );
};

export default Nav;


