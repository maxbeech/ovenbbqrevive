'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheck, FaSmog, FaFireAlt, FaStar } from 'react-icons/fa';

export default function HobExtractorCleaning() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/pexels-heyho-6438745.jpg"
            alt="Hob & Extractor Cleaning Service"
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
                Hob & Extractor Cleaning
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                Professional cleaning for your hob and extractor hood, improving efficiency and kitchen hygiene.
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
                Comprehensive Hob & Extractor Cleaning
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Oven BBQ Revive, we provide a thorough cleaning service for your hob and extractor hood, tackling the stubborn grease and grime that build up over time. Our professional service will restore your cooking surfaces and improve the air quality in your kitchen.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We use eco-friendly, degreasing products that effectively break down oils and food residue without harmful chemicals, ensuring your cooking area is clean, safe, and hygienic.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Deep cleaning of all hob surfaces and controls',
                  'Complete extractor hood cleaning including filters',
                  'Removal of built-up grease and carbon deposits',
                  'Cleaning of hard-to-reach areas',
                  'Improvement of extractor efficiency and performance'
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
                src="/media/pexels-rdne-8522751.jpg"
                alt="Hob cleaning in progress"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Types of Hobs & Extractors We Clean */}
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
              Types of Hobs & Extractors We Clean
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our service covers all types of cooking surfaces and extraction systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Gas Hobs',
                description: 'Complete cleaning of burners, pan supports, and control knobs, ensuring safe and efficient operation.',
                image: '/media/pexels-heyho-6312077.jpg',
                delay: 0.1,
              },
              {
                title: 'Electric Ceramic Hobs',
                description: 'Specialist cleaning to remove burnt-on spills and restore the smooth surface to a pristine finish.',
                image: '/media/pexels-heyho-8134987.jpg',
                delay: 0.3,
              },
              {
                title: 'Induction Hobs',
                description: 'Gentle yet effective cleaning of the delicate glass surface using appropriate products and techniques.',
                image: '/media/cleaning-1920w-1024x768-1.webp',
                delay: 0.5,
              },
              {
                title: 'Overhead Extractors',
                description: 'Thorough cleaning of visible surfaces, internal components, and grease filters to improve extraction efficiency.',
                image: '/media/pexels-liliana-drew-9462307.jpg',
                delay: 0.7,
              },
              {
                title: 'Integrated Extractors',
                description: 'Careful disassembly and cleaning of built-in and downdraft extraction systems, removing hidden grease build-up.',
                image: '/media/pexels-rdne-8522748.jpg',
                delay: 0.9,
              },
              {
                title: 'Commercial Grade Equipment',
                description: 'Specialized cleaning for commercial kitchens and high-end domestic cooking equipment.',
                image: '/media/pexels-rdne-8522744.jpg',
                delay: 1.1,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: item.delay }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Professional Hob & Extractor Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why regular professional cleaning is essential for your kitchen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Improved Air Quality',
                description: 'Clean extractors remove cooking odors and airborne grease more effectively, improving your kitchen\'s air quality.',
                icon: <FaSmog className="h-10 w-10 text-[#fb5a25]" />,
                delay: 0.1,
              },
              {
                title: 'Fire Safety',
                description: 'Removing grease build-up significantly reduces the risk of kitchen fires, protecting your home and family.',
                icon: <FaFireAlt className="h-10 w-10 text-[#fb5a25]" />,
                delay: 0.3,
              },
              {
                title: 'Energy Efficiency',
                description: 'Clean hobs and extractors work more efficiently, using less energy and potentially reducing your bills.',
                icon: <FaStar className="h-10 w-10 text-[#fb5a25]" />,
                delay: 0.5,
              },
              {
                title: 'Extended Equipment Life',
                description: 'Regular professional cleaning helps prevent damage and extends the lifespan of your kitchen appliances.',
                icon: <FaCheck className="h-10 w-10 text-[#fb5a25]" />,
                delay: 0.7,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: item.delay }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{item.icon}</div>
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

      {/* Our Cleaning Process */}
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
              Our Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A methodical approach to ensure thorough cleaning of your hob and extractor
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Initial Assessment',
                description: 'We assess the type and condition of your hob and extractor to determine the best cleaning approach.',
                delay: 0.1,
              },
              {
                step: '02',
                title: 'Protection of Surrounding Areas',
                description: 'We carefully protect surrounding surfaces and areas to prevent any damage during the cleaning process.',
                delay: 0.3,
              },
              {
                step: '03',
                title: 'Disassembly',
                description: 'Where possible, we disassemble components like extractor filters, hob grates, and burner caps for thorough cleaning.',
                delay: 0.5,
              },
              {
                step: '04',
                title: 'Deep Cleaning',
                description: 'Using our eco-friendly, professional-grade cleaning solutions, we remove all grease, grime, and carbon deposits.',
                delay: 0.7,
              },
              {
                step: '05',
                title: 'Reassembly and Polish',
                description: 'After cleaning, we carefully reassemble all components and polish surfaces for a pristine finish.',
                delay: 0.9,
              },
              {
                step: '06',
                title: 'Final Inspection',
                description: 'We conduct a final inspection to ensure everything is perfectly clean and functioning correctly.',
                delay: 1.1,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.delay }}
                className="flex items-start gap-6 mb-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[#fb5a25] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
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
                title: 'Standard Hob Cleaning',
                price: '£40',
                features: [
                  'Four-burner gas or electric hob',
                  'Cleaning of all surfaces and controls',
                  'Removal of grease and carbon deposits',
                  'Polish and finish',
                  '30-45 minutes duration',
                ],
                popular: false,
                delay: 0.1,
              },
              {
                title: 'Extractor Hood Cleaning',
                price: '£55',
                features: [
                  'Standard extractor hood',
                  'Filter removal and cleaning',
                  'Degreasing of all surfaces',
                  'Motor housing area cleaning',
                  '45-60 minutes duration',
                ],
                popular: true,
                delay: 0.3,
              },
              {
                title: 'Hob & Extractor Package',
                price: '£85',
                features: [
                  'Standard hob and extractor cleaning',
                  'Save by booking together',
                  'Complete kitchen focal point refresh',
                  'All components thoroughly cleaned',
                  '60-90 minutes duration',
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
              Need a custom quote for commercial equipment or specialty hobs? <Link href="/contact" className="text-[#fb5a25] hover:underline">Contact us</Link> for special pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "I was amazed at how they transformed my hob. It looks brand new again! The team was professional and efficient.",
                author: "Sarah Thompson",
                location: "Guildford",
                delay: 0.1,
              },
              {
                quote: "My extractor hadn't been properly cleaned in years. The difference in efficiency after Oven BBQ Revive cleaned it is incredible.",
                author: "David Wilson",
                location: "Woking",
                delay: 0.3,
              },
              {
                quote: "Excellent service from start to finish. My ceramic hob had stubborn burnt-on marks that they removed completely. Highly recommend!",
                author: "Emma Richardson",
                location: "Farnham",
                delay: 0.5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: testimonial.delay }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-[#fb5a25] mb-4">
                  <FaStar className="inline-block mr-1" />
                  <FaStar className="inline-block mr-1" />
                  <FaStar className="inline-block mr-1" />
                  <FaStar className="inline-block mr-1" />
                  <FaStar className="inline-block" />
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Your Kitchen?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Book our professional hob and extractor cleaning service today and enjoy a cleaner, safer kitchen environment!
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