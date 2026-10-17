import React, { useEffect, useState } from "react";
import {
  FiArrowDownRight, FiArrowUpRight, FiCheck, FiCode,
  FiDownload, FiGithub, FiGlobe, FiLayers, FiLinkedin, FiMail,
  FiMenu, FiMoon, FiSend, FiSun, FiX
} from "react-icons/fi";
import { FaBrain, FaDatabase, FaRobot, FaShieldAlt, FaTerminal } from "react-icons/fa";
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
    number: "01",
    title: "VIRQA",
    type: "AI interview platform · Final year project",
    description: "An AI-powered interview experience with real-time voice Q&A, adaptive difficulty, multi-role dashboards, and automated LLM-driven evaluation.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Groq", "Whisper"],
    icon: <FaRobot />,
    tone: "lavender",
    featured: true,
  },
  {
    number: "02",
    title: "SnapSave Pro",
    type: "Full-stack web application",
    description: "A media-downloading product with a Next.js interface, FastAPI extraction engine, database integration, and a freemium product model.",
    stack: ["Next.js 15", "FastAPI", "MongoDB"],
    icon: <FiGlobe />,
    tone: "mint",
    featured: true,
  },
  {
    number: "03",
    title: "Sentiment Analysis",
    type: "Deep learning · NLP",
    description: "A Bidirectional LSTM sentiment classifier for IMDb reviews, built with custom text preprocessing, embedding layers, and model validation.",
    stack: ["Python", "TensorFlow", "BiLSTM", "NLP"],
    icon: <FaBrain />,
    tone: "peach",
    featured: false,
  },
  {
    number: "04",
    title: "QA Automation Portfolio",
    type: "Software quality engineering",
    description: "A maintainable browser automation suite using the Page Object Model, data-driven tests, cross-browser checks, and reusable test components.",
    stack: ["Java", "Selenium", "TestNG", "POM"],
    icon: <FaShieldAlt />,
    tone: "blue",
    featured: false,
    href: "https://github.com/thisisahmad24/qa-automation-portfolio",
  },
];

const skillGroups = [
  { icon: <FiCode />, title: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"] },
  { icon: <FaBrain />, title: "AI & Machine Learning", skills: ["LLM integration", "RAG", "Prompt engineering", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "BiLSTM"] },
  { icon: <FiLayers />, title: "Web & Backend", skills: ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "Django", "REST APIs", "Socket.io", "JWT"] },
  { icon: <FaDatabase />, title: "Data & Infrastructure", skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Docker", "Git", "GitHub", "Vercel", "Render"] },
  { icon: <FaTerminal />, title: "QA & Testing", skills: ["Selenium WebDriver", "Playwright", "TestNG", "Page Object Model", "Postman", "API testing", "Test case design"] },
];

const experience = [
  { date: "JUL — AUG 2026", role: "SQA Intern", company: "DaFi Labs · Remote", detail: "Executed functional and manual testing, designed test scenarios, documented defects, and used Postman and Playwright for API and end-to-end testing." },
  { date: "NOV — DEC 2025", role: "Front End Developer Intern", company: "Apexcify Technologies · Remote", detail: "Built responsive React interfaces, implemented reusable UI components, and supported cross-browser compatibility in an agile team." },
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
    const initialDark = stored ? stored === "dark" : false;
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

  const filters = ["All", "AI / ML", "Full-stack", "QA / Testing"];
  const visibleProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "AI / ML") return ["VIRQA", "Sentiment Analysis"].includes(project.title);
    if (activeFilter === "Full-stack") return ["VIRQA", "SnapSave Pro"].includes(project.title);
    return project.title === "QA Automation Portfolio";
  });

  const closeMenu = () => setMenuOpen(false);

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
          {[["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"]].map(([label, href]) => (
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
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
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
                <div className="project-art">
                  <div className="project-art-label"><span>PROJECT / {project.number}</span><span>{project.icon}</span></div>
                  <div className="project-art-center"><span className="art-ring ring-one"></span><span className="art-ring ring-two"></span><span className="art-symbol">{project.icon}</span></div>
                  <span className="project-art-word">{project.title === "Sentiment Analysis" ? "NLP" : project.title === "QA Automation Portfolio" ? "TEST" : project.title === "SnapSave Pro" ? "BUILD" : "VIRQA"}</span>
                </div>
                <div className="project-body">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-footer">
                    <span className="project-status"><span></span> FEATURED WORK</span>
                    {project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>View repository <FiArrowUpRight /></a> : <a href={profile.github} target="_blank" rel="noreferrer" aria-label={`Explore ${project.title} and other repositories on GitHub`}>Explore work <FiArrowUpRight /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="experience-layout">
            <div className="experience-intro">
              <SectionHeading eyebrow="THE JOURNEY SO FAR" title={<>Learning by<br /><em>building and doing.</em></>} copy="Hands-on experience across software quality and frontend development, supported by a foundation in software engineering." />
              <div className="education-card"><span className="education-icon"><FiCheck /></span><div><span className="eyebrow">EDUCATION</span><h3>BS Software Engineering</h3><p>University of Central Punjab · Lahore</p><small>Oct 2022 — Jul 2026 <b>·</b> CGPA 3.26 / 4.0</small></div></div>
            </div>
            <div className="timeline">
              {experience.map((item, index) => <article className="timeline-item" key={item.role}><div className="timeline-marker"><span></span></div><div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-detail">{item.detail}</p></div><span className="timeline-number">0{index + 1}</span></article>)}
              <article className="timeline-item"><div className="timeline-marker"><span></span></div><div className="timeline-content"><span className="timeline-date">2022 — 2026</span><h3>Software Engineering</h3><p className="timeline-company">University of Central Punjab</p><p className="timeline-detail">Built a strong foundation in software design, programming, data structures, and collaborative project delivery.</p></div><span className="timeline-number">03</span></article>
            </div>
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
          <div className="contact-layout">
            <div><SectionHeading eyebrow="GET IN TOUCH" title={<>Have a good idea?<br /><em>Let’s talk.</em></>} copy="For roles, collaborations, or a conversation about building something useful, feel free to reach out." />
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <FiArrowUpRight /></a>
            </div>
            <div className="contact-card">
              <div className="contact-card-heading"><span className="contact-card-icon"><FiSend /></span><div><h3>Connect with me</h3><p>I usually respond by email or LinkedIn.</p></div></div>
              <a href={`mailto:${profile.email}`}><span><FiMail /> Email</span><FiArrowUpRight /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span><FiLinkedin /> LinkedIn</span><FiArrowUpRight /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><span><FiGithub /> GitHub</span><FiArrowUpRight /></a>
              <a href={profile.resume} target="_blank" rel="noreferrer"><span><FiDownload /> Download résumé</span><FiArrowUpRight /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="footer-brand" href="#home">A<span>.</span></a><p>Designed with care. Built with purpose.</p><span>© {new Date().getFullYear()} Ahmad Hassan</span><a className="back-to-top" href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
