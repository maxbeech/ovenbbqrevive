'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/pexels-rdne-8522744.jpg"
            alt="Privacy Policy"
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Privacy Policy
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 max-w-2xl"
              >
                How we collect, use, and protect your information
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">
                  Last Updated: April 15, 2023
                </p>
                <p className="text-gray-700 mb-6">
                  This Privacy Policy describes how Oven BBQ Revive (referred to as "we," "us," or "our") collects, uses, and discloses your personal information when you visit our website, use our services, or communicate with us.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700">
                  We collect several types of information from and about users of our website and services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2"><strong>Personal Information:</strong> This includes your name, email address, phone number, postal address, and any other information you provide when you contact us, book our services, or create an account.</li>
                  <li className="mb-2"><strong>Service Information:</strong> Details about the services you request, your service history, and scheduling preferences.</li>
                  <li className="mb-2"><strong>Payment Information:</strong> When you make a payment for our services, our payment processors collect necessary billing information. We do not store complete credit card details on our servers.</li>
                  <li className="mb-2"><strong>Technical Information:</strong> When you visit our website, we automatically collect certain information about your device, including IP address, browser type, and operating system.</li>
                  <li><strong>Usage Information:</strong> Information about how you use our website, such as pages visited, time spent on pages, and links clicked.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">Providing, maintaining, and improving our services</li>
                  <li className="mb-2">Processing and fulfilling your service requests</li>
                  <li className="mb-2">Communicating with you about appointments, services, and promotional offers</li>
                  <li className="mb-2">Responding to your inquiries and customer service requests</li>
                  <li className="mb-2">Monitoring and analyzing website usage and trends</li>
                  <li className="mb-2">Detecting, preventing, and addressing technical issues or fraudulent activities</li>
                  <li>Complying with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-gray-700">
                  We may share your personal information in the following situations:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2"><strong>Service Providers:</strong> We share information with third-party vendors, service providers, and contractors who perform services on our behalf.</li>
                  <li className="mb-2"><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li className="mb-2"><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
                  <li><strong>With Your Consent:</strong> We may share your information in any other circumstances where we have your consent.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Your Rights</h2>
                <p className="text-gray-700">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">The right to access personal information we hold about you</li>
                  <li className="mb-2">The right to request correction of inaccurate information</li>
                  <li className="mb-2">The right to request deletion of your information</li>
                  <li className="mb-2">The right to object to or restrict certain processing activities</li>
                  <li>The right to data portability</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  To exercise these rights, please contact us using the details provided at the end of this policy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Cookies and Similar Technologies</h2>
                <p className="text-gray-700 mb-6">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings and other tools.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Third-Party Links</h2>
                <p className="text-gray-700 mb-6">
                  Our website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any sites you visit.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-700 mb-6">
                  Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Changes to this Privacy Policy</h2>
                <p className="text-gray-700 mb-6">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 mb-2">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Email:</strong> info@ovenbbqrevive.co.uk<br />
                  <strong>Phone:</strong> 01234 567890<br />
                  <strong>Address:</strong> Guildford, Surrey, UK
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Have Questions About Our Privacy Practices?
            </h2>
            <p className="text-gray-700 mb-8">
              We're committed to protecting your privacy and are happy to answer any questions you may have.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 bg-[#fb5a25] hover:bg-[#e04d1d] text-white rounded-md font-medium transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 