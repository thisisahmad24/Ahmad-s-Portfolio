import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const testimonials = [
  {
    name: "Muhammad Ali",
    role: "Team Lead, University Project Partner",
    text: "Ahmad consistently demonstrated a solid command of front-end design and user experience. His work on the project interface made our application far more engaging and user-friendly.",
    avatar: "👨‍💻",
  },
  {
    name: "Fatima Noor",
    role: "UI/UX Designer, Collaborator",
    text: "Working with Ahmad on UI/UX design projects was an absolute pleasure. His ability to merge aesthetic sense with functionality and his attention to design consistency stood out every time.",
    avatar: "👩🎨",
  },
  {
    name: "ACM UCP Society",
    role: "Media Department",
    text: "As Media Director, Ahmad led the content and branding side with creativity and professionalism. He maintained consistent visual standards and helped elevate our online presence.",
    avatar: "🏫",
  },
];

const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="testimonials"
      className={`relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 ${
        isDark ? "bg-zinc-950" : "bg-red-50"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Client & Collaboration Feedback
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Real feedback from collaborators, mentors, and project partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col p-6 sm:p-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDark
                  ? "bg-zinc-900 hover:bg-zinc-800"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {/* Avatar — INSIDE card, no negative translate */}
              <div className="flex justify-center mb-5">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-3xl shrink-0 ${
                    isDark ? "bg-red-900/30" : "bg-red-100"
                  }`}
                >
                  {testimonial.avatar}
                </div>
              </div>

              {/* Quote decorations relative to card, not absolute off-card */}
              <FaQuoteLeft
                className={`text-lg mb-3 ${
                  isDark ? "text-red-400/40" : "text-red-500/40"
                }`}
              />

              <p
                className={`flex-1 text-sm sm:text-base leading-relaxed mb-5 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {testimonial.text}
              </p>

              <FaQuoteRight
                className={`text-lg mb-4 self-end ${
                  isDark ? "text-red-400/40" : "text-red-500/40"
                }`}
              />

              <div
                className={`border-t pt-4 ${
                  isDark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h4
                  className={`text-base font-semibold mb-0.5 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {testimonial.name}
                </h4>
                <p
                  className={`text-sm font-medium ${
                    isDark ? "text-red-400" : "text-red-600"
                  }`}
                >
                  {testimonial.role}
                </p>
              </div>

              {/* Hover border */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  isDark ? "border-red-400/20" : "border-red-500/20"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-6xl mx-auto h-full">
          <div
            className={`hidden md:block absolute top-1/4 left-20 w-24 h-24 rounded-full blur-3xl opacity-50 ${
              isDark ? "bg-red-900" : "bg-red-200"
            }`}
          />
          <div
            className={`hidden md:block absolute bottom-1/4 right-20 w-24 h-24 rounded-full blur-3xl opacity-50 ${
              isDark ? "bg-red-900" : "bg-red-200"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
