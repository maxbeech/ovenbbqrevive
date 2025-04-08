import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Fixtures & Results | Banstead Athletic FC',
  description: 'View upcoming fixtures and recent results for Banstead Athletic FC. Stay up to date with our latest matches and performance.',
};

// This would typically come from an API or database
const fixtures = [
  {
    date: '2024-04-20',
    time: '15:00',
    home: true,
    opponent: 'AFC Uckfield Town',
    venue: 'Chalky Lane, Chessington',
    competition: 'Southern Combination League',
  },
  {
    date: '2024-04-27',
    time: '15:00',
    home: false,
    opponent: 'Hassocks',
    venue: 'The Beacon',
    competition: 'Southern Combination League',
  },
  // Add more fixtures as needed
];

const results = [
  {
    date: '2024-04-13',
    home: true,
    opponent: 'Crawley Down Gatwick',
    score: '2-1',
    competition: 'Southern Combination League',
  },
  {
    date: '2024-04-06',
    home: false,
    opponent: 'Eastbourne Town',
    score: '0-3',
    competition: 'Southern Combination League',
  },
  // Add more results as needed
];

// League table data
const leagueTable = [
  {
    position: 1,
    team: 'Crawley Down Gatwick',
    played: 36,
    won: 25,
    drawn: 6,
    lost: 5,
    goalsFor: 82,
    goalsAgainst: 35,
    goalDifference: 47,
    points: 81,
  },
  {
    position: 2,
    team: 'Hassocks',
    played: 36,
    won: 23,
    drawn: 7,
    lost: 6,
    goalsFor: 78,
    goalsAgainst: 38,
    goalDifference: 40,
    points: 76,
  },
  {
    position: 3,
    team: 'Eastbourne Town',
    played: 36,
    won: 22,
    drawn: 8,
    lost: 6,
    goalsFor: 75,
    goalsAgainst: 42,
    goalDifference: 33,
    points: 74,
  },
  {
    position: 4,
    team: 'AFC Uckfield Town',
    played: 36,
    won: 20,
    drawn: 9,
    lost: 7,
    goalsFor: 71,
    goalsAgainst: 45,
    goalDifference: 26,
    points: 69,
  },
  {
    position: 5,
    team: 'Lingfield',
    played: 36,
    won: 19,
    drawn: 8,
    lost: 9,
    goalsFor: 68,
    goalsAgainst: 48,
    goalDifference: 20,
    points: 65,
  },
  {
    position: 6,
    team: 'Broadbridge Heath',
    played: 36,
    won: 18,
    drawn: 9,
    lost: 9,
    goalsFor: 65,
    goalsAgainst: 50,
    goalDifference: 15,
    points: 63,
  },
  {
    position: 7,
    team: 'Banstead Athletic',
    played: 36,
    won: 16,
    drawn: 10,
    lost: 10,
    goalsFor: 62,
    goalsAgainst: 55,
    goalDifference: 7,
    points: 58,
  },
  {
    position: 8,
    team: 'Horsham YMCA',
    played: 36,
    won: 15,
    drawn: 10,
    lost: 11,
    goalsFor: 58,
    goalsAgainst: 52,
    goalDifference: 6,
    points: 55,
  },
  {
    position: 9,
    team: 'Loxwood',
    played: 36,
    won: 14,
    drawn: 11,
    lost: 11,
    goalsFor: 55,
    goalsAgainst: 54,
    goalDifference: 1,
    points: 53,
  },
  {
    position: 10,
    team: 'Littlehampton Town',
    played: 36,
    won: 14,
    drawn: 9,
    lost: 13,
    goalsFor: 52,
    goalsAgainst: 58,
    goalDifference: -6,
    points: 51,
  },
];

export default function FixturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/media/Playing football/2025-03-08_21-25-43_UTC_1.jpg"
          alt="Banstead Athletic FC Match Action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            Fixtures & Results
          </h1>
        </div>
      </section>

      {/* Upcoming Fixtures */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">Upcoming Fixtures</h2>
        <div className="grid gap-6">
          {fixtures.map((fixture, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">
                    {new Date(fixture.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </div>
                  <div className="text-gray-600">{fixture.time}</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">Banstead Athletic</div>
                  <div className="text-sm text-gray-600">vs</div>
                  <div className="font-bold">{fixture.opponent}</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600">{fixture.venue}</div>
                  <div className="text-sm text-amber-900">
                    {fixture.home ? 'Home' : 'Away'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">{fixture.competition}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Results */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold mb-8">Recent Results</h2>
        <div className="grid gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">
                    {new Date(result.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold">
                    {result.home ? 'Banstead Athletic' : result.opponent}
                  </div>
                  <div className="text-2xl font-bold text-amber-900">
                    {result.score}
                  </div>
                  <div className="font-bold">
                    {result.home ? result.opponent : 'Banstead Athletic'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600">
                    {result.home ? 'Home' : 'Away'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">{result.competition}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* League Table Preview */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">League Table</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-amber-900 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Position</th>
                <th className="px-6 py-3 text-left">Team</th>
                <th className="px-6 py-3 text-center">P</th>
                <th className="px-6 py-3 text-center">W</th>
                <th className="px-6 py-3 text-center">D</th>
                <th className="px-6 py-3 text-center">L</th>
                <th className="px-6 py-3 text-center">GF</th>
                <th className="px-6 py-3 text-center">GA</th>
                <th className="px-6 py-3 text-center">GD</th>
                <th className="px-6 py-3 text-center">Pts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leagueTable.map((team) => (
                <tr key={team.position} className={team.team === 'Banstead Athletic' ? 'bg-amber-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {team.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {team.team}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {team.played}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {team.won}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {team.drawn}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {team.lost}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {team.goalsFor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {team.goalsAgainst}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                    {team.goalDifference}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold text-gray-900">
                    {team.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
} 