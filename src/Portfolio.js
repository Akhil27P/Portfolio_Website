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
          AI/ML Engineer | Specializing in Cloud-Native AI & Deep Learning Systems
        </p>
        <p className="text-sm text-gray-500">San Jose, CA</p>
        <div className="flex justify-center space-x-4 pt-2">
          <a href="mailto:akhil.pamarthy@outlook.com" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/akhilpamarthy" target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
            I specialize in building advanced AI systems and services, with a proven
            track record of leading successful initiatives. Having managed large
            engineering and product teams, I deliver scalable business solutions
            that drive impact for thousands of users.
          </p>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>

          <div>
            <h3 className="font-semibold">Machine Learning Intern – East Texas A&M University</h3>
            <p>
              Sep 2023 – Dec 2023 · Remote<br />
              Developed an AI-powered content moderation system for real-time analysis of large-scale unstructured text data.
            </p>
            <ul className="list-disc list-inside">
              <li>Built scalable data pipelines using PySpark and AWS.</li>
              <li>Fine-tuned transformer models (BERT, GPT-4) for content analysis.</li>
              <li>Integrated real-time moderation engine for low-latency inference.</li>
              <li>Collaborated with peers to meet compliance and performance benchmarks.</li>
              <li>Improved moderation accuracy and automation efficiency.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">AI/ML Engineer – Graylogic Technologies Pvt Ltd</h3>
            <p>
              Jul 2020 – May 2022 · Hyderabad, India<br />
              Led development of an AI-driven computer vision system for vehicle damage assessment.
            </p>
            <ul className="list-disc list-inside">
              <li>Built and tuned CNN, Masked CNN, Fast R-CNN models for detection.</li>
              <li>Automated data workflows using Selenium and Pandas.</li>
              <li>Integrated backend systems using Flask, Keras, PyTorch, TensorFlow.</li>
              <li>Reduced claim processing and underwriting times significantly.</li>
              <li>Aligned AI solutions with business goals and user experience.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Procurement Engineer (Data Focus) – Aliens Group Pvt. Ltd.</h3>
            <p>
              Jun 2019 – Jul 2020 · Hyderabad, India<br />
              Built data tools and automated reporting for procurement processes.
            </p>
            <ul className="list-disc list-inside">
              <li>Automated report generation using Excel and scripting.</li>
              <li>Analyzed logistics data to improve decision-making and reliability.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Python, Java, SQL, React (academic), Swift</li>
            <li>GPT, BERT, CNNs, Detectron2, Word2Vec, OpenCV</li>
            <li>TensorFlow, PyTorch, Flask, Keras</li>
            <li>Azure, AWS, Docker, Kubernetes (learning), CI/CD</li>
            <li>PySpark, Selenium, Pandas, Git, Jupyter, Power BI</li>
          </ul>
        </CardContent>
      </Card>

      {/* Education & Certifications */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p>
              <strong>M.Sc. in Computer & Information Sciences</strong><br />
              East Texas A&M University, Dec 2023
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Docker Foundations Certificate – 2025</li>
              <li>3× Winner – IT Wizard National Coding Challenge</li>
              <li>2nd Place – FMAE Formula Kart Challenge</li>
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