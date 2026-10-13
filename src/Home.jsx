
import React from "react";

function Home() {
  return (
  <section id="home" className="container portfolio-section home-section">
  <div className="row align-items-center g-5">
    <div className="col-lg-7 home-content">
      <p className="home-greeting">HELLO, I'M</p>

      <h1 className="typing-name">
        A Abdul <span>Majith</span>
      </h1>

      <h2>Java Backend Developer</h2>


          <p className="home-description">
            I build reliable applications and REST APIs using Java,
            Spring Boot, Hibernate and MySQL. I enjoy solving problems
            and turning ideas into practical software solutions.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <i className="bi bi-arrow-right"></i>
            </a>

            <a
              href="/Abdulmajith.resume.pdf"
              className="btn btn-outline-light"
              download
            >
              <i className="bi bi-download"></i> Download Resume
            </a>
          </div>

          <div className="home-socials">
            <a
              href="https://github.com/Abdulmajith123/Abdulmajith123"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abdul-majith-a-93ab19239"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="home-image-wrapper">
            <div className="home-image-glow"></div>

            <img
              src="/profileimg.png"
              alt="Abdul Majith"
              className="home-profile-image"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
