export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Conversation System</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
          + New Entry
        </button>
      </div>
      <div className="flex gap-4 mb-6">
        <button className="text-sm text-gray-500 hover:text-purple-600 font-medium">All</button>
        <button className="text-sm text-gray-500 hover:text-purple-600 font-medium">Recorded</button>
        <button className="text-sm text-gray-500 hover:text-purple-600 font-medium">Transcribed</button>
        <button className="text-sm text-gray-500 hover:text-purple-600 font-medium">Published</button>
      </div>
      <div className="flex flex-col gap-4">
        <a href="/conversation" className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm block">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-1">Building in public</h2>
              <p className="text-sm text-gray-500">Alex Johnson</p>
            </div>
            <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Transcribed</span>
          </div>
        </a>
        <a href="/conversation" className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm block">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-1">Betting on yourself early</h2>
              <p className="text-sm text-gray-500">Maria Santos</p>
            </div>
            <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Recorded</span>
          </div>
        </a>
        <a href="/conversation" className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm block">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-gray-900 mb-1">From student to founder</h2>
              <p className="text-sm text-gray-500">Kush Go</p>
            </div>
            <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Published</span>
          </div>
        </a>
      </div>
    </main>
  );
}