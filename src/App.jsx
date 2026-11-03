import React, { useEffect, useState } from "react";
import {
  FiArrowDownRight, FiArrowUpRight, FiCheck, FiCode,
  FiDownload, FiGithub, FiGlobe, FiLayers, FiLinkedin, FiMail,
  FiMenu, FiMoon, FiSend, FiSun, FiX, FiUsers, FiImage, FiMapPin
} from "react-icons/fi";
import { FaBrain, FaDatabase, FaRobot, FaShieldAlt, FaTerminal } from "react-icons/fa";
import Headshot from "./images/Ahmad.png";

const profile = {
  name: "Ahmad Hassan",
  role: "Software Engineer · AI/ML · Full-Stack · Quality Engineering",
  email: "thisisahmad07@gmail.com",
  github: "https://github.com/thisisahmad24",
  linkedin: "https://www.linkedin.com/in/ahmad-hassan-ai-engineer",
  resume: "/AhmadHassan.Resume.pdf",
};

const projects = [
  {
    number: "01", title: "VIRQA", type: "AI interview platform · Final-year project",
    description: "An AI interview practice platform with voice-based questions, adaptive difficulty, role-specific flows, and LLM-assisted evaluation.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Groq", "Whisper"], icon: <FaRobot />, tone: "lavender",
    category: "AI / ML", thumbnail: "/project-thumbnails/virqa.svg", thumbnailAlt: "VIRQA interview workspace concept with voice interface and evaluation panel",
    featured: true,
  },
  {
    number: "02", title: "SnapSave Pro", type: "Full-stack media product",
    description: "An Instagram-focused media downloader with a Next.js frontend, FastAPI extraction service, MongoDB-backed quotas, and account features.",
    stack: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "JWT"], icon: <FiGlobe />, tone: "mint",
    category: "Full-stack", thumbnail: "/project-thumbnails/snapsave-pro.svg", thumbnailAlt: "SnapSave Pro media workspace preview with media cards and download controls",
    href: "https://github.com/thisisahmad24/snap-save-pro", featured: true,
  },
  {
    number: "03", title: "TransferIQ", type: "Machine learning · Sports analytics",
    description: "A Premier League transfer-fee estimation pipeline using historical FPL performance, player attributes, feature engineering, regression models, and a Streamlit dashboard.",
    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Pytest"], icon: <FaBrain />, tone: "blue",
    category: "AI / Data", thumbnail: "/project-thumbnails/transferiq.svg", thumbnailAlt: "TransferIQ analytics dashboard concept with estimated player value and trend chart",
    href: "https://github.com/thisisahmad24/transfer-iq", featured: true,
  },
  {
    number: "04", title: "Helmet Detection & E-Challan", type: "Computer vision · Road safety",
    description: "A YOLOv8 and OpenCV system designed to detect helmet violations, annotate evidence frames, and log potential violations for a traffic-enforcement workflow.",
    stack: ["Python", "YOLOv8", "OpenCV", "Computer Vision"], icon: <FaShieldAlt />, tone: "peach",
    category: "AI / Data", thumbnail: "/project-thumbnails/helmet-challan.svg", thumbnailAlt: "Computer vision preview showing a rider detection bounding box and violation status",
    href: "https://github.com/thisisahmad24/helmet-challan-system",
  },
  {
    number: "05", title: "Movie Review Sentiment Analyzer", type: "NLP · Web application",
    description: "A Flask application that classifies IMDb movie reviews as positive or negative with a trained BiLSTM model and lets users search and manage saved reviews.",
    stack: ["Python", "Flask", "TensorFlow", "BiLSTM", "NLP"], icon: <FaBrain />, tone: "lavender",
    category: "AI / Data", thumbnail: "/project-thumbnails/sentiment-analyzer.svg", thumbnailAlt: "Sentiment analysis dashboard concept showing a review and positive prediction confidence",
    href: "https://github.com/thisisahmad24/MovieReviews-SentimentApp-Python",
  },
  {
    number: "06", title: "Multi-Agent Workflows", type: "Local AI · Agent orchestration",
    description: "An experiment in coordinating specialized local LLM agents for task decomposition, research, coding, and review using Ollama with LangChain/LangGraph.",
    stack: ["Python", "Ollama", "LangChain", "LangGraph"], icon: <FaRobot />, tone: "mint",
    category: "AI / Data", thumbnail: "/project-thumbnails/multi-agent.svg", thumbnailAlt: "Multi-agent workflow diagram preview showing connected research, coding, review, planning, and result nodes",
    href: "https://github.com/thisisahmad24/multi-agent-workflows",
  },
  {
    number: "07", title: "Authentication REST API", type: "Backend · Application security",
    description: "A Node.js and Express authentication service with password hashing, email verification, rotating refresh tokens, password resets, account lockout, and role-based access control.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Jest", "Docker"], icon: <FaShieldAlt />, tone: "blue",
    category: "Backend / APIs", thumbnail: "/project-thumbnails/auth-service.svg", thumbnailAlt: "Authentication service console concept showing protected access, token handling, and security status",
    href: "https://github.com/thisisahmad24/auth-service",
  },
  {
    number: "08", title: "QA Automation Portfolio", type: "Quality engineering · Test frameworks",
    description: "A reusable test portfolio covering Selenium and Java, Page Object Model structure, SauceDemo and Daraz scenarios, manual test design, and maintainable test utilities.",
    stack: ["Java", "Selenium", "TestNG", "Maven", "POM"], icon: <FaTerminal />, tone: "peach",
    category: "QA / Testing", thumbnail: "/project-thumbnails/qa-automation.svg", thumbnailAlt: "QA test report preview with passing checks and a progress indicator",
    href: "https://github.com/thisisahmad24/qa-automation-portfolio",
  },
  {
    number: "09", title: "GoalGate", type: "Football highlights · Full-stack web",
    description: "A football fan platform concept featuring match highlights, live football data, responsive match-centre UI, and fan ratings backed by Supabase.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "Framer Motion"], icon: <FiGlobe />, tone: "mint",
    category: "Full-stack", thumbnail: "/project-thumbnails/goalgate.svg", thumbnailAlt: "GoalGate football match centre preview with team score, highlights, and fan rating panels",
    href: "https://github.com/thisisahmad24/GoalGate",
  },
  {
    number: "10", title: "Java GUI Phonebook", type: "University project · Desktop application",
    description: "A Java Swing contact manager with add, search, edit, delete, and list actions, input validation, and local file persistence. Contributed as team lead for GUI, integration, Git, and testing.",
    stack: ["Java", "Swing", "OOP", "File I/O", "Git"], icon: <FiCode />, tone: "lavender",
    category: "University projects", thumbnail: "/project-thumbnails/java-phonebook.svg", thumbnailAlt: "Java phonebook interface concept with contact rows and add-contact controls",
    href: "https://github.com/thisisahmad24/Java-GUI-Phonebook",
  },
];

const skillGroups = [
  { icon: <FiCode />, title: "Programming Languages", subtitle: "Core programming & data querying", skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"] },
  { icon: <FiLayers />, title: "Frontend & UI", subtitle: "Interfaces and product experience", skills: ["React", "Next.js", "HTML5", "CSS3", "Responsive design"] },
  { icon: <FaTerminal />, title: "Backend & APIs", subtitle: "Services, integration & auth", skills: ["Node.js", "Express.js", "FastAPI", "Django", "Flask", "REST APIs", "Socket.io", "JWT"] },
  { icon: <FaBrain />, title: "AI & Machine Learning", subtitle: "Models, NLP & LLM workflows", skills: ["LLM integration", "RAG", "Prompt engineering", "TensorFlow / Keras", "PyTorch", "Scikit-learn", "NLP", "BiLSTM", "LangChain / LangGraph"] },
  { icon: <FaDatabase />, title: "Databases & DevOps", subtitle: "Data persistence and delivery", skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Docker", "Git / GitHub", "Vercel", "Render"] },
  { icon: <FaShieldAlt />, title: "QA & Test Automation", subtitle: "Reliable releases through validation", skills: ["Selenium WebDriver", "Playwright", "Cypress", "TestNG", "Page Object Model", "Postman", "API testing", "Test case design"] },
  { icon: <FaTerminal />, title: "Systems & DevOps", subtitle: "Development environments and delivery", skills: ["Linux", "Ubuntu", "Bash", "CLI", "Docker", "CI/CD", "Git", "GitHub", "Vercel", "Render"] },
  { icon: <FaShieldAlt />, title: "Networking & Information Security", subtitle: "Protocols, application security and secure development", skills: ["TCP/IP", "DNS", "HTTP / HTTPS", "Ports & protocols", "Authentication", "Authorization", "Password hashing", "Web vulnerabilities"] },
  { icon: <FiLayers />, title: "Software Engineering Practice", subtitle: "Engineering across the product lifecycle", skills: ["SDLC", "STLC", "Requirements analysis", "System design", "Technical documentation", "Debugging", "Maintenance", "Agile workflows"] },
  { icon: <FiGlobe />, title: "Creative Media & Communication", subtitle: "Digital content, design and community engagement", skills: ["Content writing", "Social media strategy", "Canva", "Photoshop", "Figma", "Brand communication", "Visual storytelling"] },
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

function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  useEffect(() => {
    const stored = window.localStorage.getItem("ahmad-theme");
    const initialDark = stored ? stored === "dark" : true;
    setDark(initialDark);
    document.documentElement.dataset.theme = initialDark ? "dark" : "light";
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("ahmad-theme", next ? "dark" : "light");
  };

  const filters = ["All", "AI / Data", "Full-stack", "Backend / APIs", "QA / Testing", "University projects"];
  const visibleProjects = projects.filter((project) => activeFilter === "All" || project.category === activeFilter || (activeFilter === "AI / Data" && project.category === "AI / ML"));

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || "General Inquiry").trim();
    const message = String(formData.get("message") || "").trim();
    const body = [
      `Hi Ahmad,`,
      "",
      message,
      "",
      "---",
      `From: ${name}`,
      `Reply email: ${email}`,
      phone ? `Phone: ${phone}` : "",
    ].filter(Boolean).join("\\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="portfolio-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ahmad Hassan home">
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">Ahmad Hassan<small>Software Engineer</small></span>
        </a>
        <button className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          { [["Home", "#home"], ["About", "#about"], ["Engineering", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Beyond Code", "#beyond-code"], ["Education", "#university"]].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <FiArrowUpRight /></a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>{dark ? <FiSun /> : <FiMoon />}</button>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-orb orb-one" aria-hidden="true"></div>
          <div className="hero-orb orb-two" aria-hidden="true"></div>
          <div className="hero-grid" aria-hidden="true"></div>
          <div className="hero-content">
            <div className="availability"><span className="availability-dot"></span> OPEN TO OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I’M AHMAD HASSAN</p>
            <h1>I build <span className="serif-accent">intelligent</span><br className="desktop-break" /> digital experiences<span className="heading-dot">.</span></h1>
            <p className="hero-description">Software engineer building full-stack products, AI-powered applications, and dependable systems — from requirements and development to testing and delivery.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <FiArrowUpRight /></a>
              <a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer"><FiDownload /> Download résumé</a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
              <a href={`mailto:${profile.email}`}><FiMail /> Email <FiArrowUpRight /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-frame">
              <div className="visual-topbar"><span></span><span></span><span></span><p>ahmad / portfolio</p><FiArrowUpRight /></div>
              <div className="visual-photo-wrap">
                <div className="photo-backdrop"></div>
                <img src={Headshot} alt="Portrait of Ahmad Hassan" className="hero-photo" />
                <div className="photo-label"><span>AH</span><div><strong>Ahmad Hassan</strong><small>Engineering with purpose</small></div></div>
              </div>
              <div className="floating-note note-ai"><span className="note-icon"><FaBrain /></span><span><strong>AI / ML</strong><small>Intelligent systems</small></span></div>
              <div className="floating-note note-code"><span className="note-icon"><FiCode /></span><span><strong>Backend</strong><small>APIs & architecture</small></span></div>
            </div>
            <div className="hero-index">01 <span>—</span> BUILDING WHAT’S NEXT</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><FiArrowDownRight /></a>
        </section>

        <section className="intro-strip" aria-label="Areas of focus">
          <span>AI-POWERED PRODUCTS</span><i></i><span>BACKEND ENGINEERING</span><i></i><span>FULL-STACK DEVELOPMENT</span><i></i><span>QUALITY SOFTWARE</span>
        </section>

        <section className="section about-section" id="about">
          <div className="about-layout">
            <div className="about-side">
              <SectionHeading eyebrow="PROFILE / 01" title={<>Software engineering.<br /><em>From idea to release.</em></>} />
              <div className="about-portrait"><img src={Headshot} alt="Ahmad Hassan" loading="lazy" /><span className="portrait-caption">LAHORE, PAKISTAN <span>↗</span></span></div>
            </div>
            <div className="about-copy">
              <p className="large-copy">I build <span>software, intelligent applications, and reliable digital products.</span></p>
              <p>I’m a Software Engineering graduate from the University of Central Punjab. My work covers the complete development lifecycle: understanding requirements, analysing problems, designing solutions, building applications, testing functionality, and maintaining software.</p>
              <p>I bring together full-stack development, AI/ML engineering, software quality assurance, and practical systems knowledge. I also work across creative media and community initiatives, bringing communication and teamwork into technical projects.</p>
              <div className="about-facts">
                <div><span className="fact-number">2026</span><span className="fact-label">Software Engineering<br />graduate</span></div>
                <div><span className="fact-number">5M+</span><span className="fact-label">Digital reach<br />in the past month</span></div>
                <div><span className="fact-number">U-23</span><span className="fact-label">Competitive<br />football</span></div>
              </div>
              <a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">More about my experience <FiArrowUpRight /></a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading eyebrow="ENGINEERING CAPABILITIES / 02" title={<>Skills that turn ideas<br /><em>into working software.</em></>} copy="A practical mix of development, AI, data, and testing tools—chosen to solve the problem at hand." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top"><span className="skill-icon">{group.icon}</span><span className="skill-index">0{index + 1}</span></div>
                <h3>{group.title}</h3>
                <p className="skill-subtitle">{group.subtitle}</p>
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="skills-proof">
            <div className="skills-proof-heading"><span className="eyebrow">WHERE I ADD VALUE</span><span className="skills-proof-note">Focused on useful, maintainable outcomes</span></div>
            <div className="skills-proof-grid">
              <div><span className="proof-number">01</span><h3>Build</h3><p>APIs, full-stack applications, and reusable product interfaces.</p></div>
              <div><span className="proof-number">02</span><h3>Integrate</h3><p>LLM-powered workflows, data pipelines, and practical AI features.</p></div>
              <div><span className="proof-number">03</span><h3>Validate</h3><p>Test strategy, browser automation, and dependable API behavior.</p></div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="projects-heading-row">
            <SectionHeading eyebrow="SELECTED WORK / 03" title={<>Projects with a<br /><em>purpose behind them.</em></>} copy="A selection of AI, web, and quality-engineering work. Each project starts with a problem and ends with something useful." />
            <a className="text-link projects-all-link" href={profile.github} target="_blank" rel="noreferrer">More on GitHub <FiArrowUpRight /></a>
          </div>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {filters.map((filter) => <button className={activeFilter === filter ? "filter-active" : ""} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article className={`project-card tone-${project.tone} ${project.featured ? "project-featured" : ""}`} key={project.number}>
                <div className="project-thumbnail">
                  <img src={project.thumbnail} alt={project.thumbnailAlt} loading="lazy" />
                  <span className="project-number">PROJECT / {project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-body">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-footer">
                    <span className="project-status"><span></span> FEATURED WORK</span>
                    {project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>View on GitHub <FiArrowUpRight /></a> : <a href={profile.github} target="_blank" rel="noreferrer" aria-label={`Explore ${project.title} and other repositories on GitHub`}>Explore work <FiArrowUpRight /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </section>

        <section className="section experience-section" id="experience">
          <div className="experience-section-heading">
            <SectionHeading eyebrow="PROFESSIONAL EXPERIENCE / 04" title={<>Growing through<br /><em>work and community.</em></>} copy="A clear view of my professional roles and the leadership work I have contributed to alongside university." />
          </div>
          <div className="experience-columns">
            <div className="experience-track">
              <div className="track-heading"><span className="track-icon"><FiCode /></span><div><h3>Professional experience</h3><p>Engineering, delivery & quality</p></div><span className="track-count">03 ROLES</span></div>
              <div className="timeline">
                {professionalExperience.map((item, index) => <article className="timeline-item" key={item.role}><div className="timeline-marker"><span></span></div><div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-detail">{item.detail}</p></div><span className="timeline-number">0{index + 1}</span></article>)}
              </div>
            </div>
            <div className="experience-track community-track">
              <div className="track-heading"><span className="track-icon"><FiUsers /></span><div><h3>Leadership & community</h3><p>Media, outreach & student engagement</p></div><span className="track-count">03 ROLES</span></div>
              <div className="timeline">
                {communityExperience.map((item, index) => <article className="timeline-item" key={item.role + item.company}><div className="timeline-marker"><span></span></div><div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-detail">{item.detail}</p></div><span className="timeline-number">0{index + 1}</span></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section university-section" id="university">
          <div className="university-intro">
            <div>
              <SectionHeading eyebrow="EDUCATION / 05" title={<>My university life &<br /><em>engineering journey.</em></>} copy="The experiences behind the degree: team projects, design challenges, campus communities, and learning how to build with other people." />
            </div>
            <div className="university-education-card">
              <span className="university-mark">UCP</span>
              <div><span className="eyebrow">EDUCATION</span><h3>BS Software Engineering</h3><p>University of Central Punjab · Lahore</p><div className="education-meta"><span>Nov 2022 — Jul 2026</span><strong>CGPA 3.26 / 4.00</strong></div></div>
            </div>
          </div>
          <div className="university-highlights">
            <article><span className="highlight-index">01 / BUILD</span><h3>Projects & engineering practice</h3><p>Collaborated on software projects using GitHub, applied programming and database concepts, and explored AI/ML, web development, and test automation through practical work.</p></article>
            <article><span className="highlight-index">02 / LEAD</span><h3>Leadership & communication</h3><p>Served as class representative and took on student-society media responsibilities—building coordination, communication, and team-delivery skills.</p></article>
            <article><span className="highlight-index">03 / PARTICIPATE</span><h3>Campus life & competitions</h3><p>Participated in coding and design challenges—including poster, branding, and UI/UX activities—and represented the university in futsal tournaments.</p></article>
          </div>
        </section>

        <section className="section beyond-code-section" id="beyond-code">
          <div className="beyond-code-heading">
            <SectionHeading eyebrow="BEYOND THE BUILD / 06" title={<>Competition, creativity<br /><em>and community.</em></>} copy="Engineering is one part of what I do. Football, creative media, and student communities have shaped how I collaborate, communicate, and lead." />
          </div>
          <div className="beyond-code-grid">
            <article className="beyond-card"><span className="beyond-index">01 / SPORT</span><div className="beyond-symbol">⚽</div><h3>Football</h3><p>U-23 football player representing Real Lahore and Punjab University. Competitive football has strengthened my discipline, teamwork, and decision-making.</p></article>
            <article className="beyond-card"><span className="beyond-index">02 / CREATIVE MEDIA</span><div className="beyond-symbol">◉</div><h3>Content & Digital Media</h3><p>Content creation, social media, visual design, and content writing — reaching more than 5 million people during the past month.</p></article>
            <article className="beyond-card"><span className="beyond-index">03 / LEADERSHIP</span><div className="beyond-symbol">⌘</div><h3>Community & Leadership</h3><p>Media Director at ACM UCP Chapter, Social Media Manager at Cyber Security Society UCP, and Brand Ambassador at DataCrumbs.</p></article>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-decoration" aria-hidden="true">AH.</div>
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let’s make something<br /><em>meaningful together.</em></h2>
          <p>I’m interested in opportunities where thoughtful engineering and emerging technology can make a real difference.</p>
          <a className="button button-light" href="#contact">Start a conversation <FiArrowUpRight /></a>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-intro">
            <span className="eyebrow">REACH OUT DIRECTLY</span>
            <h2>Start a <em>conversation.</em></h2>
            <p>Whether it’s an opportunity, a project, or a thoughtful exchange, choose the channel that works best for you.</p>
          </div>
          <div className="contact-layout">
            <div className="contact-details-column">
              <div className="contact-channel-list">
                <a className="contact-channel" href={`mailto:${profile.email}`}>
                  <span className="contact-channel-icon"><FiMail /></span>
                  <span className="contact-channel-copy"><small>Email</small><strong>{profile.email}</strong></span>
                  <FiArrowUpRight className="contact-channel-arrow" />
                </a>
                <a className="contact-channel" href={profile.github} target="_blank" rel="noreferrer">
                  <span className="contact-channel-icon"><FiGithub /></span>
                  <span className="contact-channel-copy"><small>GitHub</small><strong>thisisahmad24</strong></span>
                  <FiArrowUpRight className="contact-channel-arrow" />
                </a>
                <a className="contact-channel" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <span className="contact-channel-icon"><FiLinkedin /></span>
                  <span className="contact-channel-copy"><small>LinkedIn</small><strong>Ahmad Hassan</strong></span>
                  <FiArrowUpRight className="contact-channel-arrow" />
                </a>
              </div>
              <div className="contact-location"><span className="contact-location-icon"><FiMapPin /></span><div><small>LOCATION</small><strong>Lahore, Pakistan</strong></div></div>
              <div className="availability-card">
                <span className="eyebrow">CURRENTLY AVAILABLE FOR</span>
                <ul>
                  <li><FiCheck /> Internship opportunities</li>
                  <li><FiCheck /> Freelance projects</li>
                  <li><FiCheck /> Backend & web development</li>
                  <li><FiCheck /> AI/ML collaboration</li>
                </ul>
              </div>
            </div>
            <div className="contact-form-card">
              <div className="contact-form-heading"><span className="contact-card-icon"><FiSend /></span><div><h3>Send me a message</h3><p>Share a little context and I’ll get back to you as soon as possible.</p></div></div>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="contact-form-row">
                  <label>Full name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
                  <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
                </div>
                <div className="contact-form-row">
                  <label>Phone number <span>Optional</span><input name="phone" type="tel" autoComplete="tel" placeholder="+92 ..." /></label>
                  <label>Subject<select name="subject" defaultValue="Internship Opportunity" required><option>Internship Opportunity</option><option>Freelance Project</option><option>Collaboration</option><option>Portfolio Feedback</option><option>General Inquiry</option><option>Other</option></select></label>
                </div>
                <label>Message<textarea name="message" rows="5" placeholder="Tell me a little about what you have in mind..." required /></label>
                <button className="button button-primary contact-submit" type="submit"><FiSend /> Send message <FiArrowUpRight /></button>
                <p className="contact-form-note">Your email app will open with your message ready to send. No information is stored on this website.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="footer-brand" href="#home">A<span>.</span></a><p>ENGINEER / BUILD / TEST / ITERATE</p><span>© {new Date().getFullYear()} Ahmad Hassan</span><a className="back-to-top" href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
