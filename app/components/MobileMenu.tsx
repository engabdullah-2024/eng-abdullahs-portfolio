'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 30,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0, y: 100, transition: { duration: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      {/* Bottom center toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 p-4 rounded-full shadow-lg text-white sm:hidden"
        aria-label="Toggle menu"
      >
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-2xl p-6 z-40"
            style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
          >
            <ul className="grid grid-cols-2 gap-6 text-center">
              {links.map(({ href, label }) => (
                <motion.li
                  key={href}
                  variants={itemVariants}
                  className=""
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block text-red-700 font-semibold text-lg rounded-md py-2 px-3 hover:bg-red-100 transition"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
