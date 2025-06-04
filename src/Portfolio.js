import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education & Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const sec of sections) {
        const elem = document.getElementById(sec.id);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="sticky top-0 bg-white shadow-md z-50">
        <nav className="max-w-4xl mx-auto flex justify-center space-x-6 py-4">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`font-semibold hover:text-black transition ${
                activeSection === sec.id
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500"
              }`}
              aria-current={activeSection === sec.id ? "page" : undefined}
            >
              {sec.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-6 md:p-12 max-w-4xl mx-auto space-y-16 scroll-smooth">
        {/* Hero Section */}
        <section className="text-center space-y-3" id="hero">
          <h1 className="text-5xl font-bold animate-fadeInDown">Akhil Pamarthy</h1>
          <p className="text-xl text-gray-700 animate-fadeInUp">
            AI/ML Engineer | Building scalable AI systems & automation pipelines
          </p>
          <p className="text-sm text-gray-500">San Jose, CA</p>
          <div className="flex justify-center space-x-6 pt-3">
            <a
              href="mailto:akhil.pamarthy@outlook.com"
              aria-label="Email"
              className="hover:scale-110 transform transition"
            >
              <Mail className="w-6 h-6 text-gray-700 hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-pamarthy-16b8642a8/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transform transition"
            >
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-black" />
            </a>
            <a
              href="https://github.com/Akhil27P"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:scale-110 transform transition"
            >
              <Github className="w-6 h-6 text-gray-700 hover:text-black" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" tabIndex={-1}>
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-black w-max animate-fadeInLeft">
            About Me
          </h2>
          <Card>
            <CardContent>
              <p className="text-lg leading-relaxed">
                I build advanced AI systems and lead product-focused engineering
                efforts that drive real impact. I enjoy solving complex problems by
                combining AI, cloud, and scalable automation pipelines.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section id="experience" tabIndex={-1}>
          <h2 className="text-3xl font-bold mb-6 border-b-4 border-black w-max animate-fadeInLeft">
            Experience
          </h2>
          <Card>
            <CardContent className="space-y-8">
              {/* Repeat experience blocks */}
              <ExperienceBlock
                title="Machine Learning Engineer Intern – Eitacies Inc"
                dateLocation="Sep 2023 – Dec 2023 · Remote"
                description="Supported AI research in brain imaging diagnostics by developing
                end-to-end pipelines and ML models to identify cocaine dependence
                from SPECT scans."
                points={[
                  "Processed and aligned multi-modal medical imaging data using MONAI, nibabel, and nilearn.",
                  "Improved mental health diagnosis accuracy by analyzing 5M+ anonymized clinical records.",
                  "Built scalable NLP workflows and topic modeling tools using spaCy, NLTK, LDA, and TF-IDF.",
                  "Reduced data processing time by 40% through optimized ETL with PySpark and cloud resources.",
                ]}
              />
              <ExperienceBlock
                title="AI/ML Engineer – Gray Logic Technologies Pvt Ltd"
                dateLocation="Apr 2020 – Apr 2022 · Hyderabad, India"
                description="Led development of an AI-powered vehicle damage assessment system
                that automated insurance claims processing, reducing turnaround
                from days to minutes."
                points={[
                  "Developed object detection and segmentation models with Detectron2 achieving >90% F1-score.",
                  "Managed a large annotated dataset with VGG Image Annotator, integrating storage and retrieval via Azure Blob and Redis.",
                  "Deployed scalable RESTful APIs on Azure App Service serving thousands of users.",
                  "Mentored junior engineers, improving team efficiency by 20%.",
                ]}
              />
              <ExperienceBlock
                title="Procurement Analyst – Aliens Developers Pvt Ltd"
                dateLocation="May 2019 – Mar 2020 · Hyderabad, India"
                description="Optimized procurement workflows, reducing overstock by 15% through
                real-time vendor analytics and automated reporting."
                points={[
                  "Managed data with PL/SQL and Oracle DB.",
                  "Developed live dashboards using Power BI to track KPIs.",
                ]}
              />
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" tabIndex={-1}>
          <h2 className="text-3xl font-bold mb-6 border-b-4 border-black w-max animate-fadeInLeft">
            Skills
          </h2>
          <Card>
            <CardContent>
              <SkillProgress label="Python, Java, C#, SQL, PL/SQL" percent={90} />
              <SkillProgress label="PyTorch, TensorFlow, Keras, Detectron2" percent={85} />
              <SkillProgress label="Azure (Blob Storage, App Service, Functions)" percent={80} />
              <SkillProgress label="PostgreSQL, MySQL, Oracle DB, Redis, MongoDB" percent={75} />
              <SkillProgress label="Matplotlib, Power BI, Jupyter Notebook" percent={70} />
              <SkillProgress label="Linux, Windows" percent={95} />
            </CardContent>
          </Card>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" tabIndex={-1}>
          <h2 className="text-3xl font-bold mb-6 border-b-4 border-black w-max animate-fadeInLeft">
            Education & Certifications
          </h2>
          <Card>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-1">Education</h3>
                <p>
                  <strong>M.Sc. in Computer and Information Sciences</strong>
                  <br />
                  East Texas A&M University, Dec 2023
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Certifications</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Docker Foundations Professional Certificate – 2025</li>
                  <li>RESTful API Developer – LinkedIn Learning, 2025</li>
                  <li>Software Engineering Job Simulations – Hewlett Packard & Wells Fargo, 2025</li>
                  <li>3× IT Wizard Competition Winner (2009-2011)</li>
                  <li>2nd Place – Formula Kart Design Challenge</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" tabIndex={-1} className="text-center space-y-4">
          <h2 className="text-3xl font-bold border-b-4 border-black w-max mx-auto mb-6 animate-fadeInLeft">
            Contact Me
          </h2>
          <p className="text-lg">Feel free to reach out or download my resume below!</p>
          <Button variant="outline" className="mx-auto">
            <a href="/resume.pdf" download>
              Download Resume (PDF)
            </a>
          </Button>
          <div className="flex justify-center space-x-6 pt-3">
            <a
              href="mailto:akhil.pamarthy@outlook.com"
              aria-label="Email"
              className="hover:scale-110 transform transition"
            >
              <Mail className="w-6 h-6 text-gray-700 hover:text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-pamarthy-16b8642a8/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transform transition"
            >
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-black" />
            </a>
            <a
              href="https://github.com/Akhil27P"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:scale-110 transform transition"
            >
              <Github className="w-6 h-6 text-gray-700 hover:text-black" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

// Helper Components for Experience and Skills

function ExperienceBlock({ title, dateLocation, description, points }) {
  return (
    <div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="italic text-sm text-gray-600 mb-2">{dateLocation}</p>
      <p className="mb-2">{description}</p>
      <ul className="list-disc list-inside space-y-1">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillProgress({ label, percent }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between font-semibold mb-1">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-black h-4 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
