import { Link } from "react-router-dom";
import { FaFutbol } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full flex justify-between items-center px-12 py-6">

        <Link to="/" className="flex items-center gap-3">
          <FaFutbol className="text-green-400 text-3xl" />

          <h1 className="text-white text-4xl font-bold">
            PlayConnect
          </h1>
        </Link>

        <div className="flex items-center gap-6">

          <Link
            to="/login"
            className="text-white text-lg hover:text-green-400 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-black font-semibold transition"
          >
            Register
          </Link>


        </div>

      </div>
    </nav>
  );
}