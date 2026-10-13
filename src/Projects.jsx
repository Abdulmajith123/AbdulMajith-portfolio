
import React from "react";

function Projects() {
  const projects = [
    {
      title: "Smart Dairy Distribution and Subscription Management System",
      description:
        "A web application to manage dairy customers, milk products, subscriptions, daily add-ons, and billing.",
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL"],
      icon: "bi bi-cup-hot",
    },
    {
      title: "Course Registration System",
      description:
        "A web application to manage courses, student registrations, and enrollment records with a Spring Boot backend.",
      technologies: ["Java", "Spring Boot", "MySQL", "JavaScript","Html","Css","React"],
      icon: "bi bi-mortarboard",
    },
    {
      title: "Railway Reservation System",
      description:
        "A console-based application to view train details, book tickets, view passenger bookings, and cancel reservations.",
      technologies: ["Java", "Hibernate", "MySQL"],
      icon: "bi bi-train-front",
    },
  ];

  return (
    <section
      id="projects"
      className="portfolio-section projects-section"
    >
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-subtitle">WHAT I'VE BUILT</p>

          <h2>
            My <span>Projects</span>
          </h2>

          <p className="section-description">
            Projects that demonstrate my programming and problem-solving skills.
          </p>
        </div>

        <div className="row g-4 mt-3">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <div className="project-card h-100">
                <div className="project-icon">
                  <i className={project.icon}></i>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
