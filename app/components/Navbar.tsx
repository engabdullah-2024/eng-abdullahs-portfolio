import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="hidden sm:flex fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50 h-16 items-center justify-center gap-10 px-6">
      <Link href="/" className="font-bold text-red-700 hover:text-red-900 transition">
        Home
      </Link>
      <Link href="/about" className="font-medium text-gray-700 hover:text-red-700 transition">
        About
      </Link>
      <Link href="/projects" className="font-medium text-gray-700 hover:text-red-700 transition">
        Projects
      </Link>
      <Link href="/blog" className="font-medium text-gray-700 hover:text-red-700 transition">
        Blog
      </Link>
      <Link href="/contact" className="font-medium text-gray-700 hover:text-red-700 transition">
        Contact
      </Link>
    </nav>
  );
}
