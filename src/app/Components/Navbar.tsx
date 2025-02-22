"use client"
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdCastForEducation, MdContactPhone } from 'react-icons/md';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="w-full sm:w-16 bg-background shadow-md flex flex-row sm:flex-col items-center justify-around sm:justify-start py-3 sm:py-4 fixed bottom-0 sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:h-screen z-50">
      <ul className="flex flex-row sm:flex-col gap-3 sm:gap-5 sm:space-y-4 sm:mt-12">
        {/* Home */}
        <li className="relative group">
          <Link href="/" className="flex items-center justify-center">
            <div
              className={`p-2 rounded-full transition-colors ${
                pathname === '/'
                  ? 'bg-yellow-500 sm:hover:bg-yellow-600'
                  : 'hover:bg-yellow-500'
              }`}
            >
              <FaHome className="text-lg sm:text-xl" />
            </div>
            <span className="sm:absolute sm:right-14 sm:top-1/2 sm:-translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition hidden sm:block">
              Home
            </span>
          </Link>
        </li>

        {/* Education */}
        <li className="relative group">
          <Link href="/education" className="flex items-center justify-center">
            <div
              className={`p-2 rounded-full transition-colors ${
                pathname === '/education'
                  ? 'bg-yellow-500 sm:hover:bg-yellow-600'
                  : 'hover:bg-yellow-500'
              }`}
            >
              <MdCastForEducation className="text-xl sm:text-xl" />
            </div>
            <span className="sm:absolute sm:right-14 sm:top-1/2 sm:-translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition hidden sm:block">
              Education
            </span>
          </Link>
        </li>

        {/* Portfolio */}
        <li className="relative group">
          <Link href="/portfolio" className="flex items-center justify-center">
            <div
              className={`p-2 rounded-full transition-colors ${
                pathname === '/portfolio'
                  ? 'bg-yellow-500 sm:hover:bg-yellow-600'
                  : 'hover:bg-yellow-500'
              }`}
            >
              <Briefcase className="text-xl sm:text-lg" />
            </div>
            <span className="sm:absolute sm:right-14 sm:top-1/2 sm:-translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition hidden sm:block">
              Portfolio
            </span>
          </Link>
        </li>

        {/* Contact */}
        <li className="relative group">
          <Link href="/contact-us" className="flex items-center justify-center">
            <div
              className={`p-2 rounded-full transition-colors ${
                pathname === '/contact-us'
                  ? 'bg-yellow-500 sm:hover:bg-yellow-600'
                  : 'hover:bg-yellow-500'
              }`}
            >
              <MdContactPhone className="text-xl sm:text-xl" />
            </div>
            <span className="sm:absolute sm:right-14 sm:top-1/2 sm:-translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition hidden sm:block">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}