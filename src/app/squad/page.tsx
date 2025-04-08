import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Squad & Staff | Banstead Athletic FC',
  description: 'Meet the players and staff of Banstead Athletic FC. View player profiles, statistics, and learn about our coaching team.',
};

// This would typically come from an API or database
const players = [
  {
    name: 'John Smith',
    position: 'Goalkeeper',
    number: '1',
    image: '/media/Playing football/2023-07-12_22-46-41_UTC_2.jpg',
    stats: {
      appearances: 25,
      cleanSheets: 8,
      goalsConceded: 32,
    },
  },
  {
    name: 'Mike Johnson',
    position: 'Defender',
    number: '4',
    image: '/media/Playing football/2023-07-12_22-46-41_UTC_3.jpg',
    stats: {
      appearances: 28,
      goals: 2,
      assists: 3,
    },
  },
  // Add more players as needed
];

const staff = [
  {
    name: 'Keith Ward',
    role: 'First Team Manager',
    image: '/media/staff/KEITH.webp',
    bio: 'Leading our first team with extensive experience in football management.',
  },
  {
    name: 'Sean Edwards',
    role: 'Management Support Manager',
    image: '/media/staff/SEAN.webp',
    bio: 'Providing crucial support to the management team and club operations.',
  },
  {
    name: 'Samantha Baker',
    role: 'Club Physiotherapist',
    image: '/media/staff/SAMANTHA.webp',
    bio: 'Ensuring our players stay fit and healthy with professional physiotherapy care.',
  },
];

export default function SquadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/Playing football/2023-07-12_22-46-41_UTC_2.jpg"
          alt="Banstead Athletic FC Squad"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            Squad & Staff
          </h1>
        </div>
      </section>

      {/* First Team Squad */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">First Team Squad</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-900 text-white px-4 py-2 rounded-full">
                  #{player.number}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{player.name}</h3>
                <p className="text-amber-900 font-semibold mb-4">{player.position}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(player.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-2xl font-bold text-amber-900">{value}</div>
                      <div className="text-sm text-gray-600">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Management Team */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Management Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-[400px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'top' }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-amber-900 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Youth Development */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">Youth Development</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            At Banstead Athletic FC, we are committed to developing the next generation
            of football talent. Our youth development program focuses on technical skills,
            tactical understanding, and personal growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Under-18s</h3>
              <p className="text-gray-700">
                Competitive youth team playing in the Southern Counties Youth League.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Under-16s</h3>
              <p className="text-gray-700">
                Development squad focusing on technical and tactical training.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Academy</h3>
              <p className="text-gray-700">
                Youth academy for players aged 8-15, emphasizing skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply to Join Team */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Apply to Join Our Team</h2>
            <p className="text-lg text-gray-700 mb-8">
              Are you interested in joining Banstead Athletic FC? We're always looking for talented players
              who share our passion for football and commitment to excellence. Whether you're an experienced
              player or new to the game, we welcome applications from all skill levels.
            </p>
            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-amber-600 text-white font-bold rounded-md hover:bg-amber-700 transition-colors"
              >
                Apply Now
              </Link>
              <p className="text-sm text-gray-600">
                Please include your playing experience, preferred position, and any relevant achievements in your application.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/media/Playing football/2023-07-12_22-46-41_UTC_4.jpg"
              alt="Join Banstead Athletic FC"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
} 