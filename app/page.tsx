"use client";

import { useState } from "react";
import CarouselLobby from "./components/CarouselLobby";
import CategoryLobby from "./components/CategoryLobby";

export default function Home() {
  const [variant, setVariant] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <button
          onClick={() => setVariant(1)}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            variant === 1
              ? "bg-casino-gold text-casino-green shadow-lg"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          Variant 1
        </button>
        <button
          onClick={() => setVariant(2)}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            variant === 2
              ? "bg-casino-gold text-casino-green shadow-lg"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          Variant 2
        </button>
      </div>
      {variant === 1 ? <CarouselLobby /> : <CategoryLobby />}
    </div>
  );
}
