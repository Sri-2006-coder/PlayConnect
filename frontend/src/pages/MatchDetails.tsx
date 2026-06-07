import Navbar from "../components/Navbar";
import football from "../assets/football.png";
import { useParams } from "react-router-dom";
import {useState} from "react";
import cricket from "../assets/cricket.png";
import badminton from "../assets/badminton.png";
export default function MatchDetails() {
    const { id } = useParams();
    const [joined, setJoined] = useState(false);
    const matchData: Record<string, any> = {
  "1": {
    title: "Sunday Cricket",
    venue: "RK Beach Ground",
    date: "Sunday, June 15",
    time: "7:00 AM",
    players: "7 / 11",
    host: "Rahul Sharma",
    age: 22,
    rating: 4.8,
    image: cricket,
    about:
      "Friendly cricket match for local players. Looking for enthusiastic batsmen and bowlers.",
    phone:"9866420471",
  },

  "2": {
    title: "Evening Football",
    venue: "City Stadium",
    date: "Saturday, June 14",
    time: "6:30 PM",
    players: "14 / 22",
    host: "Arjun Kumar",
    age: 24,
    rating: 4.9,
    image: football,
    about:
      "Competitive football game for intermediate players. Bring football shoes and water.",
    phone:"9086457812",
  },

  "3": {
    title: "Badminton Doubles",
    venue: "Sports Arena",
    date: "Friday, June 13",
    time: "5:00 PM",
    players: "3 / 4",
    host: "Priya Reddy",
    age: 21,
    rating: 4.7,
    image: badminton,
    about:
      "Casual doubles badminton match. All skill levels are welcome.",
    phone:"8964532190",
  },
};
const match = matchData[id || "1"];
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <div className="pt-28 max-w-7xl mx-auto px-6">

        <div className="overflow-hidden rounded-3xl border border-white/10">

        <img
  src={match.image}
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

              <p>👥 {match.players} Players Joined</p>

            </div>

            {/* ABOUT */}
            <div className="mt-10">

              <h2 className="text-3xl font-bold mb-4">
                About Match
              </h2>

              <p className="text-gray-400 leading-8">
                {match.about}
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

                <p>👤 {match.host}</p>

                <p>🎂 Age: {match.age}</p>

                <p>⭐ Rating: {match.rating} /5</p>

                <p>🏆 Matches Hosted: 15</p>

                <p>📍 Visakhapatnam</p>

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
    onClick={() => setJoined(true)}
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
        👤 Host: {match.host}
      </p>

      <p>
        📞 Contact: {match.phone}
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