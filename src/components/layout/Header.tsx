'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Oven Cleaning', path: '/oven-cleaning' },
  { name: 'BBQ Cleaning', path: '/bbq-cleaning' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#fb5a25] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <p>Professional oven & BBQ cleaning services in Surrey</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+441234567890" className="flex items-center text-sm hover:text-white/80 transition-colors">
                <FaPhone className="mr-2 h-3 w-3" />
                <span>01234 567890</span>
              </a>
              <a href="mailto:info@ovenbbqrevive.co.uk" className="flex items-center text-sm hover:text-white/80 transition-colors">
                <FaEnvelope className="mr-2 h-3 w-3" />
                <span>info@ovenbbqrevive.co.uk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`bg-white ${scrolled ? 'shadow-md py-2' : 'py-4'} sticky top-0 left-0 w-full z-50 transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/media/logo.png"
                alt="Oven BBQ Revive Logo"
                width={200}
                height={60}
                className="h-auto w-auto max-h-16"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <li key={item.name} className="relative">
                    <Link
                      href={item.path}
                      className={`px-3 py-2 rounded text-sm font-medium transition-colors hover:text-[#fb5a25] relative
                        ${pathname === item.path ? 'text-[#fb5a25]' : 'text-gray-800'}`}
                    >
                      {item.name}
                      
                      {/* Animated underline */}
                      {pathname === item.path && (
                        <motion.div 
                          className="absolute bottom-0 left-0 h-0.5 bg-[#fb5a25]"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/contact"
                    className="ml-2 px-4 py-2 bg-[#fb5a25] text-white rounded hover:bg-[#e04d1d] transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-800 hover:text-[#fb5a25] focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden bg-white shadow-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.path}
                      className={`block px-3 py-3 rounded text-base font-medium 
                        ${pathname === item.path ? 'text-[#fb5a25]' : 'text-gray-800'}`}
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-3 bg-[#fb5a25] text-white rounded hover:bg-[#e04d1d] transition-colors text-base font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Book Now
                  </Link>
                  <div className="mt-4 flex flex-col space-y-2">
                    <a href="tel:+441234567890" className="flex items-center text-sm text-gray-800 hover:text-[#fb5a25] transition-colors">
                      <FaPhone className="mr-2 h-3 w-3" />
                      <span>01234 567890</span>
                    </a>
                    <a href="mailto:info@ovenbbqrevive.co.uk" className="flex items-center text-sm text-gray-800 hover:text-[#fb5a25] transition-colors">
                      <FaEnvelope className="mr-2 h-3 w-3" />
                      <span>info@ovenbbqrevive.co.uk</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
} 