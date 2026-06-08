import { Link } from "react-router-dom";
import { FaFutbol } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4 md:py-5">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">

          <FaFutbol className="text-green-400 text-2xl" />

          <h1 className="text-2xl font-bold text-white m-0">
            Play<span className="text-green-400">Connect</span>
          </h1>

        </Link>

        {/* CENTER NAV */}
        <div className="flex items-center gap-3 md:gap-6 text-white text-sm md:text-base">
          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            to="/matches"
            className="hover:text-green-400 transition"
          >
            Matches
          </Link>

          <Link
            to="/create-match"
            className="hover:text-green-400 transition"
          >
            Create Match
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-green-400 transition"
          >
            Dashboard
          </Link>

           <Link
  to="/profile"
  className="text-white text-lg hover:text-green-400 transition"
>
  Profile
</Link>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-4">

          <Link
            to="/login"
            className="text-white text-sm md:text-base hover:text-green-400 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 px-3 md:px-5 py-2 rounded-xl text-sm md:text-base text-black font-semibold transition"
          >
            Register
          </Link>
     

        </div>

      </div>

    </nav>
  );
}