'use client';
import { motion } from 'framer-motion';
import { skills } from '../lib/data';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 bg-gradient-to-b from-white via-red-50 to-red-100 rounded-xl shadow"
    >
      {/* ✅ Dev Info Card */}
      <div className="bg-white border border-red-200 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center space-y-4">
        <img
          src="https://avatars.githubusercontent.com/u/173546517?v=4"
          alt="Eng Abdullah"
          className="w-32 h-32 rounded-full object-cover border-4 border-red-600 shadow-md"
        />
        <div className="flex items-center gap-2 text-xl font-semibold text-red-700">
          Eng Abdullah <FaCheckCircle className="text-blue-500" />
        </div>
        <p className="text-gray-600 text-sm">Fullstack Developer</p>
        <p className="text-green-600 font-medium">✅ 1+ Year Experience</p>
        <p className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">Current: Active</p>
      </div>

      {/* ✅ Main About Section */}
      <div className="md:col-span-2 space-y-10">
        <div>
          <h2 className="text-4xl font-bold text-red-700 mb-4">About Me</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            I am Eng Abdullah, a passionate Fullstack Developer with over 1 year of experience building
            scalable, performant, and beautiful web applications. Skilled in React, Next.js, Node.js,
            and Tailwind CSS, I focus on clean code, usability, and smooth animations.
          </p>
        </div>

        <section>
          <h3 className="text-2xl font-semibold text-red-600 mb-3">Tech Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <li
                key={i}
                className="bg-red-50 text-red-800 rounded-md px-4 py-2 shadow-md text-center font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-red-600 mb-3">Experience Timeline</h3>
          <ul className="border-l-4 border-red-600 pl-6 space-y-6">
            <li>
              <p className="font-semibold text-red-700">Fullstack Developer — XYZ Company</p>
              <p className="text-gray-700">Jan 2024 - Present</p>
              <p className="text-gray-600 mt-1">
                Building full-stack web apps using modern tools like Next.js and Express.
              </p>
            </li>
            <li>
              <p className="font-semibold text-red-700">Frontend Intern — ABC Tech</p>
              <p className="text-gray-700">Jun 2023 - Dec 2023</p>
              <p className="text-gray-600 mt-1">
                Designed responsive interfaces and practiced real-world frontend skills.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
