'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLeaf, FaAward, FaSmile, FaHandshake } from 'react-icons/fa';

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/pexels-liliana-drew-9462307.jpg"
            alt="About Oven BBQ Revive"
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
                About Oven BBQ Revive
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                Surrey's leading professional oven and BBQ cleaning specialists
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/media/pexels-rdne-8522748.jpg"
                alt="Professional oven cleaning"
                fill
                className="object-cover object-center"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-1 w-16 bg-[#fb5a25] mr-4"></div>
                <h2 className="text-lg font-medium text-[#fb5a25]">Our Story</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Humble Beginnings to Surrey's Trusted Cleaning Specialists
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Oven BBQ Revive was founded in 2015 with a simple mission: to provide exceptional cleaning services for ovens and BBQs that truly restore them to their former glory. What started as a small family-run operation has grown into one of Surrey's most trusted cleaning specialists.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our founder, James, was frustrated by the lack of thorough, professional cleaning services available for kitchen appliances. After his own disappointing experiences with cleaning companies, he decided to create a service that would exceed expectations in every way.
              </p>
              <p className="text-lg text-gray-700">
                Today, our team of trained technicians continues this commitment to excellence, combining cutting-edge cleaning techniques with eco-friendly products to deliver remarkable results for homes and businesses across Surrey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-16 bg-[#fb5a25] mr-4"></div>
              <h2 className="text-lg font-medium text-[#fb5a25]">Our Values</h2>
              <div className="h-1 w-16 bg-[#fb5a25] ml-4"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Principles That Guide Us
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Oven BBQ Revive, we're driven by a set of core values that influence every aspect of our service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Environmental Responsibility',
                description: "We're committed to using eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the planet.",
                icon: <FaLeaf className="h-10 w-10 text-white" />,
                delay: 0.1,
                color: 'bg-green-600',
              },
              {
                title: 'Exceptional Quality',
                description: "We don't just clean—we transform. Our meticulous approach ensures appliances are restored to the highest possible standard.",
                icon: <FaAward className="h-10 w-10 text-white" />,
                delay: 0.3,
                color: 'bg-blue-600',
              },
              {
                title: 'Customer Satisfaction',
                description: "Your happiness is our priority. We go above and beyond to ensure you're delighted with our service, every time.",
                icon: <FaSmile className="h-10 w-10 text-white" />,
                delay: 0.5,
                color: 'bg-yellow-500',
              },
              {
                title: 'Integrity & Transparency',
                description: "We're honest about our services and pricing. What we quote is what you pay—no hidden fees or surprises.",
                icon: <FaHandshake className="h-10 w-10 text-white" />,
                delay: 0.7,
                color: 'bg-[#fb5a25]',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: value.delay }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`p-6 ${value.color}`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {value.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Eco-Friendly Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-1 w-16 bg-[#fb5a25] mr-4"></div>
                <h2 className="text-lg font-medium text-[#fb5a25]">Eco-Friendly Approach</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cleaning with Care for the Environment
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Environmental responsibility is at the heart of our business. We've made a conscious decision to use only eco-friendly, non-toxic cleaning solutions that effectively remove grease and grime without harsh chemicals.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our cleaning products are:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Biodegradable and environmentally friendly',
                  'Free from caustic soda and harmful chemicals',
                  'Safe for use around children and pets',
                  'Fume-free and odorless',
                  'Just as effective as traditional chemicals',
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <span className="text-[#fb5a25] mr-3">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-lg text-gray-700">
                By choosing Oven BBQ Revive, you're not only getting a superior cleaning service but also making an environmentally responsible choice for your home and family.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/media/cleaning-1920w-1024x768-1.webp"
                alt="Eco-friendly cleaning products"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-16 bg-[#fb5a25] mr-4"></div>
              <h2 className="text-lg font-medium text-[#fb5a25]">Service Area</h2>
              <div className="h-1 w-16 bg-[#fb5a25] ml-4"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Where We Operate
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving homes and businesses throughout Surrey and neighboring areas
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Primary Service Areas</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    'Guildford', 'Woking', 'Farnham', 'Leatherhead',
                    'Dorking', 'Reigate', 'Redhill', 'Epsom',
                    'Esher', 'Weybridge', 'Camberley', 'Godalming',
                  ].map((area, index) => (
                    <li key={index} className="text-gray-700">• {area}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Additional Coverage</h4>
                <p className="text-gray-700 mb-4">
                  We also serve selected areas in neighboring counties:
                </p>
                <ul className="space-y-2">
                  {[
                    'Parts of Hampshire', 'Parts of West Sussex',
                    'South West London', 'Kingston upon Thames',
                    'Richmond upon Thames', 'Sutton',
                  ].map((area, index) => (
                    <li key={index} className="text-gray-700">• {area}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-6">
                Not sure if we cover your area? Contact us to check availability and discuss your cleaning needs.
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-[#fb5a25] hover:bg-[#e04d1d] text-white rounded-md font-medium transition-colors duration-300"
              >
                Check Availability
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#fb5a25]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Oven BBQ Revive Difference
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Ready to restore your appliances to their former glory? Book our professional cleaning service today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-[#fb5a25] rounded-md font-medium transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                Book a Service
              </Link>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-md font-medium transition-colors duration-300 text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 