
import React from "react";

function Contact() {
  return (
    <section id="contact" className="container portfolio-section">
      <h2 className="section-title">Contact Me</h2>

      <p className="contact-description">
        I'm looking for opportunities as a Java Backend Developer.
        Feel free to contact me for job opportunities .
      </p>

      <div className="contact-card">
        {/* Email */}
        <div className="contact-item">
          <h5>Email</h5>
          <a href="mailto:abdulmajith2305@gmail.com">
            abdulmajith2305@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <h5>Phone</h5>
          <a href="tel:+918778208809">
            8778208809
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-item">
          <h5>LinkedIn</h5>
          <a
            href="https://www.linkedin.com/in/abdul-majith-a-93ab19239"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-item">
          <h5>GitHub</h5>
          <a
            href="https://github.com/abdulmajith123"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
