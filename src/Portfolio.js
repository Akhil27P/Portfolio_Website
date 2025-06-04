import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Envelope, Linkedin, Github } from "lucide-react";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 95 },
  { name: "CSS", level: 90 },
];

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  // Animate skill bars after component mounts
  useEffect(() => {
    const bars = document.querySelectorAll(".bar-fill");
    bars.forEach((bar, i) => {
      setTimeout(() => {
        bar.style.width = `${skills[i].level}%`;
      }, 300 + i * 300);
    });
  }, []);

  return (
    <>
      <header>
        <nav role="navigation" aria-label="Primary navigation">
          <button
            aria-current={activeSection === "about" ? "page" : undefined}
            onClick={() => setActiveSection("about")}
            type="button"
          >
            About
          </button>
          <button
            aria-current={activeSection === "skills" ? "page" : undefined}
            onClick={() => setActiveSection("skills")}
            type="button"
          >
            Skills
          </button>
          <button
            aria-current={activeSection === "projects" ? "page" : undefined}
            onClick={() => setActiveSection("projects")}
            type="button"
          >
            Projects
          </button>
          <button
            aria-current={activeSection === "contact" ? "page" : undefined}
            onClick={() => setActiveSection("contact")}
            type="button"
          >
            Contact
          </button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-10" role="main">
        {/* Hero Section */}
        <section id="hero" className="text-center">
          <h1 className="animate-fadeInDown">Hello, I'm Your Name</h1>
          <p className="animate-fadeInUp">
            I'm a passionate web developer building modern, performant web apps.
          </p>
          <p>
            Explore my portfolio below to see my skills and projects.
          </p>
        </section>

        {/* About Section */}
        {activeSection === "about" && (
          <section
            id="about"
            className="card p-6 animate-fadeInLeft"
            aria-label="About me"
          >
            <h2>About Me</h2>
            <p>
              I’m a full-stack developer with a knack for building clean and
              efficient web applications using React, Node.js, and TypeScript.
            </p>
            <p>
              I love collaborating on open-source projects and continuously learning new technologies.
            </p>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <section
            id="skills"
            className="card p-6 animate-fadeInLeft"
            aria-label="My skills"
          >
            <h2>Skills</h2>
            {skills.map(({ name, level }) => (
              <div className="skill-progress" key={name}>
                <div className="label" aria-label={`${name} skill level: ${level}%`}>
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <div className="bar-bg" role="progressbar" aria-valuenow={level} aria-valuemin="0" aria-valuemax="100">
                  <div className="bar-fill"></div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section
            id="projects"
            className="card p-6 animate-fadeInLeft"
            aria-label="Projects portfolio"
          >
            <h2>Projects</h2>
            <p>Coming soon! Stay tuned for exciting projects.</p>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section id="contact" className="animate-fadeInLeft" aria-label="Contact information">
            <p>
              <Envelope size={20} aria-hidden="true" /> Email:{" "}
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </p>
            <p>
              <Linkedin size={20} aria-hidden="true" />{" "}
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
            <p>
              <Github size={20} aria-hidden="true" />{" "}
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </section>
        )}
      </main>
    </>
  );
}
