'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/pexels-heyho-8134987.jpg"
            alt="Terms of Service"
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
                Terms of Service
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-200 max-w-2xl"
              >
                Please read these terms carefully before using our services
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
                  These Terms of Service ("Terms") govern your use of the website operated by Oven BBQ Revive ("we," "us," or "our") and the cleaning services we provide. By accessing our website, booking our services, or otherwise engaging with us, you agree to be bound by these Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Service Description</h2>
                <p className="text-gray-700 mb-6">
                  Oven BBQ Revive provides professional cleaning services for ovens, BBQs, hobs, extractor hoods, and related appliances. Our services include but are not limited to deep cleaning, degreasing, and restoration of appliances to improve their appearance, hygiene, and functionality.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Booking and Appointments</h2>
                <p className="text-gray-700 mb-2">
                  When booking our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">Provide accurate and complete information about your needs, the appliance(s) to be cleaned, and your contact details.</li>
                  <li className="mb-2">Make the appliance(s) available and accessible at the agreed time and date.</li>
                  <li className="mb-2">Ensure the appliance is cool and not in use for at least 12 hours prior to the scheduled service (where applicable).</li>
                  <li className="mb-2">Provide reasonable access to water and electricity for our technicians to perform the service.</li>
                  <li>Notify us at least 24 hours in advance if you need to reschedule or cancel your appointment.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Pricing and Payment</h2>
                <p className="text-gray-700 mb-2">
                  Our pricing policy includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">All prices are displayed in British Pounds (£) and include VAT where applicable.</li>
                  <li className="mb-2">Payment is due at the time of service completion unless otherwise agreed in advance.</li>
                  <li className="mb-2">We accept payment by cash, credit/debit card, bank transfer, and other methods as specified on our website or during the booking process.</li>
                  <li className="mb-2">For commercial clients, different payment terms may apply as agreed in writing.</li>
                  <li>We reserve the right to modify our prices at any time, but changes will not affect bookings already confirmed.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Cancellation and Refund Policy</h2>
                <p className="text-gray-700 mb-2">
                  Our cancellation and refund policy is as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">Cancellations made more than 24 hours before the scheduled service will not incur a cancellation fee.</li>
                  <li className="mb-2">Cancellations made less than 24 hours before the scheduled service may incur a cancellation fee of up to 50% of the service price.</li>
                  <li className="mb-2">If we are unable to access the appliance or perform the service due to circumstances within your control, we reserve the right to charge a call-out fee.</li>
                  <li className="mb-2">If you are not satisfied with our service, please notify us within 48 hours of service completion. We will re-clean the appliance at no additional cost if we determine our work did not meet our professional standards.</li>
                  <li>For pre-paid services, refunds will be processed according to our refund policy, which may vary depending on the circumstances.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Service Guarantee</h2>
                <p className="text-gray-700 mb-6">
                  We strive to provide the highest quality cleaning services. If you are not completely satisfied with our work, please contact us within 48 hours of service completion. We will return to re-clean the appliance at no additional cost if we determine that our work did not meet our professional standards. This guarantee does not cover subsequent use or soiling of the appliance after our service is complete.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Limitations and Exclusions</h2>
                <p className="text-gray-700 mb-2">
                  Please be aware of the following limitations and exclusions:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">We cannot guarantee the removal of all stains or marks, particularly those that are deeply ingrained or have caused permanent damage to the appliance.</li>
                  <li className="mb-2">Our services do not include repairs, replacement of parts, or addressing mechanical or electrical issues with appliances.</li>
                  <li className="mb-2">We are not responsible for any pre-existing damage to appliances, such as scratches, dents, or functional issues.</li>
                  <li>Any damage caused by our technicians during the normal course of providing cleaning services will be addressed on a case-by-case basis.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. User Conduct</h2>
                <p className="text-gray-700 mb-6">
                  When using our website or interacting with our services, you agree not to engage in any conduct that may disrupt our business operations, harm our reputation, or violate applicable laws. This includes but is not limited to harassment of our staff, submission of false information, or unauthorized use of our intellectual property.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Intellectual Property</h2>
                <p className="text-gray-700 mb-6">
                  All content on our website, including text, graphics, logos, images, and software, is the property of Oven BBQ Revive or our content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 mb-6">
                  To the maximum extent permitted by law, Oven BBQ Revive shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, arising out of or in connection with your use of our services or these Terms. Our total liability for any claims under these Terms shall not exceed the amount you paid for the service giving rise to the claim.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Modifications to Terms</h2>
                <p className="text-gray-700 mb-6">
                  We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last Updated" date at the top of these Terms. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Governing Law</h2>
                <p className="text-gray-700 mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Contact Information</h2>
                <p className="text-gray-700 mb-2">
                  If you have any questions or concerns about these Terms, please contact us at:
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
              Have Questions About Our Terms?
            </h2>
            <p className="text-gray-700 mb-8">
              We're here to help clarify any aspects of our terms of service. Feel free to reach out with any questions.
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