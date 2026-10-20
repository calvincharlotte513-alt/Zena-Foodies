import React, { useState, useMemo } from "react";
import { Search, ShoppingBag, MessageCircle, Sparkles } from "lucide-react";
import { MenuItem, MenuCategory } from "../types";
import { MENU_ITEMS, SMOOTHIE_ITEMS } from "../data/menuData";
import { FoodCard } from "../components/FoodCard";
import { SmoothieCard } from "../components/SmoothieCard";
import { ASSETS } from "../constants/config";
import { generateGeneralInquiryUrl } from "../utils/whatsapp";

interface MenuViewProps {
  onOpenOrderModal: (item: MenuItem) => void;
  onAddToTray: (item: MenuItem) => void;
  onOpenTray: () => void;
  trayItemCount: number;
}

export const MenuView: React.FC<MenuViewProps> = ({
  onOpenOrderModal,
  onAddToTray,
  onOpenTray,
  trayItemCount,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { key: MenuCategory; label: string }[] = [
    { key: "all", label: "All Items" },
    { key: "soups", label: "Nigerian Soups" },
    { key: "rice-main", label: "Rice & Main Dishes" },
    { key: "proteins", label: "Proteins" },
    { key: "sides", label: "Sides & Swallows" },
    { key: "delicacies", label: "Local Delicacies" },
    { key: "smoothies", label: "Smoothies" },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ingredients &&
          item.ingredients.some((ing) =>
            ing.toLowerCase().includes(searchQuery.toLowerCase())
          ));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const filteredSmoothies = useMemo(() => {
    if (selectedCategory !== "all" && selectedCategory !== "smoothies") return [];
    return SMOOTHIE_ITEMS.filter((smoothie) => {
      return (
        smoothie.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        smoothie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        smoothie.ingredients.some((ing) =>
          ing.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    });
  }, [selectedCategory, searchQuery]);

  const handleCustomOrderWhatsApp = () => {
    window.open(
      generateGeneralInquiryUrl("Custom food order / soup bowl catering inquiry"),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="pb-24 pt-24 sm:pt-28">
      {/* Header Banner */}
      <div className="relative bg-[#0E0D0B] text-white py-16 sm:py-20 overflow-hidden border-b border-[#24201A]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={ASSETS.jollofParty}
            alt="Zena Foodies Menu"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E5C158] block mb-2">
            Haute Nigerian Menu
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F4EE]">
            Our Complete Menu
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#A69E90] max-w-2xl mx-auto leading-relaxed">
            Browse our rich selection of authentic Nigerian soups, woodsmoke party Jollof rice, peppered escargot & asun, and freshly pressed fruit smoothies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Search & Actions Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#1F1C18]">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8375]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or ingredients..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#141210] border border-[#2B261E] rounded-full focus:outline-none focus:border-[#E5C158] text-[#F7F4EE] placeholder:text-[#635C52]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C8375] hover:text-[#F7F4EE]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <p className="hidden sm:block text-xs text-[#8C8375]">
              Tap any item to customize or order directly via WhatsApp
            </p>
            {trayItemCount > 0 && (
              <button
                onClick={onOpenTray}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#E5C158] text-[#080807] text-xs font-bold rounded-full shadow hover:brightness-110 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>View Tray ({trayItemCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto py-5 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#E5C158] text-[#080807] shadow-sm"
                    : "bg-[#141210] text-[#A69E90] hover:text-[#F7F4EE] hover:bg-[#1E1B17] border border-[#26221B]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dishes Grid */}
        <div className="mt-8 space-y-14">
          {filteredItems.length > 0 && (
            <div>
              {selectedCategory === "all" && (
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#1F1C18]">
                  <h2 className="font-serif text-2xl font-bold text-[#F7F4EE]">
                    Nigerian Delicacies & Meals
                  </h2>
                  <span className="text-xs text-[#8C8375] font-mono">
                    {filteredItems.length} dishes available
                  </span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {filteredItems.map((item) => (
                  <FoodCard
                    key={item.id}
                    item={item}
                    onOpenOrderModal={onOpenOrderModal}
                    onAddToTray={onAddToTray}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Smoothies in menu view */}
          {filteredSmoothies.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#1F1C18]">
                <h2 className="font-serif text-2xl font-bold text-[#F7F4EE]">
                  Fresh Fruit Smoothies
                </h2>
                <span className="text-xs text-[#8C8375] font-mono">
                  {filteredSmoothies.length} blends available
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSmoothies.map((smoothie) => (
                  <SmoothieCard
                    key={smoothie.id}
                    smoothie={smoothie}
                    onAddToTray={onAddToTray}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Custom Soup Bowls Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-[#12110F] border border-[#28231C] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#F7F4EE]">
              Need Family Soup Bowls (2L, 3L & 5L)?
            </h3>
            <p className="text-xs sm:text-sm text-[#8C8375] max-w-xl">
              We prepare 2-litre, 3-litre, and 5-litre family soup bowls (Egusi, Fisherman Soup, Seafood Okro, Efo Riro) loaded with assorted meats, stockfish, and seafood for home freezers or weekend celebrations.
            </p>
          </div>
          <button
            onClick={handleCustomOrderWhatsApp}
            className="shrink-0 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            ORDER SOUP BOWLS ON WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
};
