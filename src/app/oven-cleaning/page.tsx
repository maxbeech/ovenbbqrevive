'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheck, FaClock, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

export default function OvenCleaning() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/pexels-rdne-8522748.jpg"
            alt="Oven Cleaning Service"
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
                Professional Oven Cleaning Service
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                Bringing your oven back to showroom condition with our expert cleaning service in Surrey.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-[#fb5a25] hover:bg-[#e04d1d] text-white rounded-md font-medium transition-colors duration-300 text-lg"
                >
                  Book Now
                </Link>
                <Link 
                  href="#pricing" 
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-md font-medium transition-colors duration-300 text-lg"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Comprehensive Oven Cleaning Service
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Oven BBQ Revive, we take pride in restoring your oven to like-new condition. Our professional cleaning service removes all traces of grease, grime, and burnt-on food, leaving your oven spotless and ready to use.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We use eco-friendly, non-toxic cleaning products that are safe for your family and pets, ensuring that your oven is not only clean but also safe to use immediately after our service.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Complete disassembly and deep cleaning',
                  'Removal of all grease and carbon deposits',
                  'Cleaning of oven door, glass, racks, and trays',
                  'Treatment of hidden areas often missed in regular cleaning',
                  'Eco-friendly, fume-free cleaning solutions'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <FaCheck className="text-[#fb5a25] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/media/pexels-rdne-8522744.jpg"
                alt="Oven cleaning in progress"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Oven Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a meticulous step-by-step process to ensure your oven is thoroughly cleaned
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Assessment',
                description: 'We start by assessing the condition of your oven to determine the best cleaning approach.',
                icon: '🔍',
                delay: 0.1,
              },
              {
                title: 'Disassembly',
                description: 'We carefully remove all removable parts, including racks, trays, and side panels for thorough cleaning.',
                icon: '🔧',
                delay: 0.3,
              },
              {
                title: 'Deep Cleaning',
                description: 'Using our eco-friendly cleaning solutions, we remove all grease, carbon deposits, and burnt-on food residue.',
                icon: '🧼',
                delay: 0.5,
              },
              {
                title: 'Reassembly',
                description: 'Once everything is spotlessly clean, we reassemble your oven and ensure it\'s ready for immediate use.',
                icon: '✅',
                delay: 0.7,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: item.delay }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              See the Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The difference our professional oven cleaning service makes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before/After comparison could be enhanced with a slider in a real implementation */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/media/pexels-heyho-8134987.jpg"
                  alt="Dirty oven before cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-4 py-2 rounded-lg font-medium">
                  Before
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/media/pexels-heyho-6312077.jpg"
                  alt="Clean oven after our service"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#fb5a25]/90 text-white px-4 py-2 rounded-lg font-medium">
                  After
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Single Oven',
                price: '£65',
                features: [
                  'Complete disassembly & cleaning',
                  'Door & glass cleaning',
                  'Rack & tray cleaning',
                  'Eco-friendly products',
                  '45-60 minutes duration',
                ],
                popular: false,
                delay: 0.1,
              },
              {
                title: 'Double Oven',
                price: '£95',
                features: [
                  'Cleaning of both ovens',
                  'Complete disassembly',
                  'All removable parts cleaned',
                  'Door & glass cleaning',
                  '90-120 minutes duration',
                ],
                popular: true,
                delay: 0.3,
              },
              {
                title: 'Range Cooker',
                price: '£120',
                features: [
                  'Full range cooker cleaning',
                  'Multiple ovens & grill',
                  'Hob & control panel',
                  'All removable parts cleaned',
                  '120-180 minutes duration',
                ],
                popular: false,
                delay: 0.5,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: plan.delay }}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden relative ${
                  plan.popular ? 'ring-2 ring-[#fb5a25] transform scale-105 md:-translate-y-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#fb5a25] text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-[#fb5a25] mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className={`block text-center px-6 py-3 rounded-md font-medium transition-colors duration-300 text-lg ${
                      plan.popular 
                        ? 'bg-[#fb5a25] hover:bg-[#e04d1d] text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need a custom quote for multiple appliances? <Link href="/contact" className="text-[#fb5a25] hover:underline">Contact us</Link> for special pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Benefits of Professional Oven Cleaning
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Regular professional oven cleaning not only makes your oven look better but also provides numerous practical benefits:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FaShieldAlt className="text-[#fb5a25] text-2xl" />,
                    title: 'Improved Safety',
                    description: 'Reduces fire hazards from built-up grease and carbon deposits'
                  },
                  {
                    icon: <FaClock className="text-[#fb5a25] text-2xl" />,
                    title: 'Energy Efficiency',
                    description: 'Clean ovens heat up faster and distribute heat more evenly'
                  },
                  {
                    icon: <FaMoneyBillWave className="text-[#fb5a25] text-2xl" />,
                    title: 'Extended Lifespan',
                    description: 'Regular cleaning helps your oven last longer'
                  },
                  {
                    icon: <FaCheck className="text-[#fb5a25] text-2xl" />,
                    title: 'Better Food Quality',
                    description: 'No more unwanted odors or tastes from burnt-on residue'
                  }
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <Image
                src="/media/pexels-liliana-drew-9462307.jpg"
                alt="Clean kitchen with freshly cleaned oven"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
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
              Ready to Revive Your Oven?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Experience the difference a professional oven cleaning can make. Book your service today!
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-[#fb5a25] rounded-md font-medium transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Book Your Service
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 