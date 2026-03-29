export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Conversation System
        </h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
          + New Entry
        </button>
      </div>

      {/* Filter row */}
      <div className="flex gap-4 mb-6">
        {["All", "Recorded", "Transcribed", "Published"].map((filter) => (
          <button
            key={filter}
            className="text-sm text-gray-500 hover:text-purple-600 font-medium"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Conversation cards */}
      <div className="flex flex-col gap-4">
        {[
          { title: "Building in public", person: "James Corden", status: "Transcribed" },
          { title: "Betting on yourself early", person: "Maria Santos", status: "Submitted" },
          { title: "From student to founder", person: "Kush Go", status: "Published" },
        ].map((convo) => (
          <div
            key={convo.title}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-gray-900 mb-1">
                  {convo.title}
                </h2>
                <p className="text-sm text-gray-500">{convo.person}</p>
              </div>
              <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                {convo.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}


