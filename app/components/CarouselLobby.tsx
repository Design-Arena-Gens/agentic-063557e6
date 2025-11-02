"use client";

import { useState, useEffect } from "react";

interface Game {
  id: number;
  title: string;
  icon: string;
  entryFee: string;
  reward: string;
}

export default function CarouselLobby() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const games: Game[] = [
    { id: 1, title: "Royal Flush", icon: "♠️", entryFee: "100", reward: "500" },
    { id: 2, title: "Diamond Rush", icon: "♦️", entryFee: "250", reward: "1,500" },
    { id: 3, title: "Hearts Master", icon: "♥️", entryFee: "500", reward: "3,000" },
    { id: 4, title: "Club Elite", icon: "♣️", entryFee: "1,000", reward: "10,000" },
    { id: 5, title: "Ace High", icon: "🃏", entryFee: "150", reward: "800" },
    { id: 6, title: "King's Court", icon: "👑", entryFee: "750", reward: "5,000" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % games.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [games.length]);

  const getVisibleGames = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + games.length) % games.length;
      visible.push({ ...games[index], offset: i });
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-casino-green via-casino-mahogany to-casino-green relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">♠️</div>
        <div className="absolute top-20 right-20 text-6xl">♦️</div>
        <div className="absolute bottom-20 left-20 text-6xl">♥️</div>
        <div className="absolute bottom-10 right-10 text-6xl">♣️</div>
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-sm border-b-2 border-casino-gold/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-casino-gold to-casino-gold-dark flex items-center justify-center text-2xl border-2 border-casino-gold shadow-lg">
            👤
          </div>
          <div>
            <p className="text-casino-gold font-bold text-sm">Player</p>
            <p className="text-white text-xs">Level 15</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-casino-gold/50">
          <span className="text-casino-gold text-xl">💰</span>
          <span className="text-white font-bold text-lg">12,450</span>
        </div>

        <button className="bg-gradient-to-r from-casino-gold to-casino-gold-dark text-casino-green px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-casino-gold">
          🎁 Daily Bonus
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-4xl font-bold text-casino-gold mb-2 text-center drop-shadow-lg">
          King Bolola
        </h1>
        <p className="text-white/80 mb-8 text-center text-lg">Choose Your Game</p>

        {/* Carousel */}
        <div className="relative w-full max-w-6xl h-96 flex items-center justify-center overflow-visible">
          {getVisibleGames().map((game, idx) => (
            <div
              key={game.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${game.offset * 350}px) scale(${
                  game.offset === 0 ? 1.1 : 0.85
                }) rotateY(${game.offset * 15}deg)`,
                zIndex: game.offset === 0 ? 10 : 5 - Math.abs(game.offset),
                opacity: game.offset === 0 ? 1 : 0.6,
              }}
            >
              <div
                className={`w-80 bg-gradient-to-br from-casino-mahogany to-black rounded-2xl p-6 border-4 ${
                  game.offset === 0 ? "border-casino-gold glow-animation" : "border-casino-gold/30"
                } shadow-2xl backdrop-blur-sm`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="text-7xl mb-2">{game.icon}</div>
                  <h3 className="text-2xl font-bold text-casino-gold text-center">
                    {game.title}
                  </h3>

                  <div className="flex justify-around w-full mt-2">
                    <div className="text-center">
                      <p className="text-white/60 text-xs mb-1">Entry Fee</p>
                      <p className="text-casino-gold font-bold text-lg">💰 {game.entryFee}</p>
                    </div>
                    <div className="h-12 w-px bg-casino-gold/30"></div>
                    <div className="text-center">
                      <p className="text-white/60 text-xs mb-1">Win Up To</p>
                      <p className="text-casino-gold font-bold text-lg">🏆 {game.reward}</p>
                    </div>
                  </div>

                  {game.offset === 0 && (
                    <button className="mt-4 w-full bg-gradient-to-r from-casino-gold via-yellow-400 to-casino-gold text-casino-green py-4 rounded-xl font-bold text-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-yellow-300 relative overflow-hidden group">
                      <span className="relative z-10">Play Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex gap-2 mt-8">
          {games.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-casino-gold w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
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
