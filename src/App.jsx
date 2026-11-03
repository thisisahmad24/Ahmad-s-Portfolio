import React, { useEffect, useState } from "react";
import {
  FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail,
  FiMenu, FiMoon, FiSun, FiX
} from "react-icons/fi";
import Headshot from "./images/Ahmad.png";

const profile = {
  name: "Ahmad Hassan",
  role: "Software Engineer",
  email: "thisisahmad07@gmail.com",
  github: "https://github.com/thisisahmad24",
  linkedin: "https://www.linkedin.com/in/ahmad-hassan-ai-engineer",
  resume: "/AhmadHassan.Resume.pdf",
};

const projects = [
  {
    title: "VIRQA", type: "AI interview platform · Final-year project",
    description: "An AI interview practice platform with voice-based questions, adaptive difficulty, role-specific flows, and LLM-assisted evaluation.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Groq", "Whisper"],
    category: "AI / ML", thumbnail: "/project-thumbnails/virqa.svg", thumbnailAlt: "VIRQA interview workspace concept with voice interface and evaluation panel",
    featured: true,
  },
  {
    title: "SnapSave Pro", type: "Full-stack media product",
    description: "An Instagram-focused media downloader with a Next.js frontend, FastAPI extraction service, MongoDB-backed quotas, and account features.",
    stack: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "JWT"],
    category: "Full-stack", thumbnail: "/project-thumbnails/snapsave-pro.svg", thumbnailAlt: "SnapSave Pro media workspace preview with media cards and download controls",
    href: "https://github.com/thisisahmad24/snap-save-pro",
  },
  {
    title: "TransferIQ", type: "Machine learning · Sports analytics",
    description: "A Premier League transfer-fee estimation pipeline using historical FPL performance, player attributes, feature engineering, regression models, and a Streamlit dashboard.",
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Pytest"],
    category: "AI / Data", thumbnail: "/project-thumbnails/transferiq.svg", thumbnailAlt: "TransferIQ analytics dashboard concept with estimated player value and trend chart",
    href: "https://github.com/thisisahmad24/transfer-iq",
  },
  {
    title: "Helmet Detection & E-Challan", type: "Computer vision · Road safety",
    description: "A YOLOv8 and OpenCV system designed to detect helmet violations, annotate evidence frames, and log potential violations for a traffic-enforcement workflow.",
    stack: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
    category: "AI / Data", thumbnail: "/project-thumbnails/helmet-challan.svg", thumbnailAlt: "Computer vision preview showing a rider detection bounding box and violation status",
    href: "https://github.com/thisisahmad24/helmet-challan-system",
  },
  {
    title: "Movie Review Sentiment Analyzer", type: "NLP · Web application",
    description: "A Flask application that classifies IMDb movie reviews as positive or negative with a trained BiLSTM model and lets users search and manage saved reviews.",
    stack: ["Python", "Flask", "TensorFlow", "BiLSTM", "NLP"],
    category: "AI / Data", thumbnail: "/project-thumbnails/sentiment-analyzer.svg", thumbnailAlt: "Sentiment analysis dashboard concept showing a review and positive prediction confidence",
    href: "https://github.com/thisisahmad24/MovieReviews-SentimentApp-Python",
  },
  {
    title: "Multi-Agent Workflows", type: "Local AI · Agent orchestration",
    description: "An experiment in coordinating specialized local LLM agents for task decomposition, research, coding, and review using Ollama with LangChain/LangGraph.",
    stack: ["Python", "Ollama", "LangChain", "LangGraph"],
    category: "AI / Data", thumbnail: "/project-thumbnails/multi-agent.svg", thumbnailAlt: "Multi-agent workflow diagram preview showing connected research, coding, review, planning, and result nodes",
    href: "https://github.com/thisisahmad24/multi-agent-workflows",
  },
  {
    title: "Authentication REST API", type: "Backend · Application security",
    description: "A Node.js and Express authentication service with password hashing, email verification, rotating refresh tokens, password resets, account lockout, and role-based access control.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Jest", "Docker"],
    category: "Backend / APIs", thumbnail: "/project-thumbnails/auth-service.svg", thumbnailAlt: "Authentication service console concept showing protected access, token handling, and security status",
    href: "https://github.com/thisisahmad24/auth-service",
  },
  {
    title: "QA Automation Portfolio", type: "Quality engineering · Test frameworks",
    description: "A reusable test portfolio covering Selenium and Java, Page Object Model structure, SauceDemo and Daraz scenarios, manual test design, and maintainable test utilities.",
    stack: ["Java", "Selenium", "TestNG", "Maven", "POM"],
    category: "QA / Testing", thumbnail: "/project-thumbnails/qa-automation.svg", thumbnailAlt: "QA test report preview with passing checks and a progress indicator",
    href: "https://github.com/thisisahmad24/qa-automation-portfolio",
  },
  {
    title: "GoalGate", type: "Football highlights · Full-stack web",
    description: "A football fan platform concept featuring match highlights, live football data, responsive match-centre UI, and fan ratings backed by Supabase.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "Framer Motion"],
    category: "Full-stack", thumbnail: "/project-thumbnails/goalgate.svg", thumbnailAlt: "GoalGate football match centre preview with team score, highlights, and fan rating panels",
    href: "https://github.com/thisisahmad24/GoalGate",
  },
  {
    title: "Java GUI Phonebook", type: "University project · Desktop application",
    description: "A Java Swing contact manager with add, search, edit, delete, and list actions, input validation, and local file persistence. Contributed as team lead for GUI, integration, Git, and testing.",
    stack: ["Java", "Swing", "OOP", "File I/O", "Git"],
    category: "University projects", thumbnail: "/project-thumbnails/java-phonebook.svg", thumbnailAlt: "Java phonebook interface concept with contact rows and add-contact controls",
    href: "https://github.com/thisisahmad24/Java-GUI-Phonebook",
  },
];

const skillGroups = [
  { title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"] },
  { title: "Frontend", skills: ["React", "Next.js", "HTML5", "CSS3", "Responsive design"] },
  { title: "Backend & APIs", skills: ["Node.js", "Express.js", "FastAPI", "Django", "Flask", "REST APIs", "Socket.io", "JWT"] },
  { title: "AI & Machine Learning", skills: ["LLM integration", "RAG", "Prompt engineering", "TensorFlow / Keras", "PyTorch", "Scikit-learn", "NLP", "BiLSTM", "LangChain / LangGraph"] },
  { title: "Data & DevOps", skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Docker", "CI/CD", "Git", "GitHub", "Vercel", "Render", "Linux", "Ubuntu", "Bash"] },
  { title: "QA & Security", skills: ["Selenium WebDriver", "Playwright", "Cypress", "TestNG", "Page Object Model", "Postman", "API testing", "Test case design", "TCP/IP", "DNS", "HTTP / HTTPS", "Authentication", "Authorization", "Password hashing", "Web vulnerabilities"] },
  { title: "Engineering & Design", skills: ["SDLC", "STLC", "Requirements analysis", "System design", "Technical documentation", "Debugging", "Maintenance", "Agile", "Canva", "Photoshop", "Figma", "Content writing", "Social media strategy", "Visual storytelling"] },
];

const professionalExperience = [
  { date: "JUL — AUG 2026", role: "SQA Intern", company: "DaFi Labs · Remote", detail: "Performed functional and manual testing, designed test scenarios, documented defects, validated APIs with Postman, and worked with Playwright for end-to-end automation." },
  { date: "APR — MAY 2026", role: "Backend Engineering Intern", company: "Digitech Offerings · Remote", detail: "Worked on backend engineering tasks, server-side application logic, and API-focused development workflows." },
  { date: "NOV — DEC 2025", role: "Frontend Developer Intern", company: "Apexcify Technologies · Remote", detail: "Built responsive React interfaces, implemented reusable UI components, and supported cross-browser compatibility in a collaborative development workflow." },
];

const communityExperience = [
  { date: "JUN 2025 — MAR 2026", role: "Social Media Manager", company: "Cyber Security Society · UCP", detail: "Managed the society’s social media presence and supported communication around its activities and community initiatives." },
  { date: "NOV — DEC 2025", role: "Brand Ambassador", company: "DataCrumbs · Hybrid", detail: "Represented DataCrumbs in a student-facing ambassador role, helping build awareness of the brand and its learning community." },
  { date: "APR — JUN 2025", role: "Media Director", company: "ACM UCP Chapter", detail: "Led media and design work for the chapter’s digital presence, event branding, promotional campaigns, and event photography/videography. Coordinated creative output across platforms using Canva, Photoshop, and Figma." },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const stored = window.localStorage.getItem("ahmad-theme");
    const initialDark = stored ? stored === "dark" : true;
    setDark(initialDark);
    document.documentElement.dataset.theme = initialDark ? "dark" : "light";
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("ahmad-theme", next ? "dark" : "light");
  };

  const filters = ["All", "AI / Data", "Full-stack", "Backend / APIs", "QA / Testing", "University projects"];
  const visibleProjects = projects.filter((project) =>
    activeFilter === "All" || project.category === activeFilter ||
    (activeFilter === "AI / Data" && project.category === "AI / ML")
  );
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ahmad Hassan home">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">Ahmad Hassan</span>
        </a>
        <button className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {[["Projects", "#projects"], ["Experience", "#experience"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>{dark ? <FiSun /> : <FiMoon />}</button>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="hero-kicker">SOFTWARE ENGINEER</p>
            <h1>Ahmad Hassan<span className="heading-dot">.</span></h1>
            <p className="hero-description">AI/ML · Full-stack development · Quality engineering</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <FiArrowUpRight /></a>
              <a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer"><FiDownload /> Résumé</a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
              <a href={`mailto:${profile.email}`}><FiMail /> Email <FiArrowUpRight /></a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={Headshot} alt="Ahmad Hassan" />
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-top">
            <h2>Projects</h2>
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a>
          </div>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {filters.map((filter) => <button className={activeFilter === filter ? "filter-active" : ""} key={filter} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <a className="project-thumbnail" href={project.href || profile.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <img src={project.thumbnail} alt={project.thumbnailAlt} loading="lazy" />
                </a>
                <div className="project-body">
                  <div className="project-title-row"><h3>{project.title}</h3><span>{project.category}</span></div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <a className="project-link" href={project.href || profile.github} target="_blank" rel="noreferrer">View project <FiArrowUpRight /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <h2>Experience</h2>
          <div className="experience-columns">
            <div className="experience-track">
              <h3>Work</h3>
              {professionalExperience.map((item) => (
                <article className="timeline-item" key={item.role}>
                  <span className="timeline-date">{item.date}</span>
                  <h4>{item.role}</h4>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </article>
              ))}
            </div>
            <div className="experience-track">
              <h3>Community</h3>
              {communityExperience.map((item) => (
                <article className="timeline-item" key={item.role + item.company}>
                  <span className="timeline-date">{item.date}</span>
                  <h4>{item.role}</h4>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <h2>About</h2>
          <div className="about-layout">
            <div className="about-copy">
              <p className="large-copy">Software Engineering graduate from the University of Central Punjab.</p>
              <p>I work across full-stack development, AI/ML, and software quality. I take products from requirements and design through implementation, testing, and delivery.</p>
              <div className="education-card">
                <strong>BS Software Engineering</strong>
                <span>University of Central Punjab · Lahore</span>
                <span>2022 — 2026 · CGPA 3.26 / 4.00</span>
              </div>
            </div>
            <div className="about-portrait"><img src={Headshot} alt="Ahmad Hassan" loading="lazy" /></div>
          </div>

          <h3 className="subsection-title">Skills</h3>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>

          <h3 className="subsection-title">Outside work</h3>
          <div className="outside-list">
            <article><h4>Football</h4><p>U-23 player representing Real Lahore and Punjab University.</p></article>
            <article><h4>Content & media</h4><p>Content creation and digital media, with 5M+ reach in the past month.</p></article>
            <article><h4>Community</h4><p>Media Director, ACM UCP Chapter · Social Media Manager, Cyber Security Society UCP · Brand Ambassador, DataCrumbs.</p></article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <h2>Contact</h2>
            <p className="contact-intro">Have an opportunity or project? Get in touch.</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><FiMail /> {profile.email} <FiArrowUpRight /></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">A<span>.</span></a>
        <span>© {new Date().getFullYear()} Ahmad Hassan</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
