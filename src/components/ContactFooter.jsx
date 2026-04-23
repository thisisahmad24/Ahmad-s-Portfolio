import React, { useState } from "react";
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane, FaInstagram, FaArrowUp, FaMapMarkerAlt 
} from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const SOCIAL_LINKS = [
  { icon: <FaEnvelope />, href: "mailto:thisisahmad07@gmail.com", label: "Email" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ahmad-hassan-ai-engineer", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/thisisahmad24", label: "GitHub" },
  { icon: <FaWhatsapp />, href: "https://wa.me/923114512268", label: "WhatsApp" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/404.dimension/", label: "Instagram" }
];

const NAV_LINKS = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Testimonials", to: "testimonials" }
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
      const response = await fetch("https://formspree.io/f/mkokqggg", {
        method: "POST",
        headers: {
          "Accept": "application/json",
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
    <footer 
      id="contact" 
      className={`relative pt-24 pb-12 px-6 ${isDark ? 'bg-zinc-950' : 'bg-gray-50'} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Let’s Connect and <br />
              <span className="text-red-600">Create Something</span>
            </h2>
            <p className={`text-lg mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-md leading-relaxed`}>
              I’m currently available for freelance projects or full-time opportunities. 
              Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-zinc-900 group-hover:bg-red-600/20 text-red-400' : 'bg-white group-hover:bg-red-50 text-red-600 shadow-sm'}`}>
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Email Me</p>
                  <a 
                    href="mailto:thisisahmad07@gmail.com" 
                    className={`text-lg font-medium hover:text-red-500 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
                  >
                    thisisahmad07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-zinc-900 group-hover:bg-red-600/20 text-red-400' : 'bg-white group-hover:bg-red-50 text-red-600 shadow-sm'}`}>
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Location</p>
                  <p className={`text-lg font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-3xl ${isDark ? 'bg-zinc-900/50 border border-zinc-800' : 'bg-white shadow-xl border border-gray-100'}`}
          >
            <AnimatePresence mode='wait'>
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-6">✨</div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
                    Thanks for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-red-500 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Please feel free to submit your professional inquiries or questions via the form below.
                  </p>
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg">
                      {error}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase tracking-widest ml-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Name</label>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className={`w-full px-4 py-3 rounded-xl outline-none transition-all border ${
                          isDark 
                            ? 'bg-zinc-950 border-zinc-800 focus:border-red-500 text-white placeholder:text-zinc-600' 
                            : 'bg-gray-50 border-gray-200 focus:border-red-600 text-gray-900 placeholder:text-zinc-400'
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-xs font-bold uppercase tracking-widest ml-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Email</label>
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className={`w-full px-4 py-3 rounded-xl outline-none transition-all border ${
                          isDark 
                            ? 'bg-zinc-950 border-zinc-800 focus:border-red-500 text-white placeholder:text-zinc-600' 
                            : 'bg-gray-50 border-gray-200 focus:border-red-600 text-gray-900 placeholder:text-zinc-400'
                        }`}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-widest ml-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Message</label>
                    <textarea
                      placeholder="How can I help you?"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className={`w-full px-4 py-3 rounded-xl outline-none transition-all border resize-none ${
                        isDark 
                          ? 'bg-zinc-950 border-zinc-800 focus:border-red-500 text-white placeholder:text-zinc-600' 
                          : 'bg-gray-50 border-gray-200 focus:border-red-600 text-gray-900 placeholder:text-zinc-400'
                      }`}
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      isDark 
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20' 
                        : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/10'
                    } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Enhanced Footer Navigation */}
        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-start gap-12 ${isDark ? 'border-zinc-800' : 'border-gray-200'}`}>
          
          {/* Brand & Socials */}
          <div className="max-w-xs">
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {copyrightName}<span className="text-red-600">.</span>
            </h3>
            <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Building intelligent, high-performance systems and modern digital experiences.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isDark ? 'bg-zinc-900 text-gray-400 hover:text-red-400' : 'bg-gray-100 text-gray-600 hover:text-red-600'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Navigation</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      smooth
                      duration={500}
                      className={`text-sm cursor-pointer transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-red-600'}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h4 className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Utilities</h4>
              <Link
                to="home"
                smooth
                duration={500}
                className={`flex items-center gap-2 text-sm cursor-pointer transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-red-600'}`}
              >
                Back to Top <FaArrowUp className="text-xs" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className={`mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          <p>© {new Date().getFullYear()} {copyrightName}. All rights reserved.</p>
          <p>
            Crafted with <span className="text-red-600">React</span> & <span className="text-red-600">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
