import React, { useEffect, useState, useMemo } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaArrowDown,
  FaCode,
  FaPalette,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

/* ------------------------------------------------------------------
   Stable floating-icon positions — computed ONCE, not on every render
   (avoids hydration mismatch & layout thrash from Math.random in JSX)
------------------------------------------------------------------ */
const ICON_CONFIGS = [
  { left: "8%",  top: "12%", duration: 9,  delay: 0 },
  { left: "22%", top: "72%", duration: 11, delay: 0.4 },
  { left: "38%", top: "18%", duration: 10, delay: 0.8 },
  { left: "55%", top: "80%", duration: 8,  delay: 1.2 },
  { left: "68%", top: "10%", duration: 12, delay: 1.6 },
  { left: "80%", top: "60%", duration: 9,  delay: 2.0 },
  { left: "90%", top: "30%", duration: 11, delay: 0.2 },
];

const ICON_NODES = [
  <SiReact      className="text-red-500 dark:text-red-400"  />,
  <SiJavascript className="text-yellow-400"                  />,
  <SiNodedotjs  className="text-green-500"                   />,
  <SiMongodb    className="text-green-400"                   />,
  <SiPostgresql className="text-red-400"                     />,
  <SiTailwindcss className="text-sky-400"                    />,
  <SiFigma      className="text-pink-400"                    />,
];

const featureCards = [
  {
    icon: <FaCode />,
    title: "Agentic AI Systems",
    description: "Developing intelligent workflows using LLMs",
    color: "text-red-500 dark:text-red-400",
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    description: "Building robust logic with Python & FastAPI",
    color: "text-rose-500 dark:text-rose-400",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Web",
    description: "Creating full-stack apps using React + Tailwind",
    color: "text-red-600 dark:text-red-500",
  },
  {
    icon: <FaPalette />,
    title: "Scalable Systems",
    description: "Designing reliable & optimized data pipelines",
    color: "text-orange-500 dark:text-orange-400",
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ================================================================== */

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-slate-100 via-white to-slate-100
        dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
        transition-colors duration-300"
    >
      {/* ── Floating background icons (absolutely positioned, pointer-events-none) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {ICON_CONFIGS.map((cfg, i) => (
          <motion.div
            key={i}
            className="absolute w-9 h-9 flex items-center justify-center text-2xl opacity-30"
            style={{ left: cfg.left, top: cfg.top }}
            animate={{
              y: [0, -36, 0],
              opacity: [0.2, 0.55, 0.2],
            }}
            transition={{
              duration: cfg.duration,
              delay: cfg.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {ICON_NODES[i]}
          </motion.div>
        ))}
      </div>

      {/* ── Decorative glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600/10 dark:bg-red-800/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-600/10 dark:bg-rose-900/15 rounded-full blur-3xl" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-500/40
              text-red-700 dark:text-red-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Open to Work
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-5 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-500
                dark:from-red-400 dark:via-rose-400 dark:to-orange-400
                bg-clip-text text-transparent">
                Ahmad Hassan
              </span>
            </h1>
          </motion.div>

          {/* Typing role switcher */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="inline-flex items-center gap-2 max-w-full
              bg-zinc-100 dark:bg-zinc-900/80
              px-4 sm:px-5 py-2.5 rounded-lg
              border border-zinc-300 dark:border-red-900/50
              font-mono text-sm sm:text-base">
              <span className="text-red-600 dark:text-red-400 shrink-0">❯</span>
              <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline shrink-0">INITIALIZING:&nbsp;</span>
              <span className="text-zinc-500 dark:text-zinc-400 sm:hidden shrink-0">AI:&nbsp;</span>
              <RoleSwitcher />
            </div>
          </motion.div>

          {/* Taglines */}
          <motion.div variants={fadeUp} className="mb-10">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 leading-relaxed max-w-2xl mx-auto">
              Building{" "}
              <span className="text-red-600 dark:text-red-400">intelligent systems</span>
              , not just interfaces.
            </p>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Designing the intelligence behind modern software.
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10"
          >
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-xl p-4 sm:p-5
                  border border-gray-200/60 dark:border-red-900/40
                  shadow-sm hover:shadow-red-500/10 hover:shadow-lg transition-all"
              >
                <div className={`${card.color} mb-2 text-2xl sm:text-3xl`}>{card.icon}</div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white mb-1 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-snug">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center
                bg-gradient-to-r from-red-600 to-rose-500
                text-white font-semibold py-3 px-8 rounded-full
                shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all"
            >
              View My Projects <FaArrowDown className="ml-3 animate-bounce" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center
                border-2 border-red-500 text-red-600 dark:text-red-400
                font-semibold py-3 px-8 rounded-full
                hover:bg-red-50 dark:hover:bg-zinc-900 transition-all"
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeUp} className="flex justify-center gap-4">
            <a
              href="https://github.com/thisisahmad24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white/80 dark:bg-zinc-900/80
                hover:scale-110 transition-transform shadow-md
                border border-gray-200 dark:border-red-900/40"
            >
              <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-hassan-ai-engineer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-white/80 dark:bg-zinc-900/80
                hover:scale-110 transition-transform shadow-md
                border border-gray-200 dark:border-red-900/40"
            >
              <FaLinkedin className="text-2xl text-gray-800 dark:text-gray-200" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-red-500/40 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-red-500/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

/* ── Typing Role Switcher ── */
const ROLE_OPTIONS = ["AI Engineer", "Full-Stack Developer", "ML Specialist", "System Architect"];

const RoleSwitcher = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = ROLE_OPTIONS[currentRole];
    const timer = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % ROLE_OPTIONS.length);
      }

      setTypingSpeed(isDeleting ? 60 : 150);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, typingSpeed]);

  return (
    <span className="text-red-600 dark:text-red-400 font-bold border-r-2 border-red-500 pr-0.5">
      {displayText}
    </span>
  );
};

export default Hero;
