'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { hero } from './lib/data'; // ✅ Adjust path as needed

export default function Home() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/Abdalla.pdf'; // ✅ DO NOT include "/public" here
    a.setAttribute('download', 'Eng-Abdalla-Resume.pdf'); // ✅ Only filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col items-center justify-center min-h-screen text-center space-y-6 px-4 bg-gradient-to-b from-white via-red-50 to-red-100"
    >
      {/* ✅ Success Message */}
      <AnimatePresence>
        {downloaded && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="absolute top-6 bg-green-100 text-green-800 border border-green-300 px-6 py-3 rounded-md shadow-md flex items-center gap-2"
          >
            <FiCheckCircle size={20} />
            <span>Resume downloaded successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-red-700">
        {hero.title}
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">{hero.subtitle}</p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/projects"
          className="bg-red-600 text-white px-8 py-3 rounded-md shadow-md hover:bg-red-700 transition transform hover:scale-105"
        >
          {hero.cta1}
        </a>

        <button
          onClick={handleDownload}
          className="border border-red-600 text-red-600 px-8 py-3 rounded-md shadow-md hover:bg-red-600 hover:text-white transition transform hover:scale-105"
        >
          {hero.cta2}
        </button>
      </div>
    </motion.section>
  );
}
