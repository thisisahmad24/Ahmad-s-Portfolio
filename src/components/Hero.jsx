import React, { useEffect, useRef, useState } from "react";
import { 
  FaLinkedin, 
  FaGithub, 
  FaArrowDown, 
  FaCode, 
  FaPalette, 
  FaServer, 
  FaLaptopCode 
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
  SiFigma 
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const stickerContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const floatingTechIcons = [
    { icon: <SiReact className="text-red-500 dark:text-red-400" />, size: "w-10 h-10", delay: 0 },
    { icon: <SiJavascript className="text-yellow-400" />, size: "w-10 h-10", delay: 0.3 },
    { icon: <SiNodedotjs className="text-green-500" />, size: "w-10 h-10", delay: 0.6 },
    { icon: <SiMongodb className="text-green-400" />, size: "w-10 h-10", delay: 0.9 },
    { icon: <SiPostgresql className="text-red-400" />, size: "w-10 h-10", delay: 1.2 },
    { icon: <SiTailwindcss className="text-sky-400" />, size: "w-10 h-10", delay: 1.5 },
    { icon: <SiFigma className="text-pink-400" />, size: "w-10 h-10", delay: 1.8 }
  ];

  const featureCards = [
    {
      icon: <FaCode />,
      title: "Agentic AI Systems",
      description: "Developing intelligent workflows using LLMs",
      color: "text-red-500 dark:text-red-400"
    },
    {
      icon: <FaServer />,
      title: "Backend & APIs",
      description: "Building robust logic with Python & FastAPI",
      color: "text-rose-500 dark:text-rose-400"
    },
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Web",
      description: "Creating full-stack apps using React + Tailwind",
      color: "text-red-600 dark:text-red-500"
    },
    {
      icon: <FaPalette />,
      title: "Scalable Systems",
      description: "Designing reliable & optimized data pipelines",
      color: "text-orange-500 dark:text-orange-400"
    }
  ];

  return (
    <section
      id="home"
      ref={ref}
      className={`relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-x-hidden
        bg-gradient-to-br from-slate-100 via-white to-slate-100
        dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
        transition-colors duration-300`}
    >
      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingTechIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute ${item.size} flex items-center justify-center`}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              transition: {
                duration: 8 + Math.random() * 4,
                delay: item.delay,
                repeat: Infinity
              }
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        <motion.div initial="hidden" animate={controls} variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          
          {/* Name */}
          <motion.div variants={fadeUp}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-500 dark:to-rose-400 bg-clip-text text-transparent">
                Hi, I'm Ahmad Hassan
              </span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={fadeUp}>
            <div className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200 mb-6 font-mono">
              <div className="inline-block bg-red-100/50 dark:bg-red-900/20 px-3 sm:px-4 py-2 rounded-lg border border-red-200 dark:border-red-500/30 whitespace-nowrap">
                <span className="text-red-600 dark:text-red-400 mr-2">❯</span>
                <span className="text-zinc-600 dark:text-zinc-400 hidden sm:inline">INITIALIZING: </span>
                <span className="text-zinc-600 dark:text-zinc-400 sm:hidden">AI: </span>
                <RoleSwitcher />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUp}>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Building <span className="text-red-600 dark:text-red-400">intelligent systems</span>, not just interfaces.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Designing the intelligence behind modern software.
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.04 }}
                className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-red-900/50 shadow-lg hover:shadow-red-500/10 transition-all"
              >
                <div className={`${card.color} mb-3 text-3xl`}>{card.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-rose-500 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              View My Projects <FaArrowDown className="ml-3 animate-bounce" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center border-2 border-red-500 text-red-600 dark:text-red-400 font-medium py-3 px-8 rounded-full hover:bg-red-50 dark:hover:bg-zinc-900 transition-all"
            >
              Let’s Connect
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex justify-center gap-6">
            <a
              href="https://github.com/thisisahmad24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/70 dark:bg-zinc-900/70 hover:scale-110 transition-all shadow-md hover:shadow-lg border dark:border-red-900/50"
            >
              <FaGithub className="text-2xl text-gray-800 dark:text-gray-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-hassan-ai-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/70 dark:bg-zinc-900/70 hover:scale-110 transition-all shadow-md hover:shadow-lg border dark:border-red-900/50"
            >
              <FaLinkedin className="text-2xl text-gray-800 dark:text-gray-200" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const RoleSwitcher = () => {
  const roles = ["AI Engineer", "Full-Stack Developer", "ML Specialist", "System Architect"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole];
      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles, typingSpeed]);

  return (
    <span className="text-red-600 dark:text-red-400 font-bold border-r-2 border-red-600 dark:border-red-400 pr-1 animate-pulse">
      {displayText}
    </span>
  );
};

export default Hero;
