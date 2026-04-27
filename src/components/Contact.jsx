import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add backend/email service integration here
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-zinc-950 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title and Tagline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Let’s Connect and Collaborate
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          I’m always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision. Feel free to send a message — I’ll get back to you soon!
        </p>

        {/* Submission Feedback */}
        {isSubmitted ? (
          <div className="text-lg text-green-500 font-medium mb-6">
            ✅ Thank you for reaching out! I’ll get back to you shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg mx-auto bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md border border-gray-200 dark:border-zinc-800"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
               className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
               className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
               className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-zinc-950 dark:text-white focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition font-medium"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/ahmad-hassan-ai-engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/thisisahmad24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:thisisahmad07@gmail.com"
            className="text-3xl text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Additional Line */}
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 break-words">
          0311-4512268 • thisisahmad07@gmail.com
          <br />
          102 Ali Block, Iteffaq Town, Lahore
        </p>
      </div>
    </section>
  );
};

export default Contact;
