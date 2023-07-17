import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <ContactForm />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="">
      <Nav handleNavigation={handleNavigation} currentPage={currentPage} />
      <div>{renderPage()}</div>
      <Footer />
    </div>
  );
};

export default App;
