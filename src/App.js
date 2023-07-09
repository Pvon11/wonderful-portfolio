// import "./App.css";
import About from "./components/About/index";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Nav from "./components/Nav/nav";

// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root />}>
  //       <Nav />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //       <Route path="/projects" element={<Projects />} />
  //       <Route path="/resume" element={<Resume />} />
  //     </Route>
  // )
  // );
  return (
    <>
      <div>
        <Nav />
        <About />
        <Projects />
        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;
