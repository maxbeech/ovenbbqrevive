'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/cleaning-1920w-1024x768-1.webp"
            alt="Contact Us"
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
                Contact Us
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl"
              >
                Get in touch to book your service or request more information
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below, and we'll get back to you as soon as possible to arrange your service.
              </p>

              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We'll be in touch shortly.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                  There was a problem sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb5a25] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb5a25] focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb5a25] focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb5a25] focus:border-transparent bg-white"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Oven Cleaning">Oven Cleaning</option>
                    <option value="BBQ Cleaning">BBQ Cleaning</option>
                    <option value="Hob Cleaning">Hob Cleaning</option>
                    <option value="Extractor Cleaning">Extractor Cleaning</option>
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Other">Other (please specify)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb5a25] focus:border-transparent"
                    placeholder="Please provide details about your service requirements, preferred dates, or any questions you have."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#fb5a25] hover:bg-[#e04d1d] text-white rounded-md font-medium transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                You can also reach us directly using the contact details below or visit our business during opening hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#fb5a25]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaPhone className="h-5 w-5 text-[#fb5a25]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">Call us directly to book your service</p>
                    <a href="tel:+441234567890" className="text-[#fb5a25] hover:underline font-medium">01234 567890</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#fb5a25]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaEnvelope className="h-5 w-5 text-[#fb5a25]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">Send us an email anytime</p>
                    <a href="mailto:info@ovenbbqrevive.co.uk" className="text-[#fb5a25] hover:underline font-medium">info@ovenbbqrevive.co.uk</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#fb5a25]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="h-5 w-5 text-[#fb5a25]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Based in Surrey, serving all surrounding areas</p>
                    <p className="text-gray-700">Surrey, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[#fb5a25]/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaClock className="h-5 w-5 text-[#fb5a25]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Business Hours</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex justify-between"><span>Monday - Friday:</span> <span>8:00 AM - 6:00 PM</span></li>
                      <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 4:00 PM</span></li>
                      <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service Area</h3>
                <p className="text-gray-600 mb-4">
                  We provide our services throughout Surrey and parts of neighboring counties, including:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Guildford', 'Woking', 'Farnham', 'Leatherhead',
                    'Dorking', 'Reigate', 'Redhill', 'Epsom',
                    'Esher', 'Weybridge', 'Camberley', 'Godalming',
                  ].map((area, index) => (
                    <div key={index} className="text-gray-700">• {area}</div>
                  ))}
                </div>
                <p className="mt-4 text-gray-600">
                  Not sure if we cover your area? Please get in touch to check availability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our services and booking process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How far in advance should I book my cleaning service?',
                answer: 'We recommend booking at least 1-2 weeks in advance to secure your preferred date and time. However, we do our best to accommodate last-minute bookings when possible.',
              },
              {
                question: 'How long will the cleaning service take?',
                answer: 'The duration depends on the specific service and the condition of your appliance. Generally, an oven cleaning takes 1-2 hours, a BBQ cleaning 1-3 hours, and a hob or extractor cleaning about 1 hour.',
              },
              {
                question: 'Do I need to prepare anything before your arrival?',
                answer: 'For most services, we ask that the appliance is cool and has basic access. For BBQ cleaning, please ensure the BBQ is cool and accessible. No extensive preparation is needed - we bring all necessary equipment and cleaning solutions.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, credit/debit cards, and bank transfers. Payment is typically collected upon completion of the service.',
              },
              {
                question: 'Do you offer any guarantees on your service?',
                answer: 'Yes, we offer a 100% satisfaction guarantee. If you\'re not happy with the results, we\'ll return to address any issues at no additional cost.',
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
              Ready to Book Your Cleaning Service?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Our friendly team is ready to help you restore your appliances to their former glory
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+441234567890" 
                className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-[#fb5a25] rounded-md font-medium transition-colors duration-300 text-lg shadow-lg hover:shadow-xl flex items-center"
              >
                <FaPhone className="mr-2" /> Call Us Now
              </a>
              <Link 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-md font-medium transition-colors duration-300 text-lg"
              >
                Send a Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 