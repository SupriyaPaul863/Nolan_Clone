import { FaRunning, FaPiggyBank, FaBolt, FaDiscord } from 'react-icons/fa';

export default function ProductivitySection() {
  return (
    <div className=" text-white px-6 py-16 md:px-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Skyrocket your productivity
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-[#1A1C25] shadow-lg">
            <FaRunning className="text-yellow-400 text-2xl" />
          </div>
          <h3 className="text-xl font-bold">
            90% <span className="font-extrabold">faster</span>
          </h3>
          <p className="text-gray-400">Speed Through Project Completion</p>
        </div>

        {/* Card 2 */}
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-[#1A1C25] shadow-lg">
            <FaPiggyBank className="text-yellow-400 text-2xl" />
          </div>
          <h3 className="text-xl font-bold">
            80% <span className="font-extrabold">Lower Costs</span>
          </h3>
          <p className="text-gray-400">Halve Your Expenses</p>
        </div>

        {/* Card 3 */}
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-[#1A1C25] shadow-lg">
            <FaBolt className="text-yellow-400 text-2xl" />
          </div>
          <h3 className="text-xl font-bold">Exceptional Quality</h3>
          <p className="text-gray-400">Surpass the Highest Industry Standards</p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md tracking-wide transition-all">
          <FaDiscord className="text-xl" />
          Join Us On Discord
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
