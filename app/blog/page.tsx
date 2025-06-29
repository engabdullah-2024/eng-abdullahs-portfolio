'use client';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'How I Became a Fullstack Developer in 1 Year',
    date: 'June 2025',
    description:
      'My journey from beginner to professional, including the tools, mindset, and projects that helped me grow.',
    slug: '#',
  },
  {
    title: 'Top 5 Tools I Use Daily as a Developer',
    date: 'May 2025',
    description:
      'From code editors to design systems — here are my top tools that make development faster and smoother.',
    slug: '#',
  },
  {
    title: 'Understanding the MERN Stack in Simple Terms',
    date: 'April 2025',
    description:
      'Breaking down MongoDB, Express, React, and Node.js with practical examples and use cases.',
    slug: '#',
  },
];

// ✅ animation settings with valid transition
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
    },
  },
};

export default function Blog() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-red-700 mb-10 text-center">
        Blog & Articles
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white border border-red-100 rounded-xl p-6 shadow hover:shadow-md transition-all duration-300"
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <p className="text-xs text-gray-500 mb-1">{post.date}</p>
            <h2 className="text-lg font-bold text-red-700 mb-2">{post.title}</h2>
            <p className="text-gray-700 text-sm mb-4">{post.description}</p>
            <a
              href={post.slug}
              className="inline-block text-sm text-red-600 hover:underline font-medium"
            >
              Read more →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
