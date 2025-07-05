'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  { href: '/acknowledgment', label: 'Acknowledgment' },
  ];

  return (
    <>
      {/* ✅ Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-red-600 p-4 rounded-full shadow-lg text-white sm:hidden"
        aria-label="Toggle Menu"
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* ✅ Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-2xl p-6 z-40"
          >
            <ul className="grid grid-cols-2 gap-6 text-center">
              {links.map(({ href, label }) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.25 }}
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
