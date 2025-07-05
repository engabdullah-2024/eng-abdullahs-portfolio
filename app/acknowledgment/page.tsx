'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTrophy } from 'react-icons/fa';

export default function Acknowledgment() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-white via-red-50 to-red-100"
    >
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-red-100 p-8 space-y-6 text-center">
        {/* 👤 Image */}
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-8 border-red-300 shadow-lg">
          <Image
            src="/assets/zamzam.jpg"
            alt="Zamzam Ali"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 🔖 Name + Icons */}
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-3xl font-extrabold text-red-700">Zamzam Ali</h2>
          <FaCheckCircle className="text-blue-500" size={24} title="Verified" />
          <FaTrophy className="text-yellow-400" size={24} title="Support Trophy" />
        </div>

        {/* 🧠 Title */}
        <p className="text-lg font-semibold text-gray-700">
          Criminologist & Security Analyst
        </p>

        {/* 💬 Message */}
        <div className="text-gray-800 text-base leading-relaxed space-y-4">
          <p>
            I would like to express my heartfelt gratitude to my dear sister, who stood firmly by my
            side during my journey to becoming a Full-Stack Developer. She not only encouraged me
            but generously covered all the financial costs of my education.
          </p>
          <p>
            Your unwavering support has been the foundation of my success. From the bottom of my
            heart — thank you, my sister.
          </p>
          <p className="italic text-gray-700">
            🕊 <span className="font-medium">May Allah reward you immensely</span> for all the good
            you have done for me. May He open every door of opportunity in your life and grant you
            every dream you wish to achieve. May your life be filled with success, good health, and
            lasting happiness. <span className="text-red-600 font-bold">Ameen</span>.
          </p>
          <p className="text-red-600 font-semibold">Thank you, my sister!</p>
        </div>
      </div>
    </motion.section>
  );
}
