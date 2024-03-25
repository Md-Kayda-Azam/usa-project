'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/assets/img/logo.png';
import MenuItem from '../MenuItem/MenuItem';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`sticky top-0 z-50 bg-white shadow  max-w-full  ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1440px] xl:px-20 md:px-10 sm:px-5  px-3 m-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="hidden md:block">
            <Image src={logo} alt="Logo" />
          </div>
          {/* Mobile Menu */}
          <div className="sm:hidden md:hiddengrid grid-cols-4 grid w-full">
            {/* Logo */}
            <div className="col-span-3 flex items-center justify-center">
              <Image src={logo} alt="Logo" />
            </div>
            <div className="col-span-1">
              {/* Menu Icon */}
              <div
                className="cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      menuOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  />
                </svg>
              </div>
            </div>

            {/* Menu Dropdown */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="absolute top-full right-0 w-screen bg-red-500"
                >
                  <ul className="flex flex-col">
                    <MenuItem href="/" setMenuOpen={setMenuOpen}>
                      Home
                    </MenuItem>
                    <MenuItem href="/about" setMenuOpen={setMenuOpen}>
                      About us
                    </MenuItem>
                    <MenuItem href="/contact" setMenuOpen={setMenuOpen}>
                      Contact
                    </MenuItem>
                    <MenuItem href="/privacy-policy" setMenuOpen={setMenuOpen}>
                      Policyholder Portal
                    </MenuItem>
                    <MenuItem href="/report-claim" setMenuOpen={setMenuOpen}>
                      Report a claim
                    </MenuItem>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex justify-center items-center  space-x-5">
            <Link href="/">
              <button
                className={`${
                  pathname === '/'
                    ? 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium border border-transparent shadow-sm focus:outline-none 0 bg-[#b81c1c] hover:bg-red-700 text-white'
                    : 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium text-black  border border-transparent shadow-sm focus:outline-none 0'
                }`}
              >
                Home
              </button>
            </Link>
            <Link href="/about">
              <button
                className={`${
                  pathname == '/about'
                    ? 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium border border-transparent shadow-sm focus:outline-none 0 bg-[#b81c1c] hover:bg-red-700 text-white'
                    : 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium text-black  border border-transparent shadow-sm focus:outline-none 0'
                }`}
              >
                About
              </button>
            </Link>
            <Link href="/contact">
              {' '}
              <button
                className={`${
                  pathname == '/contact'
                    ? 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium border border-transparent shadow-sm focus:outline-none 0 bg-[#b81c1c] hover:bg-red-700 text-white'
                    : 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium text-black  border border-transparent shadow-sm focus:outline-none 0'
                }`}
              >
                Contact
              </button>
            </Link>

            <Link href="/privacy-policy">
              <button
                className={`${
                  pathname == '/privacy-policy'
                    ? 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium border border-transparent shadow-sm focus:outline-none 0 bg-[#b81c1c] hover:bg-red-700 text-white'
                    : 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium text-black  border border-transparent shadow-sm focus:outline-none 0'
                }`}
              >
                Policyholder Portal
              </button>
            </Link>
            <Link href="/report-claim">
              <button
                className={`${
                  pathname == '/report-claim'
                    ? 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium border border-transparent shadow-sm focus:outline-none 0 bg-[#b81c1c] hover:bg-red-700 text-white'
                    : 'inline-flex justify-center w-full px-4 py-2 rounded-full text-sm font-medium text-black  border border-transparent shadow-sm focus:outline-none 0'
                }`}
              >
                Report a Claim
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
