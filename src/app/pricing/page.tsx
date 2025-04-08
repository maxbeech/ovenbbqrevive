'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

export default function Pricing() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/pexels-rdne-8522748.jpg"
            alt="Pricing"
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
                Our Pricing
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                Transparent, competitive pricing for all our professional cleaning services
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Oven Cleaning Pricing */}
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
              Oven Cleaning Prices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning services for all types of ovens
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Single Oven',
                description: 'For standard single ovens in most households',
                price: '£65',
                features: [
                  'Complete disassembly & cleaning',
                  'Door removal & cleaning',
                  'Element & fan cleaning',
                  'Eco-friendly cleaning products',
                  'Ready to use immediately',
                ],
                popular: false,
                delay: 0.1,
              },
              {
                title: 'Double Oven',
                description: 'For built-in double ovens or range cooker ovens',
                price: '£95',
                features: [
                  'Complete disassembly & cleaning',
                  'Both cavities thoroughly cleaned',
                  'Door removal & cleaning',
                  'Element & fan cleaning',
                  'Eco-friendly cleaning products',
                ],
                popular: true,
                delay: 0.3,
              },
              {
                title: 'Range Cooker',
                description: 'For large professional-style range cookers',
                price: 'From £125',
                features: [
                  'Complete disassembly & cleaning',
                  'Multiple cavities cleaned',
                  'All removable parts cleaned',
                  'Hob cleaning included',
                  'Eco-friendly cleaning products',
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
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
        </div>
      </section>

      {/* BBQ Cleaning Pricing */}
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
              BBQ Cleaning Prices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert cleaning for all types of BBQ grills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Standard BBQ',
                description: 'Ideal for 2-4 burner gas BBQs or medium-sized charcoal grills',
                price: '£85',
                features: [
                  'Complete disassembly & cleaning',
                  'Burner cleaning & maintenance',
                  'Grill & hot plate cleaning',
                  'Drip tray cleaning',
                  'Eco-friendly cleaning products',
                ],
                popular: false,
                delay: 0.1,
              },
              {
                title: 'Large BBQ',
                description: 'Perfect for 5-6 burner gas BBQs or large charcoal grills',
                price: '£115',
                features: [
                  'Complete disassembly & cleaning',
                  'Multiple burner cleaning',
                  'Multiple grill section cleaning',
                  'Thorough hood & cooking area cleaning',
                  'Eco-friendly cleaning products',
                ],
                popular: true,
                delay: 0.3,
              },
              {
                title: 'Premium BBQ',
                description: 'For built-in, specialty or extra-large BBQ units',
                price: 'From £135',
                features: [
                  'Complete disassembly & cleaning',
                  'Specialty part handling',
                  'Extended cleaning time',
                  'Multiple component cleaning',
                  'Custom cleaning solutions',
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
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
        </div>
      </section>

      {/* Hob & Extractor Cleaning Pricing */}
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
              Hob & Extractor Cleaning Prices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning for hobs and extractor hoods
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Standard Hob',
                description: 'For ceramic, induction or gas hobs up to 4 burners',
                price: '£45',
                features: [
                  'Thorough cleaning of all surfaces',
                  'Removal of burnt-on residues',
                  'Control panel cleaning',
                  'Eco-friendly cleaning products',
                  'Streak-free finish',
                ],
                popular: false,
                delay: 0.1,
              },
              {
                title: 'Extractor Hood',
                description: 'For standard domestic extractor hoods',
                price: '£55',
                features: [
                  'Complete exterior cleaning',
                  'Filter cleaning or replacement',
                  'Grease removal from all surfaces',
                  'Fan and vent cleaning where accessible',
                  'Improved functionality',
                ],
                popular: true,
                delay: 0.3,
              },
              {
                title: 'Hob & Extractor Combo',
                description: 'Save when you book both services together',
                price: '£85',
                features: [
                  'Complete hob cleaning',
                  'Full extractor hood cleaning',
                  'Filter cleaning or replacement',
                  'Eco-friendly cleaning products',
                  '15% savings on individual prices',
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
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
              Need a custom quote for multiple services or commercial equipment? <Link href="/contact" className="text-[#fb5a25] hover:underline">Contact us</Link> for special pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Volume Discounts */}
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
              Package Deals & Discounts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save more when you combine our cleaning services
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Multi-Service Discounts
            </h3>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-bold text-gray-900">Two Services</h4>
                  <p className="text-gray-600">Book any two cleaning services together</p>
                </div>
                <div className="text-[#fb5a25] font-bold text-lg">10% Off</div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-bold text-gray-900">Three Services</h4>
                  <p className="text-gray-600">Book any three cleaning services together</p>
                </div>
                <div className="text-[#fb5a25] font-bold text-lg">15% Off</div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-bold text-gray-900">Regular Maintenance</h4>
                  <p className="text-gray-600">Sign up for scheduled regular cleaning (every 6 months)</p>
                </div>
                <div className="text-[#fb5a25] font-bold text-lg">15% Off</div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-bold text-gray-900">Refer a Friend</h4>
                  <p className="text-gray-600">When your referral books a service</p>
                </div>
                <div className="text-[#fb5a25] font-bold text-lg">£10 Off Your Next Service</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-[#fb5a25] hover:bg-[#e04d1d] text-white rounded-md font-medium transition-colors duration-300 text-lg"
              >
                Book Multiple Services
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
              Ready to Book Your Cleaning Service?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Contact us today to schedule your service or request a custom quote
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-[#fb5a25] rounded-md font-medium transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 