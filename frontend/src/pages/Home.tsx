import Navbar from "../components/Navbar";
import MatchCard from "../components/MatchCard";
import Footer from "../components/Footer";

import hero from "../assets/hero2.png";
import cricket from "../assets/cricket.png";
import football from "../assets/football.png";
import badminton from "../assets/badminton.png";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      {/* HERO */}
      <section className="relative h-screen">

<img
  src={hero}
  alt="Hero"
  className="absolute inset-0 w-full h-full object-cover object-right"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="absolute left-0 top-0 w-[500px] h-[500px] bg-green-500/20 blur-[180px] rounded-full"></div>

<div className="relative z-10 h-full flex items-center">

  <div className="max-w-7xl mx-auto w-full px-12">

    <div className="max-w-2xl">

      <h1 className="text-7xl md:text-8xl font-extrabold leading-none">
        Find
      </h1>

      <h1 className="text-7xl md:text-8xl font-extrabold text-green-400 leading-none">
        Players
      </h1>

      <h1 className="text-7xl md:text-8xl font-extrabold leading-none">
        Nearby
      </h1>

      <p className="mt-8 text-xl text-gray-300 max-w-xl">
        Join local cricket, football and badminton matches.
        Discover players around you and never miss a game again.
      </p>

      <div className="mt-10 flex gap-5">

        <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold transition">
          Create Match
        </button>

        <button className="border border-white/20 hover:border-green-400 px-8 py-4 rounded-xl transition">
          Explore Matches
        </button>

      </div>

    </div>

  </div>

</div>

</section>

      {/* STATS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">

        <div className="max-w-6xl mx-auto px-8">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 hover:border-green-400 transition-all duration-300">
              <h2 className="text-6xl font-bold text-green-400">
                500+
              </h2>

              <p className="mt-4 text-gray-400">
                Matches Created
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 hover:border-green-400 transition-all duration-300">
              <h2 className="text-6xl font-bold text-green-400">
                1200+
              </h2>

              <p className="mt-4 text-gray-400">
                Players Joined
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 hover:border-green-400 transition-all duration-300">
              <h2 className="text-6xl font-bold text-green-400">
                50+
              </h2>

              <p className="mt-4 text-gray-400">
                Cities Covered
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* MATCHES */}
      <section className="py-24 px-8">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-4">
            Popular Matches
          </h2>

          <p className="text-center text-gray-400 mb-16">
            Join trending matches happening around you.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <MatchCard
              image={cricket}
              title="Sunday Cricket"
              venue="RK Beach Ground"
              players="7 / 11"
            />

            <MatchCard
              image={football}
              title="Evening Football"
              venue="City Stadium"
              players="14 / 22"
            />

            <MatchCard
              image={badminton}
              title="Badminton Doubles"
              venue="Sports Arena"
              players="3 / 4"
            />

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-950">

        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">1️⃣</div>

              <h3 className="text-2xl font-bold mb-3">
                Create Match
              </h3>

              <p className="text-gray-400">
                Create a cricket, football or badminton match.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">2️⃣</div>

              <h3 className="text-2xl font-bold mb-3">
                Invite Players
              </h3>

              <p className="text-gray-400">
                Nearby players can discover and join.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">3️⃣</div>

              <h3 className="text-2xl font-bold mb-3">
                Play & Connect
              </h3>

              <p className="text-gray-400">
                Meet new people and enjoy your favorite sport.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}