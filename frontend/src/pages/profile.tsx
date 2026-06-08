import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
export default function Profile() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-28 max-w-6xl mx-auto px-6">

        {/* PROFILE HEADER */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-32 h-32 rounded-full bg-green-500 flex items-center justify-center text-5xl font-bold text-black">
              S
            </div>

            <div>

              <h1 className="text-5xl font-extrabold">
                Sri Harshini
              </h1>

              <p className="text-gray-400 mt-3 text-lg">
                Female • 20 Years
              </p>

              <p className="text-gray-400 mt-2">
                📍 Visakhapatnam
              </p>

              <p className="text-yellow-400 mt-2">
                ⭐ 4.9 Rating
              </p>

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-green-400">12</h2>
            <p className="text-gray-400 mt-3">
              Matches Joined
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-5xl font-bold text-green-400">4</h2>
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

        {/* FAVORITE SPORTS */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            Favorite Sports
          </h2>

          <div className="flex flex-wrap gap-4">

            <div className="bg-green-500/20 text-green-400 px-5 py-3 rounded-xl">
              🏏 Cricket
            </div>

            <div className="bg-green-500/20 text-green-400 px-5 py-3 rounded-xl">
              ⚽ Football
            </div>

            <div className="bg-green-500/20 text-green-400 px-5 py-3 rounded-xl">
              🏸 Badminton
            </div>

          </div>

        </div>

        {/* ABOUT */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">

          <h2 className="text-3xl font-bold mb-6">
            About
          </h2>

          <p className="text-gray-400 leading-8">
            Sports enthusiast who enjoys meeting new players,
            organizing matches, and building a strong sports
            community through PlayConnect.
          </p>

        </div>

        {/* BUTTON */}
       <button
  onClick={() => navigate("/edit-profile")}
  className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold text-black transition"
>
  Edit Profile
</button>

      </div>

    </div>
  );
}