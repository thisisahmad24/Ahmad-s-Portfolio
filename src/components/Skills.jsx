import React, { useRef, useEffect } from "react";
import {
  FaReact, FaNodeJs, FaGithub, FaLinux, FaDatabase, FaFigma,
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiFirebase,
  SiPython, SiCanva,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsTerminal, BsShieldLock } from "react-icons/bs";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useTheme } from "../context/ThemeContext";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Skills = () => {
  const { isDark } = useTheme();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  const skills = [
    { name: "Python", icon: <SiPython className="text-blue-600 dark:text-blue-400" size={28} /> },
    { name: "TensorFlow & PyTorch", icon: <GiArtificialIntelligence className="text-orange-500 dark:text-orange-400" size={28} /> },
    { name: "scikit-learn & Pandas", icon: <FaDatabase className="text-blue-400 dark:text-blue-300" size={28} /> },
    { name: "React.js & TypeScript", icon: <FaReact className="text-blue-500 dark:text-blue-400" size={28} /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 dark:text-yellow-500" size={28} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 dark:text-sky-300" size={28} /> },
    { name: "Node.js & Express.js", icon: <FaNodeJs className="text-green-600 dark:text-green-500" size={28} /> },
    { name: "FastAPI", icon: <SiPython className="text-teal-500 dark:text-teal-400" size={28} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 dark:text-green-400" size={28} /> },
    { name: "MySQL & SQL Server", icon: <FaDatabase className="text-blue-600 dark:text-blue-400" size={28} /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-300" size={28} /> },
    { name: "Vercel & Netlify", icon: <BsTerminal className="text-gray-900 dark:text-gray-100" size={28} /> },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className={`w-full py-20 px-4 sm:px-6 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-gray-50 to-blue-50"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className={isDark ? "text-white" : "text-gray-800"}>
              Technical{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
            variants={itemVariants}
          >
            Tools and technologies I use to design, build, and deploy modern
            web and AI-powered applications.
          </motion.p>
        </motion.div>

        {/* Desktop Swiper */}
        <motion.div
          className="hidden md:block"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor
            centeredSlides
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper pb-16"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="!w-[200px] !h-[200px]">
                <motion.div
                  className={`w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border ${
                    isDark
                      ? "bg-gray-800 border-gray-700 hover:border-blue-400"
                      : "bg-white border-gray-200 hover:border-blue-500"
                  }`}
                  whileHover={{ y: -10, scale: 1.05 }}
                  variants={itemVariants}
                >
                  <div className="mb-4">{skill.icon}</div>
                  <p
                    className={`text-lg font-semibold text-center ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Mobile Swiper */}
        <motion.div
          className="md:hidden"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper pb-10"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="!h-[120px]">
                <motion.div
                  className={`w-full h-full rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border ${
                    isDark
                      ? "bg-gray-800 border-gray-700 hover:border-blue-400"
                      : "bg-white border-gray-200 hover:border-blue-500"
                  }`}
                  whileHover={{ y: -5 }}
                  variants={itemVariants}
                >
                  <div className="mb-2">{skill.icon}</div>
                  <p
                    className={`text-sm font-medium text-center ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className={`absolute -left-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
              isDark ? "bg-blue-900" : "bg-blue-200"
            }`}
          />
          <div
            className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
              isDark ? "bg-purple-900" : "bg-purple-200"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
