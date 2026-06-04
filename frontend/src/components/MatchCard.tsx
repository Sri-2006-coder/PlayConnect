type Props = {
    image: string;
    title: string;
    venue: string;
    players: string;
  };
  
  export default function MatchCard({
    image,
    title,
    venue,
    players,
  }: Props) {
    return (
      <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-green-400 hover:scale-105 transition-all duration-300">
  
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
  
        <div className="p-6">
  
          <h3 className="text-2xl font-bold">
            {title}
          </h3>
  
          <p className="text-gray-400 mt-3">
            📍 {venue}
          </p>
  
          <p className="text-green-400 mt-2">
            👥 {players}
          </p>
  
          <button className="w-full mt-5 bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold transition">
            Join Match
          </button>
  
        </div>
  
      </div>
    );
  }