import React from "react";

const Nav = ({ handleNavigation, currentPage }) => {
  return (
    <nav className="fixed top-0 w-full h-[90px] flex justify-between items-center px-5 py-2 bg-notindigo text-notpeach text-2xl font-raleway">
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
