'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    closeMenu();
  };

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <Image
                  src="/mehmet-sahin-logo.svg"
                  alt="Mehmet Şahin Logo"
                  width={50}
                  height={50}
                  className="bg-transparent mr-2"
                />
                <span className="font-semibold text-gray-700 dark:text-white text-lg">Mehmet Şahin</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/" className="py-4 px-2 text-gray-700 dark:text-white hover:text-green-500 transition duration-300">Ana Sayfa</Link>
            <Link href="/hakkimda" className="py-4 px-2 text-gray-700 dark:text-white hover:text-green-500 transition duration-300">Hakkımda</Link>
            <Link href="/galeri" className="py-4 px-2 text-gray-700 dark:text-white hover:text-green-500 transition duration-300">Galeri</Link>
            <Link href="/iletisim" className="py-4 px-2 text-gray-700 dark:text-white hover:text-green-500 transition duration-300">İletişim</Link>
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md bg-gray-300 dark:bg-gray-600"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            )}
          </div>
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md bg-gray-300 dark:bg-gray-600"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            )}
            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-700 dark:text-white hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link href="/" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-700 dark:text-white hover:bg-green-500 hover:text-white">Ana Sayfa</Link>
        <Link href="/hakkimda" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-700 dark:text-white hover:bg-green-500 hover:text-white">Hakkımda</Link>
        <Link href="/galeri" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-700 dark:text-white hover:bg-green-500 hover:text-white">Galeri</Link>
        <Link href="/iletisim" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-700 dark:text-white hover:bg-green-500 hover:text-white">İletişim</Link>
      </div>
    </nav>
  );
}
