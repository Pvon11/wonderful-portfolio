// import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav/nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Nav handleNavigation={handleNavigation} currentPage={currentPage} />
      <div>{renderPage()}</div>
    </div>
  );
};

export default App;

// function App() {
//   // const router = createBrowserRouter(
//   //   createRoutesFromElements(
//   //     <Route path="/" element={<Root />}>
//   //       <Nav />
//   //       <Route path="/about" element={<About />} />
//   //       <Route path="/contact" element={<Contact />} />
//   //       <Route path="/projects" element={<Projects />} />
//   //       <Route path="/resume" element={<Resume />} />
//   //     </Route>
//   // )
//   // );
//   return (
//     <>
//       <div>
//         <Nav />
//         <About />
//         <Projects />
//         <Contact />

//         <Footer />
//       </div>
//     </>
//   );
// }
