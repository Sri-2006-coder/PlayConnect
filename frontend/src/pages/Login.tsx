import { Link } from "react-router-dom";
import loginImg from "../assets/login.png";
import Navbar from "../components/Navbar";

export default function Login() {
  <>
  <Navbar />

  <div className="min-h-screen ..."></div>
  </>
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6 py-20 relative">

      {/* BG GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-green-500/20 blur-[180px] rounded-full left-[-100px] top-[-100px]"></div>

      <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-2xl">

        {/* LEFT IMAGE */}
        <div className="hidden md:block relative">

          <img
            src={loginImg}
            alt="Login"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

        </div>

        {/* RIGHT FORM */}
        <div className="p-10 md:p-16 flex flex-col justify-center">
<h1 className="text-5xl font-extrabold mb-3 text-white">
  Welcome <span className="text-green-400">Back!</span>
</h1>

          <p className="text-gray-400 mb-10">
            Login to continue your sports journey.
          </p>

          <form className="space-y-6">

            <div>

              <div className="flex justify-between mb-2">

  <label className="text-gray-300">
    Email
  </label>

</div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">

                <label className="text-gray-300">
                  Password
                </label>

                <button
                  type="button"
                  className="text-green-400 text-sm hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              />
            </div>

            <button
              className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold text-lg transition"
            >
              Login
            </button>

          </form>

          <p className="mt-8 text-gray-400 text-center">
            Don’t have an account?{" "}

            <Link
              to="/register"
              className="text-green-400 hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}