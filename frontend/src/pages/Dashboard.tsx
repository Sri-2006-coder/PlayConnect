import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-28 max-w-7xl mx-auto px-6">

        {/* Welcome Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">

          <h1 className="text-5xl font-extrabold">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Find players. Join matches. Play more.
          </p>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-green-400">5</h2>
            <p className="text-gray-400 mt-3">
              Matches Joined
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-green-400">2</h2>
            <p className="text-gray-400 mt-3">
              Matches Hosted
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-green-400">3</h2>
            <p className="text-gray-400 mt-3">
              Sports Played
            </p>
          </div>

        </div>

        {/* Upcoming Matches */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Upcoming Matches
          </h2>

          <div className="space-y-4">

            <div className="bg-black/40 rounded-2xl p-5">
              <h3 className="font-bold text-xl">
                Sunday Cricket
              </h3>

              <p className="text-gray-400">
                RK Beach Ground • 7:00 AM
              </p>
            </div>

            <div className="bg-black/40 rounded-2xl p-5">
              <h3 className="font-bold text-xl">
                Evening Football
              </h3>

              <p className="text-gray-400">
                City Stadium • 6:30 PM
              </p>
            </div>

          </div>

        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4 text-gray-300">

            <p>✅ Joined Badminton Doubles</p>

            <p>✅ Created Evening Football Match</p>

            <p>✅ Joined Sunday Cricket</p>

          </div>

        </div>

      </div>

    </div>
  );
}