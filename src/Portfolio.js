import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";



export default function Portfolio() {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Akhil Pamarthy</h1>
        <p className="text-lg text-gray-600">
          AI/ML Engineer | Building scalable AI systems & automation pipelines
        </p>
        <p className="text-sm text-gray-500">San Jose, CA</p>
        <div className="flex justify-center space-x-4 pt-2">
          <a href="mailto:akhil.pamarthy@outlook.com" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/akhil-pamarthy-16b8642a8/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I build advanced AI systems and lead product-focused engineering
            efforts that drive real impact. I enjoy solving complex problems by
            combining AI, cloud, and scalable automation pipelines.
          </p>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card>
        <CardContent className="p-4 space-y-6">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>

          <div>
            <h3 className="font-semibold">
              Machine Learning Engineer Intern – Eitacies Inc
            </h3>
            <p>
              Sep 2023 – Dec 2023 · Remote
              <br />
              Supported AI research in brain imaging diagnostics by developing
              end-to-end pipelines and ML models to identify cocaine dependence
              from SPECT scans.
            </p>
            <ul className="list-disc list-inside">
              <li>
                Processed and aligned multi-modal medical imaging data using
                MONAI, nibabel, and nilearn.
              </li>
              <li>
                Improved mental health diagnosis accuracy by analyzing 5M+
                anonymized clinical records.
              </li>
              <li>
                Built scalable NLP workflows and topic modeling tools using
                spaCy, NLTK, LDA, and TF-IDF.
              </li>
              <li>
                Reduced data processing time by 40% through optimized ETL with
                PySpark and cloud resources.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">
              AI/ML Engineer – Gray Logic Technologies Pvt Ltd
            </h3>
            <p>
              Apr 2020 – Apr 2022 · Hyderabad, India
              <br />
              Led development of an AI-powered vehicle damage assessment system
              that automated insurance claims processing, reducing turnaround
              from days to minutes.
            </p>
            <ul className="list-disc list-inside">
              <li>
                Developed object detection and segmentation models with
                Detectron2 achieving >90% F1-score.
              </li>
              <li>
                Managed a large annotated dataset with VGG Image Annotator,
                integrating storage and retrieval via Azure Blob and Redis.
              </li>
              <li>
                Deployed scalable RESTful APIs on Azure App Service serving
                thousands of users.
              </li>
              <li>
                Mentored junior engineers, improving team efficiency by 20%.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">
              Procurement Analyst – Aliens Developers Pvt Ltd
            </h3>
            <p>
              May 2019 – Mar 2020 · Hyderabad, India
              <br />
              Optimized procurement workflows, reducing overstock by 15% through
              real-time vendor analytics and automated reporting.
            </p>
            <ul className="list-disc list-inside">
              <li>Managed data with PL/SQL and Oracle DB.</li>
              <li>Developed live dashboards using Power BI to track KPIs.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Python, Java, C#, SQL, PL/SQL, PySpark, Regex, Selenium, Pandas,
              NumPy
            </li>
            <li>
              PyTorch, TensorFlow, Keras, Detectron2, spaCy, NLTK, OpenCV,
              MONAI, nibabel, nilearn
            </li>
            <li>
              Azure (Blob Storage, App Service, Functions), AWS CLI, Docker,
              Google Colab
            </li>
            <li>PostgreSQL, MySQL, Oracle DB, Redis, MongoDB</li>
            <li>Matplotlib, Power BI, Jupyter Notebook, VS Code, PyCharm</li>
            <li>Linux, Windows</li>
          </ul>
        </CardContent>
      </Card>

      {/* Education & Certifications */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p>
              <strong>M.Sc. in Computer and Information Sciences</strong>
              <br />
              East Texas A&M University, Dec 2023
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
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

  
      {/* Resume Button */}
      <div className="text-center">
        <Button variant="outline">
          <a href="/resume.pdf" download>
            Download Resume (PDF)
          </a>
        </Button>
      </div>
    </div>
  );
}
