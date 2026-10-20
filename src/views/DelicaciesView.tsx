import React from "react";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { MenuItem } from "../types";
import { MENU_ITEMS } from "../data/menuData";
import { FoodCard } from "../components/FoodCard";
import { ASSETS, WHATSAPP_NUMBER } from "../constants/config";

interface DelicaciesViewProps {
  onOpenOrderModal: (item: MenuItem) => void;
  onAddToTray: (item: MenuItem) => void;
}

export const DelicaciesView: React.FC<DelicaciesViewProps> = ({
  onOpenOrderModal,
  onAddToTray,
}) => {
  const delicacies = MENU_ITEMS.filter(
    (item) => item.category === "soups" || item.category === "delicacies" || item.category === "rice-main" || item.category === "proteins"
  );

  const handleOrderPotsWhatsApp = () => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    const msg = `Hello Zena Foodies 👋\n\nI’d like to inquire about ordering family-sized soup pots (Grand Fisherman Soup, Golden Egusi, Seafood Okro, Efo Riro) and swallow platters.\n\nPlease share the available bowl sizes and delivery schedules.\n\nThank you!`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pb-24 pt-24 sm:pt-28">
      {/* Header */}
      <div className="relative bg-[#0E0D0B] text-white py-16 sm:py-24 overflow-hidden border-b border-[#24201A]">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={ASSETS.fishermanSoup}
            alt="Traditional Nigerian Soups and Swallows"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E5C158] block mb-3">
            Heritage & Traditions
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F4EE] uppercase leading-tight">
            The Flavours of Home
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-[#C5BCAD] max-w-3xl mx-auto leading-relaxed">
            At Zena Foodies, we celebrate the meals that bring us together. From rich soups and hearty swallows to perfectly prepared rice dishes and grilled favourites, every plate is inspired by the flavours Nigerians know and love.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleOrderPotsWhatsApp}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all shadow-xl cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ORDER DELICACIES ON WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {/* Heritage Story & Swallow Guide */}
        <div className="bg-[#11100E] rounded-3xl p-8 sm:p-12 border border-[#24201A]">
          <div className="max-w-3xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5C158]">
              The Art of Nigerian Soups & Swallows
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE] mt-2">
              Fluffy Swallows, Uncompromised Soups & Rich Aromas
            </h2>
            <p className="text-xs sm:text-sm text-[#8C8375] mt-3 leading-relaxed">
              Every region in Nigeria brings culinary magic: from the velvety ground melon seeds of Yoruba and Igbo Egusi soups, to the viscous seafood-studded Okro and Fisherman soups of the coastal Niger Delta, to the smoky embers of firewood Jollof at Saturday celebrations. We refuse shortcuts: we use pure red palm oil, fermented locust beans (iru), sun-dried crayfish, and woodsmoke embers.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-[#1F1C18] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#161411] p-5 rounded-2xl border border-[#28231C]">
              <span className="text-[10px] font-bold text-[#E5C158] uppercase">Traditional Pairing #1</span>
              <h4 className="font-serif font-bold text-sm text-[#F7F4EE] mt-1">
                Grand Fisherman Soup & Velvet Pounded Yam
              </h4>
              <p className="text-xs text-[#8C8375] mt-1.5 leading-relaxed">
                Sweet ocean king prawns, whole crab, and croaker fish enveloped in uziza scent leaf broth, scooped with pillowy pounded yam.
              </p>
            </div>

            <div className="bg-[#161411] p-5 rounded-2xl border border-[#28231C]">
              <span className="text-[10px] font-bold text-[#E5C158] uppercase">Traditional Pairing #2</span>
              <h4 className="font-serif font-bold text-sm text-[#F7F4EE] mt-1">
                Seafood Okro & Yellow Garri (Eba)
              </h4>
              <p className="text-xs text-[#8C8375] mt-1.5 leading-relaxed">
                Tart, textured yellow cassava eba complements the rich umami broth of fresh crab, prawns, and hand-pounded okra.
              </p>
            </div>

            <div className="bg-[#161411] p-5 rounded-2xl border border-[#28231C]">
              <span className="text-[10px] font-bold text-[#E5C158] uppercase">Traditional Pairing #3</span>
              <h4 className="font-serif font-bold text-sm text-[#F7F4EE] mt-1">
                Golden Egusi & Fluffy Semovita
              </h4>
              <p className="text-xs text-[#8C8375] mt-1.5 leading-relaxed">
                Tender oil-curded melon dumplings with smoked catfish and braised goat meat embraced by light semovita.
              </p>
            </div>
          </div>
        </div>

        {/* Delicacies Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EE]">
              Signature Delicacy Dishes
            </h2>
            <p className="text-xs sm:text-sm text-[#8C8375] mt-2">
              Order any of these traditional meals directly to your doorstep via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {delicacies.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onOpenOrderModal={onOpenOrderModal}
                onAddToTray={onAddToTray}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
