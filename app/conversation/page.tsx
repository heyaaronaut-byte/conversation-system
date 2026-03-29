export default function Conversation() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <a href="/" className="text-sm text-purple-600 hover:underline mb-6 inline-block">
        Back to dashboard
      </a>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Alex Johnson</h1>
            <p className="text-sm text-gray-500">Founder · Acme Corp</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              Transcribed
            </span>
            <a href="/onepager" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
              View one-pager
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="flex flex-col gap-6">

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Summary</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Alex shared his journey from corporate life to founding his own company.
              The conversation covered the moment he decided to bet on himself,
              the early struggles, and what he wishes he knew going in.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Best quotes</h2>
            <div className="flex flex-col gap-3">
              <div className="border-l-4 border-purple-400 pl-4 text-sm text-gray-600 italic">
                "The scariest moment was realising I was more afraid of staying than leaving."
              </div>
              <div className="border-l-4 border-purple-400 pl-4 text-sm text-gray-600 italic">
                "Nobody tells you that the first yes is the hardest one to believe."
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-6">

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Energy rating</h2>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-purple-600 text-white">1</div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-purple-600 text-white">2</div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-purple-600 text-white">3</div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-purple-600 text-white">4</div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium bg-gray-100 text-gray-400">5</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Story moments</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              There was a moment when Alex handed in his resignation and sat in his car
              for 20 minutes before driving home. He described it as the first time
              he felt completely free and completely terrified at the same time.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Content angles</h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-start">
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded shrink-0">LinkedIn</span>
                <span className="text-sm text-gray-600">Why the scariest moment was the most freeing</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded shrink-0">IG Carousel</span>
                <span className="text-sm text-gray-600">5 things nobody tells you about betting on yourself</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded shrink-0">Newsletter</span>
                <span className="text-sm text-gray-600">The parking lot moment that changed everything</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}