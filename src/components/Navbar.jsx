import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = React.memo(() => {
  const { isDark, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleNav = useCallback(() => setNavOpen(prev => !prev), []);
  const closeNav = useCallback(() => setNavOpen(false), []);

  const links = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    const throttledScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const scrollHandler = throttledScroll();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleSetActive = useCallback((to) => setActiveLink(to), []);

  const navVariants = {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
  };

  const linkHover = {
    scale: 1.1,
    color: isDark ? "#a78bfa" : "#9333EA",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  const mobileLinkVariants = {
    initial: { x: -20, opacity: 0 },
    animate: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={`fixed w-full z-50 backdrop-blur-md ${
        isDark
          ? "bg-gray-900/80 border-gray-700"
          : "bg-white/80 border-gray-200"
      } border-b ${scrolled ? "shadow-lg" : "shadow-sm"}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        
        {/* Logo / Name */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="home"
            smooth
            duration={500}
            offset={-100}
            onClick={() => {
              handleSetActive("home");
              closeNav();
            }}
            className={`text-xl md:text-2xl font-extrabold ${
              isDark ? "text-purple-400" : "text-indigo-600"
            } cursor-pointer`}
          >
            Ahmad Hassan
          </Link>
        </motion.div>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? (
              <FiSun className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
            ) : (
              <FiMoon className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
            )}
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <motion.div key={link.to} whileHover={linkHover} whileTap={{ scale: 0.95 }}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  onSetActive={() => handleSetActive(link.to)}
                  className={`relative ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } font-medium pb-1 px-1 ${
                    activeLink === link.to
                      ? isDark
                        ? "text-purple-400"
                        : "text-indigo-600"
                      : ""
                  }`}
                >
                  {link.name}
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5"
                    style={{ backgroundColor: isDark ? "#a78bfa" : "#9333EA" }}
                    initial={false}
                    animate={{ width: activeLink === link.to ? "100%" : "0%" }}
                    transition={{ duration: 0.3, type: "spring" }}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/AhmadHassanResume.pdf"
              download="Ahmad_Hassan_Resume.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: isDark
                  ? "0 0 8px rgba(167,139,250,0.5)"
                  : "0 0 8px rgba(30,64,175,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 ${
                isDark
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              } rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDark ? "focus:ring-purple-500" : "focus:ring-indigo-500"
              }`}
            >
              <FiDownload className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={toggleNav}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 rounded-full"
          >
            {navOpen ? (
              <HiOutlineX
                className={`w-5 h-5 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              />
            ) : (
              <HiOutlineMenu
                className={`w-5 h-5 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.3 },
            }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            className={`md:hidden backdrop-blur-sm overflow-hidden ${
              isDark ? "bg-gray-900/95" : "bg-white/95"
            }`}
          >
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              {links.map((link, idx) => (
                <motion.div
                  key={link.to}
                  custom={idx}
                  variants={mobileLinkVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    spy
                    onClick={() => {
                      closeNav();
                      handleSetActive(link.to);
                    }}
                    className={`block py-2 text-base font-medium ${
                      activeLink === link.to
                        ? isDark
                          ? "text-purple-400"
                          : "text-indigo-600"
                        : isDark
                        ? "text-gray-300"
                        : "text-gray-700"
                    } px-2`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Resume in Mobile Menu */}
              <motion.a
                href="/AhmadHassanResume.pdf"
                download="Ahmad_Hassan_Resume.pdf"
                custom={links.length}
                variants={mobileLinkVariants}
                initial="initial"
                animate="animate"
                className={`mt-1 flex items-center justify-center gap-2 text-base font-medium px-4 py-2 rounded-lg ${
                  isDark
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
                onClick={closeNav}
              >
                <FiDownload className="w-4 h-4" /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

export default Navbar;
