import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eng Abdullah | Fullstack Developer',
  description: 'Modern portfolio for Eng Abdullah',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <Navbar />
        <MobileMenu />
        <main className="pt-20 pb-32 max-w-6xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
