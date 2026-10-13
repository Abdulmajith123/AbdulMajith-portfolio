
import React from "react";

function Education() {
  return (
    <section id="education" className="container portfolio-section">
      <h2 className="section-title">
        Education & Certifications
      </h2>

      <div className="row g-4">
        {/* B.E. */}
        <div className="col-12">
          <div className="project-card education-card">
            <h3>B.E. Computer Science and Engineering</h3>
            <h5>PERI Institute of Technology</h5>
            <p className="text-secondary">
              Graduated in 2025
            </p>
            <p className="mb-0">
              <strong>Percentage / CGPA:</strong> 74
            </p>
          </div>
        </div>

        {/* HSC */}
        <div className="col-12">
          <div className="project-card education-card">
            <h3>Higher Secondary Certificate (HSC)</h3>
            <h5>st'marys matriculation Higher Secondary School </h5>
            <p className="text-secondary">
              2021
            </p>
            <p className="mb-0">
              <strong>Percentage:</strong> 84
            </p>
          </div>
        </div>

        {/* SSLC */}
        <div className="col-12">
          <div className="project-card education-card">
            <h3>Secondary School Leaving Certificate (SSLC)</h3>
            <h5>st'marys matriculation Higher Secondary School</h5>
            <p className="text-secondary">
              2019
            </p>
            <p className="mb-0">
              <strong>Percentage:</strong> 79
            </p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="certifications mt-5">
        <h4>Certifications</h4>
        <p>
          Java, MySQL, HTML & CSS, Cybersecurity, ML & AI.
        </p>
      </div>
    </section>
  );
}

export default Education;
