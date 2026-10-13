
import React from "react";

function Navbar() {
  // Close the mobile navbar
  const closeMobileMenu = () => {
    const navbar = document.getElementById("portfolioNav");

    if (navbar && navbar.classList.contains("show")) {
      const bootstrapCollapse = window.bootstrap?.Collapse;

      if (bootstrapCollapse) {
        bootstrapCollapse.getOrCreateInstance(navbar).hide();
      }
    }
  };

const smoothScrollToSection = (event, sectionId) => {
  event.preventDefault();

  const target = document.getElementById(sectionId);
  if (!target) return;

  closeMobileMenu();

  const startPosition = window.scrollY;
  const navbarHeight = 80;

  const targetPosition =
    target.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight;

  const distance = targetPosition - startPosition;
  const duration = 1100; // Medium-slow speed

  let startTime = null;

  const animateScroll = (currentTime) => {
    if (startTime === null) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Mostly consistent speed with gentle slowing at the end
   const easedProgress =
  progress + 0.15 * Math.sin(2 * Math.PI * progress) / (2 * Math.PI);
    window.scrollTo(
      0,
      startPosition + distance * easedProgress
    );

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
    { name: "Feedback", href: "#feedback" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top portfolio-navbar">
      <div className="container">
        {/* Brand */}
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={(event) =>
            smoothScrollToSection(event, "home")
          }
        >
          AM<span className="text-primary">.</span>
        </a>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNav"
          aria-controls="portfolioNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="portfolioNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <a
                  className="nav-link"
                  href={item.href}
                  onClick={(event) =>
                    smoothScrollToSection(
                      event,
                      item.href.substring(1)
                    )
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
