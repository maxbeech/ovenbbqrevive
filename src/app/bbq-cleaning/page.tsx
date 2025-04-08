'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheck, FaLeaf, FaTools, FaClock } from 'react-icons/fa';

export default function BBQCleaning() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/pexels-heyho-6956114.jpg"
            alt="BBQ Cleaning Service"
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
                Professional BBQ Cleaning Service
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                Get your BBQ grill ready for perfect outdoor cooking with our expert cleaning service in Surrey.
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
                Our Professional BBQ Cleaning Service
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Oven BBQ Revive, we specialize in bringing your BBQ back to life. Our thorough cleaning service removes built-up grease, carbon deposits, and food residue, restoring your grill to an almost new condition.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you have a gas, charcoal, or electric BBQ, our expert technicians have the skills and eco-friendly products to clean it thoroughly and safely.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Complete disassembly and deep cleaning',
                  'Removal of stubborn grease and carbon deposits',
                  'Cleaning of grills, burners, and drip trays',
                  'Treatment of hard-to-reach areas',
                  'Safe, eco-friendly cleaning solutions'
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
                src="/media/48753720898_081a32fc9a_h.jpg"
                alt="BBQ cleaning in progress"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Clean Your BBQ */}
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
              Why Clean Your BBQ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular BBQ cleaning provides numerous benefits beyond just appearance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Better Tasting Food',
                description: 'A clean BBQ prevents old food residue and rancid oils from contaminating your fresh food, allowing true flavors to shine through.',
                icon: <span className="text-5xl">🍖</span>,
                delay: 0.1,
              },
              {
                title: 'Improved Safety',
                description: 'Reduces fire hazards from built-up grease and prevents harmful bacteria from contaminating your food.',
                icon: <span className="text-5xl">🛡️</span>,
                delay: 0.3,
              },
              {
                title: 'Extended BBQ Lifespan',
                description: 'Regular cleaning prevents corrosion and damage to burners and other components, extending the life of your investment.',
                icon: <span className="text-5xl">⏱️</span>,
                delay: 0.5,
              },
              {
                title: 'Better Heat Distribution',
                description: 'Clean burners and surfaces distribute heat more evenly, resulting in perfectly cooked food every time.',
                icon: <span className="text-5xl">🔥</span>,
                delay: 0.7,
              },
              {
                title: 'Healthier Cooking',
                description: 'Removes harmful carbon deposits and old grease that can release carcinogens when heated.',
                icon: <span className="text-5xl">🥗</span>,
                delay: 0.9,
              },
              {
                title: 'More Efficient Fuel Use',
                description: 'A clean BBQ uses fuel more efficiently, saving you money on gas or charcoal in the long run.',
                icon: <span className="text-5xl">💰</span>,
                delay: 1.1,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: item.delay }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
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

      {/* Our BBQ Cleaning Process */}
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
              Our BBQ Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A thorough, professional approach to bring your BBQ back to its best
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: 'Initial Assessment',
                  description: 'We carefully inspect your BBQ to assess its condition and identify specific cleaning needs.',
                  icon: <FaCheck className="text-white w-6 h-6" />,
                  delay: 0.1,
                },
                {
                  step: 2,
                  title: 'Complete Disassembly',
                  description: 'We disassemble all removable parts including grates, burners, heat shields, and drip trays for a thorough clean.',
                  icon: <FaTools className="text-white w-6 h-6" />,
                  delay: 0.3,
                },
                {
                  step: 3,
                  title: 'Deep Cleaning Treatment',
                  description: 'Using our eco-friendly, professional-grade cleaning solutions, we remove grease, carbon, and food residue.',
                  icon: <FaLeaf className="text-white w-6 h-6" />,
                  delay: 0.5,
                },
                {
                  step: 4,
                  title: 'Reassembly & Testing',
                  description: 'We carefully reassemble your BBQ and test all components to ensure everything is working perfectly.',
                  icon: <FaClock className="text-white w-6 h-6" />,
                  delay: 0.7,
                },
              ].map((item) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#fb5a25] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="sticky top-20">
                <div className="relative h-[600px]">
                  <Image
                    src="/media/pexels-heyho-6312077.jpg"
                    alt="BBQ cleaning process"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="bg-white p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Professional and Efficient
                  </h3>
                  <p className="text-gray-600">
                    Our professional BBQ cleaning service takes approximately 1-3 hours depending on the size and condition of your BBQ. We work efficiently to minimize disruption while ensuring a thorough job.
                  </p>
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
              BBQ Cleaning Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing tailored to your BBQ type and size
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
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Need a custom quote for a specialty BBQ? <Link href="/contact" className="text-[#fb5a25] hover:underline">Contact us</Link> for a personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our BBQ cleaning service
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How often should I have my BBQ professionally cleaned?',
                answer: 'For regular BBQ users, we recommend a professional clean once a year, ideally at the start of the BBQ season. For commercial or heavy users, cleaning may be required more frequently, possibly every 3-6 months.',
              },
              {
                question: 'Can you clean my BBQ at my home?',
                answer: 'Yes, our service is fully mobile. We bring all the necessary equipment and cleaning solutions to clean your BBQ at your home or business premises.',
              },
              {
                question: 'How long does BBQ cleaning take?',
                answer: 'A standard BBQ cleaning service usually takes between 1-3 hours, depending on the size and condition of your BBQ. Larger or heavily soiled BBQs may take longer.',
              },
              {
                question: 'Are your cleaning products safe?',
                answer: 'Yes, we use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. Our cleaning solutions are also food-safe, ensuring your BBQ is ready for immediate use after cleaning.',
              },
              {
                question: 'Do I need to do anything before you arrive?',
                answer: 'We recommend ensuring clear access to your BBQ and removing any personal items from the immediate area. If possible, allow the BBQ to cool for at least 24 hours before our visit if it has been recently used.',
              },
              {
                question: 'Do you repair BBQs as well as clean them?',
                answer: 'While our primary service is cleaning, our technicians can identify common issues during the cleaning process. For minor fixes like replacing ignition batteries or adjusting burners, we can often help. For major repairs, we can recommend trusted specialists.',
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mb-6 border-b border-gray-200 pb-6 last:border-b-0"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
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
              Ready to Revive Your BBQ?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Book our professional BBQ cleaning service and enjoy perfect grilling all season long!
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-[#fb5a25] rounded-md font-medium transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
            >
              Book Your BBQ Clean
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 