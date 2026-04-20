import React, { useState } from "react";
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane, FaTwitter 
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// 🌐 Updated professional social links
const SOCIAL_LINKS = [
  { icon: <FaEnvelope />, href: "mailto:thisisahmad07@gmail.com", label: "Email" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ahmad-hassan-ai-engineer", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/thisisahmad24", label: "GitHub" },
  { icon: <FaWhatsapp />, href: "https://wa.me/923114512268", label: "WhatsApp" },
  { icon: <FaTwitter />, href: "https://twitter.com/ahmadh07", label: "Twitter" }
];

const ContactFooter = ({ copyrightName = "Ahmad Hassan" }) => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mvgronjn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setError("Failed to send. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`relative py-24 px-6 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.h2 
              className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
              whileHover={{ scale: 1.02 }}
            >
              Let’s Build Something Great Together
              <FaPaperPlane className={`inline-block ml-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'} animate-float`} />
            </motion.h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              I’m open to freelance projects, collaborations, or full-time opportunities. Drop a message and let’s make your idea a reality.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center p-4 mb-6 rounded-lg ${isDark ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-600'}`}
            >
              {error}
            </motion.div>
          )}

          {/* Contact Form */}
          <AnimatePresence mode='wait'>
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`text-center p-8 rounded-2xl max-w-lg mx-auto ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
              >
                <div className={`text-2xl mb-2 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  ✨ Message Sent!
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  Thanks for reaching out! I’ll reply within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className={`underline ${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {['name', 'email'].map((field) => (
                    <div className="relative" key={field}>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                        required
                        className={`w-full p-4 rounded-xl peer focus:ring-0 border ${
                          isDark 
                            ? 'bg-gray-800 border-gray-700 focus:border-indigo-400' 
                            : 'bg-white border-gray-200 focus:border-indigo-600'
                        } transition-all`}
                      />
                      <label className={`absolute left-4 transition-all pointer-events-none ${
                        formData[field] 
                          ? 'top-1 text-sm opacity-70' 
                          : 'top-1/2 -translate-y-1/2 peer-focus:top-1 peer-focus:text-sm'
                      } ${
                        isDark 
                          ? 'text-gray-400 peer-focus:text-indigo-400' 
                          : 'text-gray-500 peer-focus:text-indigo-600'
                      }`}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="relative mb-8">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="5"
                    className={`w-full p-4 rounded-xl peer focus:ring-0 border ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 focus:border-indigo-400' 
                        : 'bg-white border-gray-200 focus:border-indigo-600'
                    } transition-all`}
                  />
                  <label className={`absolute left-4 top-4 transition-all pointer-events-none ${
                    formData.message 
                      ? 'text-sm opacity-70' 
                      : 'peer-focus:text-sm'
                  } ${
                    isDark 
                      ? 'text-gray-400 peer-focus:text-indigo-400' 
                      : 'text-gray-500 peer-focus:text-indigo-600'
                  }`}>
                    Your Message
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 ${
                    isDark 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  } transition-all ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      <FaPaperPlane className="transform transition-transform group-hover:-translate-y-0.5" /> 
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer Socials */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ delay: 0.4 }}
          className={`pt-12 ${isDark ? 'border-t border-gray-800' : 'border-t border-gray-200'}`}
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="grid grid-cols-5 gap-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl p-3 rounded-full transition-all ${
                    isDark 
                      ? 'text-gray-400 hover:text-indigo-400 hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'
                  }`}
                  aria-label={link.label}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            <div className={`text-center space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="text-sm">
                © {new Date().getFullYear()} {copyrightName}. All rights reserved.
              </p>
              <p className="text-sm">
                Crafted with <span className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>React</span> 
                & <span className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Tailwind CSS</span>
              </p>
            </div>
          </div>
        </motion.footer>
      </div>

      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full">
          <div className={`hidden md:block absolute top-1/4 left-20 w-24 h-24 rounded-full blur-3xl opacity-30 ${isDark ? 'bg-indigo-900' : 'bg-indigo-200'}`} />
          <div className={`hidden md:block absolute bottom-1/4 right-20 w-24 h-24 rounded-full blur-3xl opacity-30 ${isDark ? 'bg-indigo-900' : 'bg-indigo-200'}`} />
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
