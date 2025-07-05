'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTrophy } from 'react-icons/fa';

export default function AcknowledgmentPage() {
  const cardStyle =
    'max-w-md w-full bg-white rounded-3xl shadow-lg border border-red-100 p-6 space-y-6';
  const imageBox =
    'relative w-40 h-40 mx-auto rounded-full overflow-hidden border-8 border-red-300 shadow-lg';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 py-16 bg-gradient-to-b from-white via-red-50 to-red-100 flex flex-col items-center gap-12"
    >
      {/* 👩 Mother - First */}
      <div className={cardStyle}>
        <div className={imageBox}>
          <Image
            src="/assets/amina.jpg"
            alt="Amina Ibrahim"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex justify-center gap-4 items-center">
          <h2 className="text-3xl font-bold text-red-700">Amina Ibrahim</h2>
          <FaCheckCircle className="text-blue-500" size={26} />
          <FaTrophy className="text-yellow-400" size={26} title="Best Mom Award" />
        </div>
        <p className="text-center text-lg font-semibold text-gray-700">
          My Beloved Mother
        </p>
        <p className="text-gray-800 text-base leading-relaxed px-2">
          Her duas, care, and love built the man I am today. She is my Jannah in this world.
          May Allah protect and bless her always. 💐
          <br />
          <span className="text-red-600 font-semibold">Thank you, Mom ❤️</span>
        </p>
      </div>

      {/* 🧔‍♂️ Father - Second */}
      <div className={cardStyle}>
        <div className={imageBox}>
          <Image
            src="/assets/father.jpg"
            alt="Dr. Ali Nor"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex justify-center gap-4 items-center">
          <h2 className="text-3xl font-bold text-red-700">Dr. Ali Nor</h2>
          <FaCheckCircle className="text-blue-500" size={26} />
          <FaTrophy className="text-yellow-400" size={26} title="Father of the Year" />
        </div>
        <p className="text-center text-lg font-semibold text-gray-700">
          Lifesaver · TB Cure Specialist · Greatest Father
        </p>
        <p className="text-gray-800 text-base leading-relaxed px-2">
          My father supported me from class 1 to 12 — every step, every book, every late night.
          Without him, I am nothing. He’s my inspiration, my strength, and my role model.
          <br />
          <span className="text-red-600 font-semibold">Thank you, my father!</span>
        </p>
      </div>

      {/* 👩 Sister - Zamzam */}
      <div className={cardStyle}>
        <div className={imageBox}>
          <Image
            src="/assets/zamzam.jpg"
            alt="Zamzam Ali"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex justify-center gap-4 items-center">
          <h2 className="text-3xl font-bold text-red-700">Zamzam Ali</h2>
          <FaCheckCircle className="text-blue-500" size={26} />
          <FaTrophy className="text-yellow-400" size={26} title="Support Trophy" />
        </div>
        <p className="text-center text-lg font-semibold text-gray-700">
          Criminology & Security Study Bach
        </p>
        <p className="text-gray-800 text-base leading-relaxed px-2">
          My sister stood by me and funded my journey. She believed in me and gave me her full
          support to reach this level as a Fullstack Developer.
          <br />
          <span className="text-red-600 font-semibold">Thank you, my sister!</span>
        </p>
      </div>
    </motion.section>
  );
}
