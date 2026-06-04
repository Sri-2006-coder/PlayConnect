import createImg from "../assets/matchp.png";

export default function CreateMatch() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden flex items-center justify-center">

      {/* BG GLOW */}
      <div className="absolute top-[-120px] right-[-100px] w-[450px] h-[450px] bg-green-500/20 blur-[200px] rounded-full"></div>

      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-10 md:p-14">

          <h1 className="text-5xl font-extrabold mb-3">
            Create Match
          </h1>

          <p className="text-gray-400 mb-10">
            Organize games and invite nearby players.
          </p>

          <form className="space-y-6">

            {/* SPORT */}
            <div>

              <label className="block mb-2 text-gray-300">
                Sport
              </label>

              <select
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              >
                <option className="bg-black">Football</option>
                <option className="bg-black">Cricket</option>
                <option className="bg-black">Badminton</option>
              </select>

            </div>

            {/* TITLE */}
            <div>

              <label className="block mb-2 text-gray-300">
                Match Title
              </label>

              <input
                type="text"
                placeholder="Enter match title"
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              />

            </div>

            {/* VENUE */}
            <div>

              <label className="block mb-2 text-gray-300">
                Venue
              </label>

              <input
                type="text"
                placeholder="Enter venue"
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              />

            </div>

            {/* DATE + TIME */}
            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="block mb-2 text-gray-300">
                  Date
                </label>

                <input
                  type="date"
                  className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
                />

              </div>

              <div>

                <label className="block mb-2 text-gray-300">
                  Time
                </label>

                <input
                  type="time"
                  className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
                />

              </div>

            </div>

            {/* PLAYERS */}
            <div>

              <label className="block mb-2 text-gray-300">
                Max Players
              </label>

              <input
                type="number"
                placeholder="22"
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white"
              />

            </div>

            {/* DESCRIPTION */}
            <div>

              <label className="block mb-2 text-gray-300">
                Additional Info
              </label>

              <textarea
                rows={4}
                placeholder="Write match details..."
                className="w-full bg-white/5 border border-white/10 focus:border-green-400 outline-none rounded-xl px-5 py-4 text-white resize-none"
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl text-lg font-bold transition"
            >
              Create Match
            </button>

          </form>

        </div>

        {/* RIGHT PREVIEW */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] overflow-hidden">

          <div className="relative h-full">

            <img
              src={createImg}
              alt="Create Match"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            {/* MATCH PREVIEW CARD */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-md border border-white/10 rounded-3xl p-8">

              <p className="text-green-400 font-semibold mb-2">
                Match Preview
              </p>

              <h2 className="text-4xl font-bold mb-3">
                Evening Football
              </h2>

              <div className="space-y-3 text-gray-300">

                <p>📍 City Stadium</p>

                <p>📅 Sunday • 6:30 PM</p>

                <p>👥 14 / 22 Players Joined</p>

              </div>

              <button className="mt-8 w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold transition">
                Publish Match
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}