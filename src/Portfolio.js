import React, { useState, useEffect } from "react";
import ResumeDownload from "./ResumeDownload";  // Import ResumeDownload button

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  // Smooth scroll to section
  function handleNavClick(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  // Track scroll to highlight active nav
  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "about";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) current = section.id;
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="header">
        <nav>
          <ul className="nav-list">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={activeSection === id ? "active" : ""}
                  onClick={() => handleNavClick(id)}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Akhil Pamarthy</h1>
          <p className="title">AI & Machine Learning Engineer</p>
          <p className="contact-line">
            San Jose, California | +1 (469) 226-1267 |{" "}
            <a href="mailto:akhil.pamarthy@outlook.com" target="_blank" rel="noreferrer">
              akhil.pamarthy@outlook.com
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/akhil-pamarthy-16b8642a8/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>

          {/* Resume Download Button */}
          <div style={{ marginTop: "20px" }}>
            <ResumeDownload />
          </div>
        </section>

        <section id="about" className="section fade-in">
          <h2>About Me</h2>
          <p>
            I specialize in building advanced AI systems and services, with a proven track record of leading
            successful initiatives. Having managed large engineering and product teams, I engineer solutions
            that have a meaningful impact for thousands of users.
          </p>
        </section>

        <section id="experience" className="section fade-in">
          <h2>Experience</h2>

          <article className="job">
            <h3>Machine Learning Engineer Intern</h3>
            <p className="job-company">
              Eitacies Inc — Sep 2023 – Dec 2023
            </p>
            <ul>
              <li>Supported AI research for brain imaging-based diagnostics, extending classification models to identify cocaine dependence from SPECT scans.</li>
              <li>Analyzed over 5 million anonymized clinical records, improving mental health diagnostic accuracy through advanced ML techniques.</li>
              <li>Designed and deployed end-to-end AI pipelines processing raw DICOM/NIfTI medical imaging data to interpretable outputs.</li>
              <li>Extracted diagnostic themes using LDA, TF-IDF, and coherence scoring for patient clustering and predictive modeling.</li>
              <li>Built scalable NLP preprocessing workflows using spaCy, NLTK, regex, and visualized topic distributions.</li>
              <li>Streamlined unstructured data ETL pipelines with PySpark and Google Drive, reducing data processing time by 40%.</li>
              <li>Leveraged Google Colab and cloud resources for secure and efficient model training.</li>
              <li>Worked with MONAI, nibabel, and nilearn for multi-modal text-imaging data alignment.</li>
            </ul>
          </article>

          <article className="job">
            <h3>AI/ML Engineer</h3>
            <p className="job-company">Gray Logic Technologies Pvt Ltd — Apr 2020 – Apr 2022</p>
            <ul>
              <li>Led development of AI-powered insurance claims processing system, reducing turnaround time from days to minutes.</li>
              <li>Reduced operational costs by 25% by automating claims triage and damage estimation using AI.</li>
              <li>Built and maintained a 10,000+ annotated vehicle damage image dataset with VGG Image Annotator.</li>
              <li>Developed Detectron2-based object detection and segmentation models achieving >90% F1-score.</li>
              <li>Deployed models as RESTful APIs on Azure App Service for thousands of concurrent users.</li>
              <li>Mentored 3 junior engineers, improving team efficiency by 20%.</li>
            </ul>
          </article>

          <article className="job">
            <h3>Procurement Analyst</h3>
            <p className="job-company">Aliens Developers Pvt Ltd — May 2019 – Mar 2020</p>
            <ul>
              <li>Optimized procurement and inventory workflows, reducing overstock by 15% via vendor analytics.</li>
              <li>Collaborated with engineering teams to align supply chain decisions with project timelines.</li>
              <li>Managed procurement data using PL/SQL and Oracle DB; developed live dashboards in Power BI.</li>
            </ul>
          </article>
        </section>

        <section id="skills" className="section fade-in">
          <h2>Core Skills</h2>
          <ul className="skills-list">
            <li>
              <strong>Programming Languages:</strong> Python, Java, C#, PL/SQL, SQL
            </li>
            <li>
              <strong>Machine Learning & AI:</strong> Machine Learning, Deep Learning, Generative AI,
              Computer Vision, NLP, AI Automation, Transformers, Topic Modeling (LDA, TF-IDF),
              Coherence Scoring, Feature Engineering, Model Fine-Tuning, Hyperparameter Tuning
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong> PyTorch, TensorFlow, Keras, Detectron2, MONAI, spaCy,
              NLTK, Word2Vec, Scikit-learn, OpenCV, nibabel, nilearn
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> Microsoft Azure, AWS CLI, Docker, Google Colab
            </li>
            <li>
              <strong>Databases:</strong> PostgreSQL, MySQL, Oracle DB, Redis, MongoDB
            </li>
            <li>
              <strong>Data Processing & Web Scraping:</strong> PySpark, Selenium, Beautiful Soup, Pandas,
              NumPy, Regex
            </li>
            <li>
              <strong>Data Visualization:</strong> Matplotlib, Power BI
            </li>
            <li>
              <strong>Tools & IDEs:</strong> Jupyter Notebook, VS Code, PyCharm, Terminal
            </li>
            <li>
              <strong>Operating Systems:</strong> Linux, Windows
            </li>
          </ul>
        </section>

        <section id="education" className="section fade-in">
          <h2>Education & Certifications</h2>
          <p>
            <strong>Master of Science (M.Sc.) in Computer and Information Sciences</strong><br />
            East Texas A&M University — Dec 2023
          </p>
          <p>Relevant Coursework: Programming, Algorithms, Operating Systems, Networking, Databases, Data Analysis, Big Data, Machine Learning, AI</p>
          <p>
            <strong>Certifications:</strong><br />
            Docker Foundations Professional Certificate – Docker, Inc (May 2025)<br />
            RESTful API Developer – LinkedIn Learning (May 2025)<br />
            Software Engineering Job Simulation – Hewlett Packard Enterprise, Forage (May 2025)<br />
            Software Engineering Job Simulation – Wells Fargo, Forage (Jun 2025)
          </p>
          <p>
            <strong>Achievements:</strong><br />
            3× IT Wizard Competition Winner (2009–2011)<br />
            2nd Place – Formula Kart Design Challenge
          </p>
        </section>

        <section id="contact" className="section fade-in">
          <h2>Contact</h2>
          <p>
            Feel free to reach out by email or phone.<br />
            <a href="mailto:akhil.pamarthy@outlook.com">akhil.pamarthy@outlook.com</a><br />
            +1 (469) 226-1267
          </p>
        </section>

        <footer className="footer">
          <p>© 2025 Akhil Pamarthy</p>
        </footer>
      </main>
    </>
  );
}
