import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'News & Updates | Banstead Athletic FC',
  description: 'Stay up to date with the latest news, match reports, and updates from Banstead Athletic FC.',
};

// This would typically come from an API or CMS
const newsItems = [
  {
    id: 1,
    title: 'Historic Surrey Football Club Left Without A Home Ground',
    date: '2025-01-25',
    category: 'Club News',
    image: '/media/Playing football/2025-03-29_20-56-31_UTC_2.jpg',
    excerpt: 'Banstead Athletic FC faces an uncertain future as they search for a new home ground.',
    content: 'Banstead Athletic FC, a historic Surrey football club, is currently without a home ground. The club is actively working to secure a new venue and maintain its presence in the community.',
  },
  {
    id: 2,
    title: 'Join Our Team',
    date: '2024-10-06',
    category: 'Club News',
    image: '/media/Playing football/2025-03-08_21-25-43_UTC_1.jpg',
    excerpt: 'We are looking for passionate individuals to join our team and help grow the club.',
    content: 'Banstead Athletic FC is seeking dedicated individuals to join our team. We offer opportunities in various roles including coaching, administration, and volunteer positions.',
  },
  {
    id: 3,
    title: 'Club Statement',
    date: '2024-08-30',
    category: 'Club News',
    image: '/media/Playing football/2025-03-22_19-41-45_UTC.jpg',
    excerpt: 'An important update from the club regarding our future plans and developments.',
    content: 'The club has released an important statement regarding its future plans and developments. This includes updates on our search for a new home ground and our commitment to the community.',
  },
  {
    id: 4,
    title: 'Updates coming soon',
    date: '2024-08-30',
    category: 'Club News',
    image: '/media/Playing football/2025-03-22_19-41-45_UTC.jpg',
    excerpt: 'Check back soon for more updates from Banstead Athletic',
    content: 'We are working on bringing you more updates about Banstead Athletic FC. Stay tuned for the latest news and developments.',
  },
];

const categories = [
  'All News',
  'Match Reports',
  'Club News',
  'Youth Football',
  'Community',
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/Playing football/2025-03-22_19-41-45_UTC.jpg"
          alt="Banstead Athletic FC News"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            News & Updates
          </h1>
        </div>
      </section>

      {/* News Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white text-gray-800 hover:bg-amber-900 hover:text-white transition-colors duration-300 shadow-md"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured News */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-900 text-white px-4 py-2 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">
                  {new Date(item.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <button className="text-amber-900 font-semibold hover:text-amber-700 transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.slice(2).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-900 text-white px-4 py-2 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-600 mb-2">
                  {new Date(item.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{item.excerpt}</p>
                <button className="text-amber-900 font-semibold hover:text-amber-700 transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-amber-900 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter for the latest news and updates from Banstead Athletic FC.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-amber-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
} 