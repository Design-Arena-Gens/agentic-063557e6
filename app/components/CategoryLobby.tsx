"use client";

export default function CategoryLobby() {
  const categories = [
    { icon: "♠️", title: "Classic Games", subtitle: "Traditional casino favorites" },
    { icon: "⏱", title: "Quick Games", subtitle: "Fast-paced 5-minute matches" },
    { icon: "👥", title: "Friends Games", subtitle: "Play with your friends" },
    { icon: "♞", title: "Training", subtitle: "Practice & improve your skills" },
  ];

  const tournaments = [
    { name: "Royal Championship", prize: "50,000", time: "2h left" },
    { name: "Diamond League", prize: "25,000", time: "4h left" },
    { name: "Golden Hour", prize: "10,000", time: "30m left" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-casino-green via-black to-casino-green relative overflow-hidden">
      {/* Felt texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-casino-gold/30 rounded-tl-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-casino-gold/30 rounded-tr-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-casino-gold/30 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-casino-gold/30 rounded-br-3xl"></div>

      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-sm border-b-2 border-casino-gold/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-casino-gold to-casino-gold-dark flex items-center justify-center text-2xl border-2 border-casino-gold shadow-lg">
            👤
          </div>
          <div>
            <p className="text-casino-gold font-bold text-sm">Player</p>
            <p className="text-white text-xs">VIP Member</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-casino-gold/50">
          <span className="text-casino-gold text-xl">💰</span>
          <span className="text-white font-bold text-lg">12,450</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md mx-auto px-6 py-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-casino-gold mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
            King Bolola
          </h1>
          <p className="text-white/70 text-lg italic">Select Your Game Mode</p>
        </div>

        {/* Category Buttons */}
        <div className="space-y-4 mb-8">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className="w-full bg-gradient-to-r from-casino-mahogany via-black to-casino-mahogany border-4 border-casino-gold rounded-2xl p-5 hover:border-yellow-300 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] group relative overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-casino-gold/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative flex items-center gap-4">
                <div className="w-16 h-16 bg-casino-gold rounded-xl flex items-center justify-center text-3xl shadow-lg">
                  {category.icon}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-casino-gold font-bold text-xl mb-1">
                    {category.title}
                  </h3>
                  <p className="text-white/60 text-sm">{category.subtitle}</p>
                </div>
                <div className="text-casino-gold text-2xl">›</div>
              </div>
            </button>
          ))}
        </div>

        {/* Top Tournaments Banner */}
        <div className="bg-gradient-to-br from-casino-gold/20 to-casino-gold-dark/20 border-2 border-casino-gold rounded-2xl p-5 mb-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">🏆</span>
            <h2 className="text-casino-gold font-bold text-xl">Top Tournaments Today</h2>
          </div>

          <div className="space-y-3">
            {tournaments.map((tournament, idx) => (
              <div
                key={idx}
                className="bg-black/40 rounded-xl p-3 flex justify-between items-center border border-casino-gold/30 hover:border-casino-gold/60 transition-all"
              >
                <div>
                  <p className="text-white font-semibold text-sm">{tournament.name}</p>
                  <p className="text-casino-gold text-xs">Prize: 💰 {tournament.prize}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-xs">{tournament.time}</p>
                  <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-full mt-1">
                    LIVE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Play Button */}
        <button className="w-full bg-gradient-to-r from-casino-gold via-yellow-400 to-casino-gold text-casino-green py-6 rounded-2xl font-bold text-2xl shadow-[0_0_30px_rgba(255,215,0,0.8)] hover:shadow-[0_0_50px_rgba(255,215,0,1)] transition-all hover:scale-105 border-4 border-yellow-300 relative overflow-hidden group mb-6">
          <span className="relative z-10 flex items-center justify-center gap-3">
            <span className="text-3xl">🎮</span>
            Play Now
            <span className="text-3xl">🎮</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-black/30 rounded-xl p-3 border border-casino-gold/30">
            <p className="text-casino-gold font-bold text-2xl">1,247</p>
            <p className="text-white/60 text-xs">Online Players</p>
          </div>
          <div className="bg-black/30 rounded-xl p-3 border border-casino-gold/30">
            <p className="text-casino-gold font-bold text-2xl">42</p>
            <p className="text-white/60 text-xs">Active Games</p>
          </div>
          <div className="bg-black/30 rounded-xl p-3 border border-casino-gold/30">
            <p className="text-casino-gold font-bold text-2xl">$250K</p>
            <p className="text-white/60 text-xs">Daily Prizes</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-md border-t-2 border-casino-gold/30">
        <div className="flex justify-around items-center py-4 max-w-2xl mx-auto">
          {[
            { icon: "🏠", label: "Home", active: true },
            { icon: "👥", label: "Friends", active: false },
            { icon: "🏆", label: "Tournaments", active: false },
            { icon: "🛍️", label: "Shop", active: false },
          ].map((item, idx) => (
            <button
              key={idx}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${
                item.active
                  ? "bg-casino-gold/20 text-casino-gold"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
