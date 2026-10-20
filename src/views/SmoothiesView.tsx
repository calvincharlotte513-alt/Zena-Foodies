import React from "react";
import { MessageCircle, Sparkles, Droplets, Heart, Sun, Apple } from "lucide-react";
import { MenuItem } from "../types";
import { SMOOTHIE_ITEMS } from "../data/menuData";
import { SmoothieCard } from "../components/SmoothieCard";
import { ASSETS, WHATSAPP_NUMBER } from "../constants/config";

interface SmoothiesViewProps {
  onAddToTray?: (item: MenuItem) => void;
}

export const SmoothiesView: React.FC<SmoothiesViewProps> = ({ onAddToTray }) => {
  const handleBulkSmoothieOrder = () => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    const msg = `Hello Zena Foodies 👋\n\nI’d like to order a Weekly Smoothie Refresh Pack (6 assorted chilled botanical smoothies).\n\nPlease let me know today's available blends, ice cooler packaging, and price.\n\nThank you!`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pb-24 pt-24 sm:pt-28">
      {/* Hero */}
      <div className="relative bg-[#0E0D0B] text-white py-16 sm:py-24 overflow-hidden border-b border-[#24201A]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={ASSETS.smoothies}
            alt="Cold-pressed botanical smoothies"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E5C158] block mb-3">
            Pure Whole Fruit · Zero Refined Sugars · Cold Blended
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F4EE] uppercase leading-tight">
            Fresh Fruit. Beautiful Flavour.
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-[#C5BCAD] max-w-2xl mx-auto leading-relaxed">
            Refreshing smoothies made with delicious fruits for a tasty way to enjoy more fruit in your day.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleBulkSmoothieOrder}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all shadow-xl cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ORDER SMOOTHIE 6-PACK ON WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EE]">
            The Botanical Elixir Collection
          </h2>
          <p className="text-xs sm:text-sm text-[#8C8375] mt-2">
            Every bottle is blended fresh upon order and sealed in insulated chill packs for maximum living vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SMOOTHIE_ITEMS.map((smoothie) => (
            <SmoothieCard
              key={smoothie.id}
              smoothie={smoothie}
              onAddToTray={onAddToTray}
            />
          ))}
        </div>

        {/* Tasteful Wellness Guide */}
        <div className="mt-20 bg-[#12110F] rounded-3xl border border-[#24201A] p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158]">
              Balanced Living
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE]">
              The Role of Whole Fruit in a Balanced Lifestyle
            </h3>
            <p className="text-xs sm:text-sm text-[#8C8375] leading-relaxed">
              We believe great nutrition starts with honest food. Our smoothies are made exclusively from real whole fruits and natural hydrators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-[#161411] border border-[#28231C] space-y-2">
              <Droplets className="w-5 h-5 text-[#E5C158]" />
              <h4 className="font-serif font-bold text-sm text-[#F7F4EE]">Natural Hydration</h4>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                Watermelon, young coconut water, and citrus naturally carry fluids and electrolytes to quench thirst and restore cellular vitality.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#161411] border border-[#28231C] space-y-2">
              <Sun className="w-5 h-5 text-[#C97A3E]" />
              <h4 className="font-serif font-bold text-sm text-[#F7F4EE]">Vitamins & Carotenes</h4>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                Tropical Benue mangoes and pineapples provide authentic dietary Vitamin C and beta-carotene without artificial powders.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#161411] border border-[#28231C] space-y-2">
              <Apple className="w-5 h-5 text-[#E5C158]" />
              <h4 className="font-serif font-bold text-sm text-[#F7F4EE]">Whole Plant Fiber</h4>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                By blending the whole pulp rather than pressing pure sugar syrup, our blends retain the gentle dietary fiber of the fruit.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#161411] border border-[#28231C] space-y-2">
              <Heart className="w-5 h-5 text-[#C97A3E]" />
              <h4 className="font-serif font-bold text-sm text-[#F7F4EE]">Zero Added Preservatives</h4>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                Sweetness comes naturally from sun-ripened Nigerian mangoes and pineapples, complemented only by pure local honey upon request.
              </p>
            </div>
          </div>
        </div>

        {/* Office & Event Crates */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#1A1814] via-[#141210] to-[#0E0D0B] border border-[#2D2820] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-[#F7F4EE]">
              Executive Office & Event Smoothie Coolers
            </h3>
            <p className="text-xs sm:text-sm text-[#8C8375] max-w-xl leading-relaxed">
              Hosting a corporate board meeting, brunch, or wedding celebration in Lagos? We supply chilled insulated crates of 12, 24, or 50 artisan smoothies delivered directly to your venue.
            </p>
          </div>
          <button
            onClick={handleBulkSmoothieOrder}
            className="shrink-0 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            ORDER SMOOTHIE CRATES ON WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
};
