import { Link } from "react-router-dom";
import registerImg from "../assets/register.png";

export default function Register() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden relative">

      {/* BG GLOW */}
      <div className="absolute w-[450px] h-[450px] bg-green-500/20 blur-[200px] rounded-full right-[-120px] bottom-[-120px]"></div>

      <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-2xl">

        {/* FORM */}
        <div className="p-10 md:p-16 flex flex-col justify-center">

          <h1 className="text-5xl font-extrabold mb-3">
            Create <span className="text-green-400">Account</span>
          </h1>

          <p className="text-gray-400 mb-10">
            Join PlayConnect and start finding matches.
          </p>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              />
            </div>

            <button
              className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold text-lg transition"
            >
              Register
            </button>

          </form>

          <p className="mt-8 text-gray-400 text-center">
            Already have an account?{" "}

            <Link
              to="/login"
              className="text-green-400 hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

        {/* IMAGE */}
        <div className="hidden md:block relative">

          <img
            src={registerImg}
            alt="Register"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

        </div>

      </div>

    </div>
  );
}