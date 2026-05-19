import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          About <span className="text-blue-600">MovieVault</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Your ultimate companion for discovering cinematic masterpieces. Track, explore, and dive deep into your favorite films with real-time global insights.
        </p>
      </div>

      {/* Feature grid to fill out the UI layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl font-bold mb-4">
            🎬
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Massive Library</h3>
          <p className="text-gray-600 text-sm">
            Powered by the comprehensive TMDB database to give you instant access to millions of titles.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center text-xl font-bold mb-4">
            ⚡
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Real-time Search</h3>
          <p className="text-gray-600 text-sm">
            Debounced, lighting-fast query matching ensures you find exactly what you're looking for instantly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-xl font-bold mb-4">
            🍿
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Curated Feeds</h3>
          <p className="text-gray-600 text-sm">
            Filter smoothly between top trending categories to keep your watch list perpetually fresh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;