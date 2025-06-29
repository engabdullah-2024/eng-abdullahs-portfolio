'use client';
import { motion } from 'framer-motion';
import { projects } from '../lib/data';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-6xl mx-auto px-4 space-y-12"
    >
      <h2 className="text-4xl font-bold text-red-700">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(220,38,38,0.3)' }}
            className="border border-red-300 rounded-lg p-6 bg-white shadow-md cursor-pointer transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-red-700 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm text-red-600 font-semibold mb-4">
              Tech Stack: {project.stack.join(', ')}
            </p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700 font-semibold underline hover:text-red-900"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700 font-semibold underline hover:text-red-900"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
