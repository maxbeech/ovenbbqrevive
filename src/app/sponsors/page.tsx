import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sponsors & Partners | Banstead Athletic FC',
  description: 'Meet our sponsors and learn about sponsorship opportunities with Banstead Athletic FC. Join our community of supporters.',
};

// This would typically come from an API or CMS
const sponsors = [
  {
    name: '360 Skip Hire',
    logo: '/media/Sponsors logos/360-skiphire-banner.webp',
    tier: 'Main Sponsor',
    description: 'Proud main sponsor of Banstead Athletic FC.',
  },
  {
    name: 'Adbly Digital Marketing',
    logo: '/media/Sponsors logos/ADBLY-LOGO-JPG.webp',
    tier: 'Gold Sponsor',
    description: 'Supporting grassroots football in our community.',
  },
  {
    name: 'Brown Signs',
    logo: '/media/Sponsors logos/brown-signs-logo.webp',
    tier: 'Gold Sponsor',
    description: 'Supporting grassroots football in our community.',
  },
  {
    name: 'WES Electrical Services',
    logo: '/media/Sponsors logos/wes-electrical-services-logo.webp',
    tier: 'Gold Sponsor',
    description: 'Supporting grassroots football in our community.',
  },
  {
    name: 'Additional Sponsor',
    logo: '/media/Sponsors logos/IMG_0024.png',
    tier: 'Silver Sponsor',
    description: 'Supporting grassroots football in our community.',
  },
  {
    name: 'Additional Sponsor',
    logo: '/media/Sponsors logos/IMG_2493.jpeg',
    tier: 'Silver Sponsor',
    description: 'Supporting grassroots football in our community.',
  },
  {
    name: 'Additional Sponsor',
    logo: '/media/Sponsors logos/34cc2ede-3b5d-4bbb-b1b4-c961c876ce89.webp',
    tier: 'Silver Sponsor',
    description: 'Supporting grassroots football in our community.',
  },
];

const sponsorshipTiers = [
  {
    name: 'Main Sponsor',
    price: '£5,000',
    benefits: [
      'Logo on first team shirts',
      'Premium advertising space',
      'Match day hospitality',
      'Social media promotion',
    ],
  },
  {
    name: 'Gold Sponsor',
    price: '£2,500',
    benefits: [
      'Logo on training wear',
      'Advertising boards',
      'Match day tickets',
      'Social media mentions',
    ],
  },
  {
    name: 'Silver Sponsor',
    price: '£1,000',
    benefits: [
      'Advertising boards',
      'Match day tickets',
      'Social media mentions',
    ],
  },
];

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/Playing football/2023-07-12_22-46-41_UTC_3.jpg"
          alt="Banstead Athletic FC Sponsors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            Our Sponsors
          </h1>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Current Sponsors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-32 mb-6">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{sponsor.name}</h3>
              <p className="text-amber-900 font-semibold mb-4">{sponsor.tier}</p>
              <p className="text-gray-700">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold mb-8 text-center">Sponsorship Opportunities</h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Join our community of sponsors and support grassroots football in Surrey.
          Choose from our range of sponsorship packages or contact us to discuss
          custom opportunities.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
              <div className="text-3xl font-bold text-amber-900 mb-6">
                {tier.price}
                <span className="text-base text-gray-600 font-normal">/year</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-amber-900 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-amber-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Sponsorship */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Custom Sponsorship</h2>
              <p className="text-gray-700 mb-6">
                Looking for something different? We offer flexible sponsorship
                packages tailored to your needs. Contact us to discuss custom
                opportunities that align with your business goals.
              </p>
              <button className="bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300">
                Contact Us
              </button>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/media/Playing football/2023-07-12_22-46-41_UTC_4.jpg"
                alt="Custom Sponsorship Opportunities"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Sponsor Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-4">
              "Sponsoring Banstead Athletic FC has been a fantastic way to connect
              with our local community while supporting grassroots football."
            </p>
            <div className="font-semibold">John Smith</div>
            <div className="text-amber-900">360 Skip Hire</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-4">
              "The club's commitment to youth development and community engagement
              aligns perfectly with our values. It's been a rewarding partnership."
            </p>
            <div className="font-semibold">Sarah Johnson</div>
            <div className="text-amber-900">Adbly Digital Marketing</div>
          </div>
        </div>
      </section>
    </main>
  );
} 