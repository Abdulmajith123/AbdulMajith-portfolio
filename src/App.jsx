
import React from "react";

import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Education from "./Education.jsx";
import Contact from "./Contact.jsx";
import Feedback from "./Feedback.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Feedback />
      </main>

      {/* Footer */}
<footer className="portfolio-footer">
  <div className="container">
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Abdul Majith. All rights reserved.</p>
    </div>
  </div>
</footer>
    </>
  );
}

export default App;
