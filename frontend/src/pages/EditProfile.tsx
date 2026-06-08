import Navbar from "../components/Navbar";

export default function EditProfile() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-28 max-w-4xl mx-auto px-6">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">

          <h1 className="text-5xl font-extrabold mb-3">
            Edit <span className="text-green-400">Profile</span>
          </h1>

          <p className="text-gray-400 mb-10">
            Update your PlayConnect information.
          </p>

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400"
              />
            </div>

            {/* Age + Gender */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 text-gray-300">
                  Age
                </label>

                <input
                  type="number"
                  placeholder="20"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Gender
                </label>

                <select
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400"
                >
                  <option className="bg-black">Male</option>
                  <option className="bg-black">Female</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>

            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 text-gray-300">
                Location
              </label>

              <input
                type="text"
                placeholder="Visakhapatnam"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400"
              />
            </div>

            {/* Favorite Sport */}
            <div>
              <label className="block mb-2 text-gray-300">
                Favorite Sport
              </label>

              <select
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400"
              >
                <option className="bg-black">Cricket</option>
                <option className="bg-black">Football</option>
                <option className="bg-black">Badminton</option>
              </select>
            </div>

            {/* Bio */}
            <div>
              <label className="block mb-2 text-gray-300">
                Bio
              </label>

              <textarea
                rows={5}
                placeholder="Tell others about yourself..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-green-400 resize-none"
              ></textarea>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl text-black font-bold text-lg transition"
            >
              Save Changes
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}