import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Community | Banstead Athletic FC',
  description: 'Discover how Banstead Athletic FC serves our local community through youth development, community programs, and grassroots football initiatives.',
};

// This would typically come from an API or CMS
const communityPrograms = [
  {
    title: 'Youth Development',
    description: 'Our comprehensive youth program nurtures local talent from ages 8-18, focusing on technical skills, tactical understanding, and personal growth.',
    image: '/media/Playing football/2023-07-12_22-46-41_UTC_2.jpg',
    features: [
      'Professional coaching staff',
      'Regular training sessions',
      'Competitive fixtures',
      'Player development pathways',
    ],
  },
  {
    title: 'Community Outreach',
    description: 'We actively engage with our local community through various initiatives and partnerships, promoting health, fitness, and social inclusion.',
    image: '/media/Playing football/2023-07-12_22-46-41_UTC_3.jpg',
    features: [
      'School partnerships',
      'Local charity events',
      'Community tournaments',
      'Health and fitness programs',
    ],
  },
  {
    title: 'Grassroots Football',
    description: 'Supporting the growth of football at all levels within our community, from beginners to competitive players.',
    image: '/media/Playing football/2023-07-12_22-46-41_UTC_4.jpg',
    features: [
      'Beginner-friendly sessions',
      'Women\'s football programs',
      'Walking football',
      'Inclusive football sessions',
    ],
  },
];

const testimonials = [
  {
    quote: "Banstead Athletic FC has been instrumental in my son's development, both as a player and as a person. The coaches are dedicated and passionate.",
    author: "Sarah Thompson",
    role: "Parent",
  },
  {
    quote: "The club's commitment to community engagement is outstanding. They've created a welcoming environment for everyone, regardless of age or ability.",
    author: "James Wilson",
    role: "Local Resident",
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/media/Playing football/2023-07-12_22-46-41_UTC_5.jpg"
          alt="Banstead Athletic FC Community"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Our Community
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Building stronger communities through football
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Part of Something Bigger</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Banstead Athletic FC, we believe football has the power to bring people together,
            create opportunities, and build stronger communities. Our commitment to community
            engagement goes beyond the pitch, as we strive to make a positive impact in
            Chessington and surrounding areas.
          </p>
        </div>
      </section>

      {/* Community Programs */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Community Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {communityPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-amber-600 mr-2"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're a player, volunteer, or supporter, there are many ways to
              get involved with Banstead Athletic FC and make a difference in our
              community.
            </p>
            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-amber-600 text-white font-bold rounded-md hover:bg-amber-700 transition-colors"
              >
                Join Our Community
              </Link>
              <Link
                href="/sponsors"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-800 transition-colors ml-4"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/media/Playing football/2023-07-12_22-46-41_UTC_6.jpg"
              alt="Get Involved with Banstead Athletic FC"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Community Voices</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-xl text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-amber-900">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">Community Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-24">
              <Image
                src="/media/Sponsors logos/360-skiphire-banner.webp"
                alt="360 Skip Hire"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-24">
              <Image
                src="/media/Sponsors logos/ADBLY-LOGO-JPG.webp"
                alt="Adbly Digital Marketing"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-24">
              <Image
                src="/media/Sponsors logos/brown-signs-logo.webp"
                alt="Brown Signs"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-24">
              <Image
                src="/media/Sponsors logos/wes-electrical-services-logo.webp"
                alt="WES Electrical Services"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 