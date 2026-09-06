import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MatchCard from "../components/MatchCard";

import cricket from "../assets/cricket.png";
import football from "../assets/football.png";
import badminton from "../assets/badminton.png";

export default function Matches() {
 const [search, setSearch] = useState("");
const [sportFilter, setSportFilter] = useState("All");
const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
  fetchMatches();
}, []);

const fetchMatches = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/matches"
    );

    setMatches(response.data);
  } catch (error) {
    console.error(error);
  }
};

  const filteredMatches = matches.filter((match) => {
    const matchesSearch =
      (match.title || "").toLowerCase().includes(search.toLowerCase()) ||
      (match.venue || "").toLowerCase().includes(search.toLowerCase());

    const matchesSport =
      sportFilter === "All" || match.sport === sportFilter;

    return matchesSearch && matchesSport;
  });

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-32 px-6 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <h1 className="text-6xl font-extrabold">
            Browse <span className="text-green-400">Matches</span>
          </h1>

          <p className="text-gray-400 mt-4">
            Find players and join exciting games around you.
          </p>

        </div>

        {/* SEARCH */}
        <div className="mb-8">

          <input
            type="text"
            placeholder="Search by title or venue..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-green-400"
          />

        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 mb-12">

          {["All", "Football", "Cricket", "Badminton"].map((sport) => (
            <button
              key={sport}
              onClick={() => setSportFilter(sport)}
              className={`px-6 py-3 rounded-xl transition ${
                sportFilter === sport
                  ? "bg-green-500 text-black font-bold"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {sport}
            </button>
          ))}

        </div>

        {/* MATCH GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

         {filteredMatches.map((match) => (
  <MatchCard
    key={match.id}
    id={match.id}
    image={football}
    title={match.title}
    venue={match.venue}
    players={`${match.currentPlayers} / ${match.playersNeeded}`}
  />
))}

        </div>

      </div>

    </div>
  );
}