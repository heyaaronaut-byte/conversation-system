export default function OnePager() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 max-w-3xl mx-auto">

      <a href="/conversation" className="text-sm text-purple-600 hover:underline mb-6 inline-block">
        Back to conversation
      </a>

      <div className="bg-gray-900 rounded-xl p-8 mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Alex Johnson</h1>
          <p className="text-sm text-gray-400">Founder · Acme Corp</p>
        </div>
        <div className="w-16 h-16 rounded-full bg-gray-600"></div>
      </div>

      <div className="bg-white border-l-4 border-purple-500 rounded-r-xl p-6 mb-6">
        <p className="text-xs font-medium text-gray-400 mb-2">Conversation thesis</p>
        <p className="text-base font-medium text-gray-900">
          Why betting on yourself early changes everything — and what nobody tells you before you do it.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-medium text-purple-500 mb-2">01</p>
          <p className="text-sm text-gray-700 leading-relaxed">Fear of staying is scarier than fear of leaving</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-medium text-purple-500 mb-2">02</p>
          <p className="text-sm text-gray-700 leading-relaxed">The first yes is the hardest one to believe in yourself</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-medium text-purple-500 mb-2">03</p>
          <p className="text-sm text-gray-700 leading-relaxed">Freedom and terror arrive at exactly the same moment</p>
        </div>
      </div>

      <div className="bg-purple-50 rounded-xl p-6 mb-6">
        <p className="text-2xl text-purple-300 mb-2">"</p>
        <p className="text-base text-gray-700 italic leading-relaxed">
          The scariest moment was realising I was more afraid of staying than leaving.
        </p>
        <p className="text-sm text-gray-400 mt-3">— Alex Johnson</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <p className="text-xs font-medium text-gray-400 mb-2">Key story moment</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          After handing in his resignation, Alex sat in his car for 20 minutes before driving home.
          He described it as the first time he felt completely free and completely terrified at the same time.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <p className="text-xs font-medium text-gray-400 mb-4">Content derivatives</p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-start">
            <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded shrink-0">LinkedIn</span>
            <span className="text-sm text-gray-600">Why the scariest moment was the most freeing</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded shrink-0">IG Carousel</span>
            <span className="text-sm text-gray-600">5 things nobody tells you about betting on yourself</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded shrink-0">Newsletter</span>
            <span className="text-sm text-gray-600">The parking lot moment that changed everything</span>
          </div>
        </div>
      </div>

    </main>
  );
}