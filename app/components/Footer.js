import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/mehmet-sahin-logo.svg"
                alt="Mehmet Şahin Logo"
                width={80}
                height={50}
                className="bg-transparent"
              />
            </Link>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="https://instagram.com/sahinmehmet90"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Mehmet Şahin. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
