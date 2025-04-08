'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function Services() {
  // Service card data
  const services = [
    {
      id: "oven-cleaning",
      title: "Oven Cleaning",
      description: "Professional deep cleaning service for all types of ovens, restoring them to like-new condition.",
      image: "/media/cleaning-1920w-1024x768-1.webp",
      benefits: [
        "Complete disassembly and cleaning of all removable parts",
        "Eco-friendly, fume-free cleaning solutions",
        "Removal of stubborn grease, carbon deposits, and burnt-on food",
        "Treatment of door glass to crystal clear condition",
        "Same-day service with no mess left behind"
      ],
      color: "bg-[#fb5a25]"
    },
    {
      id: "bbq-cleaning",
      title: "BBQ Cleaning",
      description: "Specialized cleaning for all types of barbecues, from portable models to built-in outdoor kitchens.",
      image: "/media/pexels-heyho-6956114.jpg",
      benefits: [
        "Complete disassembly for thorough cleaning",
        "Safe removal of grease, carbon, and food residue",
        "Cleaning of burners, grates, drip trays, and exterior",
        "Inspection of components for damage or wear",
        "Reassembly and function testing"
      ],
      color: "bg-blue-600"
    },
    {
      id: "hob-extractor-cleaning",
      title: "Hob & Extractor Cleaning",
      description: "Professional cleaning service for hobs, extractor hoods, and range tops of all types.",
      image: "/media/pexels-rdne-8522751.jpg",
      benefits: [
        "Deep cleaning of all hob surfaces and components",
        "Degreasing of extractor filters, fans, and ductwork",
        "Removal of built-up grease and carbon deposits",
        "Restoration of shine and original appearance",
        "Improved efficiency and safety of your appliances"
      ],
      color: "bg-green-600"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/pexels-liliana-drew-9462307.jpg"
            alt="Our Cleaning Services"
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
                Our Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                Professional cleaning solutions for ovens, BBQs, hobs, and extractors throughout Surrey
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              <h2 className="text-lg font-medium text-[#fb5a25]">Professional Cleaning</h2>
              <div className="h-1 w-16 bg-[#fb5a25] ml-4"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Expert Cleaning Services for Your Home
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of specialized cleaning services to keep your cooking appliances in pristine condition
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute bottom-0 right-0 ${service.color} text-white px-4 py-2 rounded-tl-lg font-medium`}>
                    Popular Service
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheckCircle className="text-[#fb5a25] mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/${service.id}`}
                    className="inline-flex items-center text-[#fb5a25] font-medium hover:text-[#e04d1d] transition-colors"
                  >
                    Learn More <FaArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
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
                <h2 className="text-lg font-medium text-[#fb5a25]">Why Choose Us</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Oven BBQ Revive Difference
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                When you choose Oven BBQ Revive, you're not just getting a cleaning service – you're investing in the longevity and performance of your valuable appliances.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    title: "Eco-Friendly Products",
                    description: "We use only non-toxic, environmentally responsible cleaning solutions that are safe for your family and pets."
                  },
                  {
                    title: "Trained Specialists",
                    description: "Our technicians are fully trained experts who understand the intricacies of different appliance types and models."
                  },
                  {
                    title: "Comprehensive Service",
                    description: "We don't just clean the visible parts – we disassemble and clean every component for a truly thorough result."
                  },
                  {
                    title: "Satisfaction Guarantee",
                    description: "If you're not completely satisfied with our service, we'll return and re-clean your appliance at no additional cost."
                  },
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-300">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-gray-700">
                With over 8 years of experience serving Surrey and surrounding areas, we've built our reputation on exceptional quality, reliability, and customer service.
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
                src="/media/pexels-rdne-8522748.jpg"
                alt="Professional cleaning service"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas We Serve</h2>
              <p className="text-gray-600">
                Proudly serving homes and businesses throughout Surrey and neighboring areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Service Areas</h3>
                <ul className="grid grid-cols-2 gap-2">
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Coverage</h3>
                <ul className="grid grid-cols-2 gap-2">
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
                Not sure if we service your area? Contact us to check availability.
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

      {/* Pricing Guide */}
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
              Pricing Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pricing is transparent and depends on the type of appliance and level of cleaning required. 
              Contact us for a personalized quote.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Starting Prices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      service: "Single Oven",
                      price: "From £65",
                      details: "Standard single oven cleaning",
                    },
                    {
                      service: "Double Oven",
                      price: "From £85",
                      details: "Both cavities thoroughly cleaned",
                    },
                    {
                      service: "Range Cooker",
                      price: "From £110",
                      details: "Depends on size and configuration",
                    },
                    {
                      service: "Standard BBQ",
                      price: "From £75",
                      details: "Portable or standard sized BBQs",
                    },
                    {
                      service: "Large BBQ/Grill",
                      price: "From £95",
                      details: "Larger models or built-in units",
                    },
                    {
                      service: "Hob & Extractor",
                      price: "From £60",
                      details: "Combined service for both appliances",
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 border border-gray-100 rounded-lg hover:border-[#fb5a25] transition-colors duration-300">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.service}</h4>
                      <p className="text-2xl font-bold text-[#fb5a25] mb-2">{item.price}</p>
                      <p className="text-sm text-gray-600">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-gray-50">
                <p className="text-center text-gray-700 mb-6">
                  For a precise quote based on your specific requirements, please get in touch with us directly.
                </p>
                <div className="flex justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-block px-6 py-3 bg-[#fb5a25] hover:bg-[#e04d1d] text-white rounded-md font-medium transition-colors duration-300"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
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
              Ready to Book Your Cleaning Service?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Contact us today to schedule an appointment or request a personalized quote
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-[#fb5a25] rounded-md font-medium transition-colors duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                Book a Service
              </Link>
              <Link 
                href="tel:+441234567890" 
                className="inline-block px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-md font-medium transition-colors duration-300 text-lg"
              >
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 