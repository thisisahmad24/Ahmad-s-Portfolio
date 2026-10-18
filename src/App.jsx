import React, { useEffect, useState } from "react";
import {
  FiArrowDownRight, FiArrowUpRight, FiCheck, FiCode,
  FiDownload, FiGithub, FiGlobe, FiLayers, FiLinkedin, FiMail,
  FiMenu, FiMoon, FiSend, FiSun, FiX, FiPlay, FiZap, FiUsers, FiImage, FiMapPin
} from "react-icons/fi";
import { FaBrain, FaBug, FaDatabase, FaRobot, FaShieldAlt, FaTerminal } from "react-icons/fa";
import Headshot from "./images/Ahmad.png";

const profile = {
  name: "Ahmad Hassan",
  role: "Software Engineer · Backend Developer · AI/ML",
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
  { icon: <FaBrain />, title: "AI & Machine Learning", subtitle: "Models, NLP & LLM workflows", skills: ["LLM integration", "RAG concepts", "Prompt engineering", "TensorFlow / Keras", "PyTorch", "Scikit-learn", "NLP", "BiLSTM", "LangChain / LangGraph"] },
  { icon: <FaDatabase />, title: "Databases & DevOps", subtitle: "Data persistence and delivery", skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Docker", "Git / GitHub", "Vercel", "Render"] },
  { icon: <FaShieldAlt />, title: "QA & Test Automation", subtitle: "Reliable releases through validation", skills: ["Selenium WebDriver", "Playwright", "Cypress", "TestNG", "Page Object Model", "Postman", "API testing", "Test case design"] },
  { icon: <FiGlobe />, title: "Design & Collaboration", subtitle: "Communication, teamwork & visual craft", skills: ["Figma", "Canva", "Photoshop", "Git workflows", "Agile collaboration", "Technical documentation"] },
];

const professionalExperience = [
  { date: "JUL — AUG 2026", role: "SQA Intern", company: "DaFi Labs · Remote", detail: "Worked on functional and manual testing, test-scenario design, defect documentation, API checks with Postman, and end-to-end automation with Playwright." },
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
  const [gameActive, setGameActive] = useState(false);
  const [gameTime, setGameTime] = useState(15);
  const [gameScore, setGameScore] = useState(0);
  const [bugPosition, setBugPosition] = useState({ x: 48, y: 45 });

  useEffect(() => {
    const stored = window.localStorage.getItem("ahmad-theme");
    const initialDark = stored ? stored === "dark" : false;
    setDark(initialDark);
    document.documentElement.dataset.theme = initialDark ? "dark" : "light";
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!gameActive) return undefined;
    const timer = window.setInterval(() => {
      setGameTime((remaining) => {
        if (remaining <= 1) {
          window.clearInterval(timer);
          setGameActive(false);
          return 0;
        }
        return remaining - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [gameActive]);

  const startGame = () => {
    setGameScore(0);
    setGameTime(15);
    setBugPosition({ x: 48, y: 45 });
    setGameActive(true);
  };

  const catchBug = () => {
    if (!gameActive) return;
    setGameScore((score) => score + 1);
    setBugPosition({ x: 8 + Math.random() * 82, y: 12 + Math.random() * 72 });
  };

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
          {[["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["GitHub", "#activity"], ["Play", "#playground"], ["Experience", "#experience"], ["Education", "#university"]].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <FiArrowUpRight /></a>
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
            <p className="hero-description">Software engineer working across AI/ML, backend systems, and full-stack products. I turn complex ideas into useful, reliable software.</p>
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
              <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Engineer by craft.<br /><em>Curious by nature.</em></>} />
              <div className="about-portrait"><img src={Headshot} alt="Ahmad Hassan" loading="lazy" /><span className="portrait-caption">LAHORE, PAKISTAN <span>↗</span></span></div>
            </div>
            <div className="about-copy">
              <p className="large-copy">I’m a software engineering graduate who enjoys building technology that is both <span>thoughtful and practical.</span></p>
              <p>My work spans AI-powered applications, backend APIs, web development, and software quality assurance. I enjoy taking a problem from its first sketch to a working product—with careful engineering behind the scenes.</p>
              <p>Whether I’m integrating an LLM into a voice-driven workflow or designing a reliable API, I care about maintainability, clear user experiences, and the details that make software dependable.</p>
              <div className="about-facts">
                <div><span className="fact-number">2026</span><span className="fact-label">Software Engineering<br />graduate</span></div>
                <div><span className="fact-number">AI +</span><span className="fact-label">Full-stack product<br />development</span></div>
                <div><span className="fact-number">QA</span><span className="fact-label">Quality-first<br />engineering</span></div>
              </div>
              <a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">More about my experience <FiArrowUpRight /></a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Skills that turn ideas<br /><em>into working software.</em></>} copy="A practical mix of development, AI, data, and testing tools—chosen to solve the problem at hand." />
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

        <section className="section activity-section" id="activity">
          <div className="activity-heading">
            <SectionHeading eyebrow="OPEN SOURCE & CONSISTENCY" title={<>A little more than<br /><em>lines of code.</em></>} copy="Explore my public work and contribution activity on GitHub. The heatmap is served from my GitHub username and may take a moment to load." />
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Open GitHub profile <FiArrowUpRight /></a>
          </div>
          <div className="contribution-card">
            <div className="contribution-card-top"><div><span className="contribution-dot"></span><strong>Contribution activity</strong></div><span className="contribution-handle">@thisisahmad24</span></div>
            <div className="contribution-image-wrap"><img src="https://ghchart.rshah.org/7164c5/thisisahmad24" alt="GitHub contribution heatmap for thisisahmad24" loading="lazy" /></div>
            <div className="contribution-card-bottom"><span>Less <i className="heat heat-0"></i><i className="heat heat-1"></i><i className="heat heat-2"></i><i className="heat heat-3"></i><i className="heat heat-4"></i> More</span><a href="https://github.com/thisisahmad24" target="_blank" rel="noreferrer">View contribution details <FiArrowUpRight /></a></div>
          </div>
          <p className="activity-footnote">Contribution data is provided by a third-party chart service. If the image is unavailable, use the GitHub profile link above.</p>
        </section>

        <section className="section playground-section" id="playground">
          <div className="playground-intro">
            <span className="eyebrow">A TINY INTERACTIVE DETOUR</span>
            <h2>Can you <em>catch the bug?</em></h2>
            <p>A 15-second mini challenge. Start the sprint and click the moving bug as many times as you can before the timer runs out.</p>
            <div className="game-stats">
              <div><span className="game-stat-label">SCORE</span><strong>{gameScore.toString().padStart(2, "0")}</strong></div>
              <div><span className="game-stat-label">TIME LEFT</span><strong>{gameTime}<small>s</small></strong></div>
              <div><span className="game-stat-label">STATUS</span><strong className="game-status">{gameActive ? "RUNNING" : gameTime === 0 ? "FINISHED" : "READY"}</strong></div>
            </div>
            <button className="button button-primary game-start" onClick={startGame}><FiPlay /> {gameActive ? "Restart sprint" : gameTime === 0 ? "Play again" : "Start sprint"}</button>
          </div>
          <div className="game-board" aria-label="Catch the bug game area">
            <div className="game-board-top"><span><FiZap /> DEBUG SPRINT / 001</span><span>{gameActive ? "CLICK TO CATCH" : "READY WHEN YOU ARE"}</span></div>
            <div className={"game-arena " + (gameActive ? "arena-active" : "")}>
              <div className="arena-grid" aria-hidden="true"></div>
              {gameActive ? <button className="game-bug" style={{ left: bugPosition.x + "%", top: bugPosition.y + "%" }} onClick={catchBug} aria-label="Catch the bug"><FaBug /></button> : <div className="game-start-prompt"><span className="prompt-icon"><FiCode /></span><strong>{gameTime === 0 ? "Sprint complete: " + gameScore + " bugs caught" : "Ready to debug?"}</strong><small>{gameTime === 0 ? "Run it back and beat your score." : "Start the timer to begin."}</small></div>}
              <span className="arena-corner corner-tl"></span><span className="arena-corner corner-br"></span>
            </div>
            <div className="game-board-bottom"><span>STATUS: {gameActive ? "BUG DETECTED" : "SYSTEM IDLE"}</span><span>HAVE FUN. SHIP CLEAN CODE.</span></div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="projects-heading-row">
            <SectionHeading eyebrow="SELECTED WORK" title={<>Projects with a<br /><em>purpose behind them.</em></>} copy="A selection of AI, web, and quality-engineering work. Each project starts with a problem and ends with something useful." />
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
            <SectionHeading eyebrow="EXPERIENCE & LEADERSHIP" title={<>Growing through<br /><em>work and community.</em></>} copy="A clear view of my professional roles and the leadership work I have contributed to alongside university." />
          </div>
          <div className="experience-columns">
            <div className="experience-track">
              <div className="track-heading"><span className="track-icon"><FiCode /></span><div><h3>Professional experience</h3><p>Engineering, delivery & quality</p></div><span className="track-count">02 ROLES</span></div>
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
              <SectionHeading eyebrow="BEYOND THE CLASSROOM" title={<>My university life &<br /><em>engineering journey.</em></>} copy="The experiences behind the degree: team projects, design challenges, campus communities, and learning how to build with other people." />
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
          <div className="university-gallery-heading"><div><span className="eyebrow">MEMORIES & MILESTONES</span><h3>A space for the moments that shaped the journey.</h3></div><p>Photo slots are ready for campus, team, event, and project pictures.</p></div>
          <div className="university-gallery">
            <article className="university-photo-slot slot-campus"><div className="photo-slot-art"><span className="slot-orbit"></span><span className="slot-icon"><FiImage /></span></div><div className="photo-slot-caption"><span>PHOTO SLOT 01</span><strong>Campus & university life</strong><small>Add a campus or class photo</small></div></article>
            <article className="university-photo-slot slot-team"><div className="photo-slot-art"><span className="slot-orbit"></span><span className="slot-icon"><FiUsers /></span></div><div className="photo-slot-caption"><span>PHOTO SLOT 02</span><strong>Teams, societies & events</strong><small>Add ACM, society, or event photos</small></div></article>
            <article className="university-photo-slot slot-project"><div className="photo-slot-art"><span className="slot-orbit"></span><span className="slot-icon"><FiLayers /></span></div><div className="photo-slot-caption"><span>PHOTO SLOT 03</span><strong>Projects & prototypes</strong><small>Add screenshots or demo-day photos</small></div></article>
          </div>
          <p className="university-gallery-note">These are intentional placeholders—not stock photos—so your own real university memories can be added without misrepresenting your experience.</p>
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

      <footer className="site-footer"><a className="footer-brand" href="#home">A<span>.</span></a><p>Designed with care. Built with purpose.</p><span>© {new Date().getFullYear()} Ahmad Hassan</span><a className="back-to-top" href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
