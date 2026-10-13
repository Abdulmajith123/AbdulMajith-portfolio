
import React from "react";

const skills = [
  {
    name: "Java",
    description:
      "Build backend logic using OOP, collections, exception handling, and Java fundamentals.",
  },
  {
    name: "Spring Boot",
    description:
      "Develop REST APIs and backend services with less configuration.",
  },
  {
    name: "Hibernate",
    description:
      "Map Java objects to database tables and manage persistence using ORM.",
  },
  {
    name: "REST APIs",
    description:
      "Create HTTP endpoints to exchange data between frontend and backend applications.",
  },
  {
    name: "MySQL",
    description:
      "Store, retrieve, update, and manage application data using SQL queries.",
  },
  {
    name: "React",
    description:
      "Build reusable UI components and interactive frontend interfaces.",
  },
  {
    name: "JavaScript",
    description:
      "Add dynamic behavior, handle events, and connect frontend interfaces to APIs.",
  },
  {
    name: "HTML",
    description:
      "Structure web pages using semantic elements, forms, headings, and links.",
  },
  {
    name: "CSS",
    description:
      "Style web pages with layouts, colors, spacing, and responsive designs.",
  },
  {
    name: "Bootstrap",
    description:
      "Build responsive layouts quickly using a grid system and reusable UI classes.",
  },
  {
    name: "Git & GitHub",
    description:
      "Track code changes with Git and store and share projects through GitHub.",
  },
];

function Skills() {
  return (
    <section id="skills" className="container portfolio-section">
      <h2 className="section-title">Technical Skills</h2>

      <p className="section-subtitle">
        Technologies I use to build web applications
      </p>

      <div className="row g-4">
        {skills.map((skill) => (
          <div
            className="col-12 col-md-6 col-lg-4"
            key={skill.name}
          >
            <div className="skill-card h-100">
              <h5>{skill.name}</h5>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
