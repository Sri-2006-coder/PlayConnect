import { useNavigate } from "react-router-dom";
export default function Hero() {
    const navigate = useNavigate();
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  
        <img
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
          alt="sports"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        <div className="absolute inset-0 bg-black/70"></div>
  
        <div className="absolute w-96 h-96 bg-green-500 blur-[180px] opacity-20 rounded-full"></div>
  
        <div className="relative text-center px-6">
  
          <h1 className="text-7xl md:text-8xl font-extrabold text-white">
            Find Players.
          </h1>
  
          <h1 className="text-7xl md:text-8xl font-extrabold text-green-400">
            Join Matches.
          </h1>
  
          <h1 className="text-7xl md:text-8xl font-extrabold text-white">
            Play More.
          </h1>
  
          <p className="max-w-2xl mx-auto mt-8 text-gray-300 text-lg">
            Connect with nearby sports enthusiasts and never miss a game again.
          </p>
  
          <div className="mt-10 flex justify-center gap-5">
          <button
  onClick={() => navigate("/CreateMatch")}
  className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition"
>
  Create Match
</button>
            <button className="border border-white/20 hover:border-green-400 px-8 py-4 rounded-xl">
              Explore Matches
            </button>
  
          </div>
  
        </div>
  
      </section>
    );
  }