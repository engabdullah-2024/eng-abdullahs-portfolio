'use client';
import { motion } from 'framer-motion';
import { socialLinks } from '../lib/data';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl mx-auto px-4 space-y-8"
    >
      <h2 className="text-4xl font-bold text-red-700">Contact Me</h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border border-red-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-red-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="border border-red-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          required
        />
        <button
          type="submit"
          className="bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition transform hover:scale-105"
        >
          Send Message
        </button>
      </form>

      <div className="flex gap-6 justify-center pt-4">
        {socialLinks.map(({ platform, url }, idx) => (
          <motion.a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            className="text-red-700 font-semibold underline"
          >
            {platform}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
