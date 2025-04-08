'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Keeping Your Oven Clean Between Professional Services",
      excerpt: "Discover practical tips and techniques to maintain your oven's cleanliness and extend the time between professional cleanings...",
      image: "/media/pexels-heyho-8134987.jpg",
      date: "April 5, 2023",
      author: "James Thompson",
      category: "Oven Cleaning",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Why Eco-Friendly Cleaning Products Make a Difference for Your Family's Health",
      excerpt: "Learn about the benefits of eco-friendly cleaning solutions for your home, health, and the environment...",
      image: "/media/cleaning-1920w-1024x768-1.webp",
      date: "March 18, 2023",
      author: "Sarah Bennett",
      category: "Eco-Friendly Cleaning",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "BBQ Maintenance: Essential Tips for Year-Round Grilling Success",
      excerpt: "Discover how to keep your BBQ in top condition throughout the year, ensuring perfect results every time you fire it up...",
      image: "/media/pexels-heyho-6956114.jpg",
      date: "February 24, 2023",
      author: "Michael Chen",
      category: "BBQ Cleaning",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "The Hidden Dangers of a Dirty Extractor Hood and How to Address Them",
      excerpt: "Explore the potential risks associated with neglected extractor hoods and learn how proper cleaning can improve kitchen safety...",
      image: "/media/pexels-rdne-8522751.jpg",
      date: "January 30, 2023",
      author: "James Thompson",
      category: "Extractor Hood Cleaning",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "How Often Should You Clean Your Oven? Expert Recommendations",
      excerpt: "Get professional advice on the ideal cleaning frequency for different types of ovens based on usage patterns and cooking habits...",
      image: "/media/pexels-rdne-8522748.jpg",
      date: "January 12, 2023",
      author: "Sarah Bennett",
      category: "Oven Cleaning",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Before and After: Stunning Transformations from Our Professional Cleaning Service",
      excerpt: "See the remarkable difference our professional cleaning service makes with these impressive before and after showcases...",
      image: "/media/pexels-rdne-8522744.jpg",
      date: "December 8, 2022",
      author: "Michael Chen",
      category: "Case Studies",
      readTime: "9 min read",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/pexels-heyho-6438745.jpg"
            alt="Oven BBQ Revive Blog"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Our Blog
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                Insights, tips, and stories about oven and BBQ cleaning and maintenance
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter - Would be functional in full implementation */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button className="px-4 py-2 bg-[#fb5a25] text-white rounded-full text-sm font-medium">
              All Posts
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors duration-300">
              Oven Cleaning
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors duration-300">
              BBQ Cleaning
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors duration-300">
              Extractor Hood Cleaning
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors duration-300">
              Eco-Friendly Cleaning
            </button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm font-medium transition-colors duration-300">
              Tips & Advice
            </button>
          </div>

          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="lg:col-span-3 relative h-[300px] lg:h-auto">
                <Image
                  src="/media/pexels-liliana-drew-9462307.jpg"
                  alt="Featured Blog Post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                <span className="text-sm font-medium text-[#fb5a25] mb-2">Featured Post</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why Regular Oven Cleaning Is Essential for Your Family's Health
                </h2>
                <p className="text-gray-600 mb-6">
                  Discover the important health benefits of maintaining a clean oven and how it can improve your cooking results while reducing health risks for your family.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-4">
                    <FaCalendar className="mr-2 h-3 w-3" />
                    <span>April 15, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-2 h-3 w-3" />
                    <span>James Thompson</span>
                  </div>
                </div>
                <Link 
                  href="/blog/featured-post" 
                  className="inline-flex items-center text-[#fb5a25] font-medium hover:text-[#e04d1d] transition-colors"
                >
                  Read Full Article <FaArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-52">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#fb5a25] text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <div className="flex items-center mr-4">
                      <FaCalendar className="mr-2 h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-[#fb5a25] font-medium hover:text-[#e04d1d] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16">
            <nav className="flex items-center space-x-2">
              <span className="px-4 py-2 border border-gray-300 rounded-md text-gray-400 cursor-not-allowed">
                Previous
              </span>
              <span className="px-4 py-2 bg-[#fb5a25] text-white rounded-md font-medium">
                1
              </span>
              <Link 
                href="#" 
                className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-md text-gray-700 font-medium transition-colors"
              >
                2
              </Link>
              <Link 
                href="#" 
                className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-md text-gray-700 font-medium transition-colors"
              >
                3
              </Link>
              <Link 
                href="#" 
                className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-md text-gray-700 font-medium transition-colors"
              >
                Next
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with our latest articles, cleaning tips, and exclusive offers.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb5a25] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#fb5a25] hover:bg-[#e04d1d] text-white rounded-md font-medium transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#fb5a25]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Experience the Professional Difference?
            </h2>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-[#fb5a25] rounded-md font-medium transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Book Your Cleaning Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 