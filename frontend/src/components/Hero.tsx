import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

  {/* Background image */}
  <img
    src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
    alt="sports"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* CONTENT */}
  <div className="relative z-20 w-full min-h-screen flex flex-col justify-center items-center text-center px-6">

    <h1 className="text-7xl font-extrabold text-white">Find Players.</h1>
    <h1 className="text-7xl font-extrabold text-green-400">Join Matches.</h1>
    <h1 className="text-7xl font-extrabold text-white">Play More.</h1>

    <p className="max-w-2xl mt-8 text-gray-300 text-lg">
      Connect with nearby sports enthusiasts and never miss a game again.
    </p>

    <div className="mt-10 flex gap-5">
      <button
        onClick={() => navigate("/create-match")}
        className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold"
      >
        Create Match
      </button>

      <button className="border border-white/20 px-8 py-4 rounded-xl">
        Explore Matches
      </button>
    </div>

  </div>

</section>
  );
}