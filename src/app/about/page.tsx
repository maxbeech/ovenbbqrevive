import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Banstead Athletic FC | Our History & Heritage',
  description: 'Discover the rich history of Banstead Athletic FC, from our founding in 1944 to our present day community-focused football club in Surrey.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/media/Playing football/2023-07-12_22-46-41_UTC_5.jpg"
          alt="Banstead Athletic FC Historic Moment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            Our Story
          </h1>
        </div>
      </section>

      {/* History Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">A Rich Heritage</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 1944 as Banstead Juniors, our club has grown from humble beginnings
              to become a cornerstone of the local community. Known affectionately as "The Yellows,"
              we've maintained our traditional amber and black colors throughout our history.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our journey has seen us compete in various leagues, including the Surrey Senior League,
              where we achieved multiple championships in the early 1950s. Today, we continue to
              build on this legacy while embracing modern football development. Based in Chessington, Surrey,
              we are proud to serve our local community.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/media/Playing football/2023-07-12_22-46-41_UTC_6.jpg"
              alt="Historic Banstead Athletic Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To develop and nurture local talent while maintaining our position as a
                competitive force in grassroots football. We strive to create an inclusive
                environment where players can reach their full potential.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To be the leading community football club in Surrey, known for excellence
                in player development, community engagement, and competitive success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Community Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Youth Development</h3>
            <p className="text-gray-700">
              Providing opportunities for young players to develop their skills and love for the game.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Local Engagement</h3>
            <p className="text-gray-700">
              Active participation in community events and initiatives throughout the year.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Grassroots Football</h3>
            <p className="text-gray-700">
              Supporting the growth of football at all levels within our community.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Key Moments</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-bold">1944</div>
              <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
              <div className="flex-1">Club founded as Banstead Juniors</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-bold">1950s</div>
              <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
              <div className="flex-1">Multiple Surrey Senior League championships</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-right font-bold">2006</div>
              <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
              <div className="flex-1">Joined the Southern Combination Football League</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 