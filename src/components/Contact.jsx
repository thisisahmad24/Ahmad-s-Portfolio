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
    <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title and Tagline */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let’s Connect and Collaborate
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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
            className="space-y-6 max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition font-medium"
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
            className="text-3xl text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/thisisahmad24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:thisisahmad07@gmail.com"
            className="text-3xl text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Additional Line */}
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          0311-4512268 • thisisahmad07@gmail.com
          <br />
          102 Ali Block, Iteffaq Town, Lahore
        </p>
      </div>
    </section>
  );
};

export default Contact;
