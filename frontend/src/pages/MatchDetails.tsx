import Navbar from "../components/Navbar";
import football from "../assets/football.png";
import cricket from "../assets/cricket.png";
import badminton from "../assets/badminton.png";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MatchDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [joined, setJoined] = useState(false);
  const [match, setMatch] = useState<any>(null);

  const handleJoin = () => {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
      navigate("/login");
      return;
    }

    setJoined(true);
  };

  useEffect(() => {
  fetchMatch();
}, [id]);

const fetchMatch = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/matches/${id}`
    );

    setMatch(response.data);
  } catch (error) {
    console.error(error);
  }
};

if (!match) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      Loading...
    </div>
  );
}

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <div className="pt-28 max-w-7xl mx-auto px-6">

        <div className="overflow-hidden rounded-3xl border border-white/10">

          <img
            src={
  match.sport === "Cricket"
    ? cricket
    : match.sport === "Badminton"
    ? badminton
    : football
}
            alt={match.title}
            className="w-full h-[450px] object-cover"
          />

        </div>

        {/* MATCH DETAILS */}
        <div className="grid lg:grid-cols-3 gap-10 mt-10">

          {/* LEFT */}
          <div className="lg:col-span-2">

            <h1 className="text-5xl font-extrabold">
              {match.title}
            </h1>

            <div className="mt-6 space-y-3 text-gray-300 text-lg">

              <p>📍 {match.venue}</p>

              <p>📅 {match.date}</p>

              <p>⏰ {match.time}</p>
<p>
  👥 {match.currentPlayers} / {match.playersNeeded}
  {" "}Players Joined
</p>

            </div>

            {/* ABOUT */}
            <div className="mt-10">

              <h2 className="text-3xl font-bold mb-4">
                About Match
              </h2>

              <p className="text-gray-400 leading-8">
                {match.description}
              </p>

            </div>

            {/* THINGS TO BRING */}
            <div className="mt-10">

              <h2 className="text-3xl font-bold mb-4">
                Things To Bring
              </h2>

              <ul className="space-y-3 text-gray-300">

                <li>✅ Football Shoes</li>

                <li>✅ Water Bottle</li>

                <li>✅ Sports Wear</li>

              </ul>

            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div>

            {/* HOST CARD */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-bold mb-6">
                Host Information
              </h3>

              <div className="space-y-4">

                <p>👤 {match.hosName}</p>

                <p>📧 {match.hostEmail}</p>

                <p>🏅 Match Host</p>

                <p>🏆 Matches Hosted: 15</p>

                <p>📍 {match.venue}</p>

              </div>

            </div>

            {/* JOIN CARD */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-8">

              <h3 className="text-2xl font-bold mb-4">
                Ready To Play?
              </h3>

              <p className="text-gray-400 mb-6">
                Join this match and connect with nearby players.
              </p>

              {!joined ? (
                <button
                  onClick={handleJoin}
                  className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl text-black font-bold transition"
                >
                  Join Now
                </button>
              ) : (
                <div className="space-y-4">

                  <div className="bg-green-500/20 border border-green-500 rounded-xl p-4">

                    <p className="text-green-400 font-bold">
                      ✅ Successfully Joined
                    </p>

                  </div>

                  <div className="space-y-2 text-gray-300">

                    <p>
                      👤 Host: {match.hostName}
                    </p>

                    <p>
                      📞 Contact: {match.hostPhone}
                    </p>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}