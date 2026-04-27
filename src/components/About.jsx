import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaGraduationCap, FaBriefcase, FaAward, FaCertificate, FaCode } from "react-icons/fa";
import Headshot from "../images/Ahmad.png";
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const [calendarConfig, setCalendarConfig] = useState({
    blockSize: 12,
    blockMargin: 3,
    fontSize: 12,
  });

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 380) return { blockSize: 8, blockMargin: 2, fontSize: 10 };
      if (w < 640) return { blockSize: 10, blockMargin: 2, fontSize: 11 };
      if (w < 1024) return { blockSize: 11, blockMargin: 3, fontSize: 12 };
      return { blockSize: 12, blockMargin: 3, fontSize: 12 };
    };

    const onResize = () => setCalendarConfig(compute());
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const timelineItems = [
    {
      title: "Current Focus",
      content: "Building real-world AI products\nExploring LLM orchestration & multi-agent systems\nStrengthening system design + backend architecture",
      icon: <FaBriefcase />,
      delay: 0.2,
    },
    {
      title: "Education",
      content: "B.S. Software Engineering\nUniversity of Central Punjab • 8th Semester\nCGPA: 3.21",
      icon: <FaGraduationCap />,
      delay: 0.4,
    },
  ];

  const { isDark } = useTheme();

  const achievements = [
    {
      title: "Building with Artificial Intelligence",
      issuer: "Saylor Academy",
      date: "August 2025",
      icon: <FaAward />,
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "August 2025",
      icon: <FaCertificate />,
    },
    {
      title: "Core Java Programming",
      issuer: "MindLuster",
      date: "April 2025",
      icon: <FaCode />,
    }
  ];

  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-zinc-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 border-t border-gray-100 dark:border-zinc-900 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Profile Column */}
          <motion.div
            className="space-y-6 md:space-y-8 lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative group max-w-[250px] mx-auto md:max-w-none"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={Headshot}
                alt="Ahmad Hassan"
                className="w-full h-auto rounded-2xl shadow-xl transform transition-transform duration-300 border-4 border-white dark:border-zinc-900"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 to-transparent rounded-2xl mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Ahmad Hassan</h3>
              <p className="text-red-600 dark:text-red-400 font-medium text-sm md:text-base">
                AI Engineer & Full-Stack Developer
              </p>
              <motion.div className="flex justify-center md:justify-start gap-4" whileHover={{ scale: 1.05 }}>
                <a href="/AhmadHassan.Resume.pdf" download="Ahmad_Hassan_Resume.pdf" className="btn-primary text-sm md:text-base px-4 py-2">
                  View Resume
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6">
                Designing the intelligence behind modern software.
              </h2>

              <div className="prose dark:prose-invert max-w-3xl">
                <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  I design and build intelligent, production-ready systems that combine AI with real-world applications.
                  <br /><br />
                  My focus is on creating the “brain layer” of modern software — from Agentic AI workflows and LLM-powered applications to scalable backend systems — while still delivering clean, intuitive user experiences.
                  <br /><br />
                  Unlike traditional developers, I don’t just build features — I build decision-making systems.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 md:mt-12">
                  {[
                    {
                      icon: <FaLaptopCode />,
                      title: "AI & Backend",
                      items: [
                        "Agentic AI & LLMs",
                        "Python / FastAPI / Node.js",
                        "MongoDB / MySQL / SQL Server",
                        "System Architecture",
                      ],
                    },
                    {
                      icon: <FaPalette />,
                      title: "Full-Stack Web",
                      items: [
                        "React.js / TypeScript",
                        "TailwindCSS / Next.js",
                        "RESTful APIs / Express",
                        "Intuitive UI/UX Design",
                      ],
                    },
                  ].map((card, index) => (
                    <motion.div
                      key={index}
                      className="p-5 sm:p-6 md:p-8 bg-white dark:bg-zinc-900 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-zinc-800"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="text-red-600 dark:text-red-400 text-2xl md:text-3xl mb-3 md:mb-4 inline-block p-2 md:p-3 rounded-full bg-red-50 dark:bg-zinc-800"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {card.icon}
                      </motion.div>
                      <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-white">
                        {card.title}
                      </h4>
                      <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
                        {card.items.map((item, i) => (
                          <motion.li key={i} whileHover={{ x: 5 }} className="flex items-center gap-2 md:gap-3">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>


            {/* Timeline Section */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <div className="relative pl-4 md:pl-8">
                <motion.div
                  className="absolute left-0 top-0 w-0.5 h-full bg-gray-200 dark:bg-gray-700 origin-top"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                />

                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative mb-8 md:mb-12 last:mb-0 group"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: item.delay, duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-red-600 rounded-full flex items-center justify-center shadow-lg z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <div className="text-white text-xs md:text-sm">
                        {item.icon}
                      </div>
                    </motion.div>

                    <div className="space-y-2 ml-6 md:ml-10 pt-1 md:pt-2">
                      <motion.div
                        className="p-4 md:p-6 bg-white dark:bg-zinc-900 rounded-lg md:rounded-xl shadow-xs hover:shadow-md transition-shadow border border-gray-100 dark:border-zinc-800"
                        whileHover={{ x: 5 }}
                      >
                        <h4 className="text-lg md:text-xl font-semibold dark:text-white mb-2 md:mb-3">
                          {item.title}
                        </h4>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* GitHub Contributions */}
            <motion.div
              className="mt-16 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-200 dark:border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-xl font-bold dark:text-white">Neural Contributions</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">TRACKING ACTIVITY IN REAL-TIME...</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                  <span className="text-xs font-mono text-red-500">SYSTEM: ACTIVE</span>
                </div>
              </div>
              
              <div className="w-full overflow-x-auto pb-2 -mx-2 px-2">
                <div style={{ minWidth: 0 }}>
                  <GitHubCalendar 
                    username="thisisahmad24" 
                    colorScheme={isDark ? 'dark' : 'light'}
                    theme={{
                      dark: ['#18181b', '#450a0a', '#7f1d1d', '#b91c1c', '#ef4444'],
                    }}
                    fontSize={calendarConfig.fontSize}
                    blockSize={calendarConfig.blockSize}
                    blockMargin={calendarConfig.blockMargin}
                  />
                </div>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold dark:text-white mb-8">Achievements & Uplinks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 sm:p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-red-500/50 transition-all group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold dark:text-white text-sm sm:text-base truncate">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{item.issuer} • {item.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
