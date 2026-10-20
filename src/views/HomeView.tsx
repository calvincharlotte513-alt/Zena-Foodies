import React, { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Flame,
  Leaf,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Compass,
  Wine,
} from "lucide-react";
import { MenuItem, PageView, Recipe } from "../types";
import { ASSETS, BRAND, WHATSAPP_NUMBER } from "../constants/config";
import { MENU_ITEMS, SMOOTHIE_ITEMS } from "../data/menuData";
import { FEATURED_MASTERCLASS_RECIPE, RECIPES_LIST } from "../data/recipesData";
import { FoodCard } from "../components/FoodCard";
import { SmoothieCard } from "../components/SmoothieCard";
import { RecipeCard } from "../components/RecipeCard";
import { formatCurrency, generateGeneralInquiryUrl } from "../utils/whatsapp";

interface HomeViewProps {
  onNavigate: (page: PageView) => void;
  onOpenOrderModal: (item: MenuItem) => void;
  onOpenRecipeModal: (recipe: Recipe) => void;
  onAddToTray: (item: MenuItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenOrderModal,
  onOpenRecipeModal,
  onAddToTray,
}) => {
  // Top featured items (zero gizzdodo)
  const featuredDishes = MENU_ITEMS.filter((item) => item.isFeatured).slice(0, 8);
  const featuredSmoothies = SMOOTHIE_ITEMS.slice(0, 6);
  const previewRecipes = RECIPES_LIST.slice(0, 3);

  // Active sensory spotlight dish
  const [activeSpotlightIndex, setActiveSpotlightIndex] = useState(0);
  const spotlightDishes = [MENU_ITEMS[0], MENU_ITEMS[1], MENU_ITEMS[2], MENU_ITEMS[3]];
  const activeDish = spotlightDishes[activeSpotlightIndex] || MENU_ITEMS[0];

  // Interactive WhatsApp Banquet Curator State
  const [banquetGuests, setBanquetGuests] = useState("2 - 4 Guests (Intimate Feast)");
  const [banquetSoup, setBanquetSoup] = useState("Grand Niger Delta Fisherman Soup");
  const [banquetSwallow, setBanquetSwallow] = useState("Velvet Pounded Yam");
  const [banquetSpice, setBanquetSpice] = useState("Balanced (Lagos Classic)");
  const [banquetElixir, setBanquetElixir] = useState("Golden Mango Sun Elixir");

  const handleHeroWhatsApp = () => {
    window.open(
      generateGeneralInquiryUrl("Placing a meal and fresh smoothie order"),
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleCuratedBanquetOrder = () => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    let msg = `Hello Zena Foodies 👋\n\n`;
    msg += `I'd like to reserve a Curated Banquet Feast:\n\n`;
    msg += `👥 Scale: ${banquetGuests}\n`;
    msg += `🥣 Centerpiece Soup: ${banquetSoup}\n`;
    msg += `🌾 Handcrafted Swallow: ${banquetSwallow}\n`;
    msg += `🌶️ Spice Dial: ${banquetSpice}\n`;
    msg += `🥤 Cold-Pressed Elixir: ${banquetElixir}\n\n`;
    msg += `Please confirm preparation timeline and delivery to my location in Lagos.\n\nThank you!`;

    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-28 sm:space-y-36 pb-20">
      {/* =========================================================================
          1. CINEMATIC HAUTE HERO SECTION
         ========================================================================= */}
      <section className="relative min-h-[96vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
        {/* Full-bleed background visual */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroFeast}
            alt="Haute Nigerian Gastronomy Table"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Moody Noir Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080807] via-[#080807]/80 to-[#080807]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-[#080807]/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#E5C158]">
            <span className="w-8 h-[1px] bg-[#E5C158]" />
            AUTHENTIC NIGERIAN FLAVOURS
            <span className="w-8 h-[1px] bg-[#E5C158]" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F7F4EE] uppercase leading-[1.05] text-balance">
            Good Food.
            <br />
            Fresh Smoothies.
            <br />
            <span className="italic font-normal bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#F3D78A] bg-clip-text text-transparent">
              Flavours You’ll Love.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-7 text-base sm:text-lg md:text-xl text-[#C5BCAD] max-w-2xl mx-auto leading-relaxed text-balance">
            From delicious Nigerian delicacies to refreshing fruit smoothies, Zena Foodies brings together great taste, quality ingredients and the flavours of home.
          </p>

          {/* Dual Primary Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleHeroWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 active:scale-98 rounded-full shadow-[0_0_30px_-5px_rgba(229,193,88,0.5)] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ORDER ON WHATSAPP</span>
            </button>

            <button
              onClick={() => onNavigate("menu")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-xs font-semibold uppercase tracking-wider text-[#F7F4EE] bg-[#161411]/80 hover:bg-[#221F1B] active:scale-98 border border-[#3A3326] backdrop-blur-md rounded-full transition-all cursor-pointer"
            >
              <span>EXPLORE OUR MENU</span>
              <ArrowRight className="w-4 h-4 text-[#E5C158]" />
            </button>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#A69E90]">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
              Slow-Simmered Heritage Pots
            </span>
            <span aria-hidden="true" className="text-[#3A3326]">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E5C158]" />
              Island & Mainland VIP Express
            </span>
            <span aria-hidden="true" className="text-[#3A3326]">·</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158]" />
              100% Whole Real Fruit Blends
            </span>
          </div>

          {/* Scroll cue */}
          <div className="mt-12 flex justify-center">
            <a
              href="#tasting-reel"
              aria-label="Scroll down"
              className="p-2 text-[#8C8375] hover:text-[#E5C158] transition-colors animate-bounce"
            >
              <ChevronDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE INTERACTIVE TASTING REEL (Never Seen Before Feature)
         ========================================================================= */}
      <section id="tasting-reel" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11100E] rounded-3xl border border-[#24201A] p-6 sm:p-12 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1F1C18]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5C158]">
                Sensory Tasting Reel
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F7F4EE] mt-1">
                Atelier Signature Spotlight
              </h2>
            </div>

            {/* Interactive Selectors */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto">
              {spotlightDishes.map((dish, idx) => (
                <button
                  key={dish.id}
                  onClick={() => setActiveSpotlightIndex(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                    activeSpotlightIndex === idx
                      ? "bg-[#E5C158] text-[#080807] shadow"
                      : "bg-[#181613] text-[#8C8375] hover:text-[#F7F4EE] border border-[#2B261E]"
                  }`}
                >
                  {dish.name.split(" ")[0]} {dish.name.split(" ")[1] || ""}
                </button>
              ))}
            </div>
          </div>

          {/* Active Dish Feature Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-8">
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-[#2D2820]">
              <img
                src={activeDish.image}
                alt={activeDish.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#080807]/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono font-bold text-[#E5C158] border border-[#E5C158]/30">
                {formatCurrency(activeDish.price)}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C97A3E]">
                {activeDish.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE]">
                {activeDish.name}
              </h3>
              {activeDish.hauteSubtitle && (
                <p className="text-xs text-[#E5C158] italic">
                  {activeDish.hauteSubtitle}
                </p>
              )}
              <p className="text-sm text-[#A69E90] leading-relaxed">
                {activeDish.description}
              </p>

              {activeDish.flavorNotes && (
                <div className="p-4 rounded-xl bg-[#181613] border border-[#28231C] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158] block">
                    Flavor Architecture
                  </span>
                  <p className="text-xs text-[#DCD5C9]">
                    {activeDish.flavorNotes.join(" · ")}
                  </p>
                </div>
              )}

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenOrderModal(activeDish)}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all shadow cursor-pointer"
                >
                  ORDER THIS MASTERPIECE
                </button>
                <button
                  onClick={() => onAddToTray(activeDish)}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#F7F4EE] bg-[#181613] hover:bg-[#221F1B] border border-[#2B261E] rounded-full transition-all cursor-pointer"
                >
                  + ADD TO TRAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED FOOD SECTION (Large Premium Cards)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158] block mb-2">
            Heritage Culinary Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EE] tracking-tight">
            Made With Love. Served With Flavour.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C8375] leading-relaxed">
            Discover some of the dishes our customers love. From traditional slow-cooked soups to smoky grilled proteins, each plate is crafted to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredDishes.map((dish) => (
            <FoodCard
              key={dish.id}
              item={dish}
              onOpenOrderModal={onOpenOrderModal}
              onAddToTray={onAddToTray}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate("menu")}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#E5C158] border border-[#E5C158]/50 hover:bg-[#E5C158] hover:text-[#080807] rounded-full transition-all duration-200 cursor-pointer"
          >
            <span>EXPLORE FULL ATELIER MENU</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          4. NIGERIAN DELICACIES SECTION (Large Split Layout)
         ========================================================================= */}
      <section className="bg-[#0B0A08] py-24 border-y border-[#1F1C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#2B261E]">
                <img
                  src={ASSETS.fishermanSoup}
                  alt="Authentic Grand Fisherman Soup and Velvet Pounded Yam"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#E5C158] font-bold">
                    Signature Coastal Broth
                  </span>
                  <h3 className="font-serif text-2xl font-bold mt-1 text-[#F7F4EE]">
                    Grand Niger Delta Fisherman Soup
                  </h3>
                  <p className="text-xs text-[#A69E90] mt-1">
                    Whole blue crab, tiger prawns, and ocean fish simmered in uziza scent leaf broth.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
                Culinary Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EE] tracking-tight leading-tight">
                THE FLAVOURS OF HOME
              </h2>
              <p className="text-base text-[#A69E90] leading-relaxed">
                At Zena Foodies, we celebrate the meals that bring us together. From rich soups and hearty swallows to perfectly prepared rice dishes and grilled favourites, every plate is inspired by the flavours Nigerians know and love.
              </p>

              {/* Highlight list */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#C5BCAD]">
                {[
                  "Egusi Soup",
                  "Seafood Okro Soup",
                  "Vegetable Soup (Efo Riro)",
                  "Smoky Woodfire Jollof Rice",
                  "Velvet Pounded Yam",
                  "Yellow Garri (Eba)",
                  "Semovita",
                  "Sweet Plantain (Dodo)",
                  "Peppered Grilled Chicken",
                  "Whole Grilled Croaker Fish",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate("delicacies")}
                  className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all shadow cursor-pointer"
                >
                  <span>EXPLORE NIGERIAN DELICACIES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SMOOTHIES SECTION (Fresh Fruit · Botanical Elixirs)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158] block mb-2">
            100% Pure Fruit · Zero Added Preservatives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EE] tracking-tight">
            FRESH FRUIT. BEAUTIFUL FLAVOUR.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C8375] leading-relaxed">
            Refreshing smoothies made with delicious fruits for a tasty way to enjoy more fruit in your day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSmoothies.map((smoothie) => (
            <SmoothieCard
              key={smoothie.id}
              smoothie={smoothie}
              onAddToTray={onAddToTray}
            />
          ))}
        </div>

        {/* Tasteful Wellness Commentary */}
        <div className="mt-14 p-8 rounded-3xl bg-[#11100E] border border-[#24201A] flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-[#181613] border border-[#2B261E] text-[#E5C158] flex items-center justify-center shrink-0">
            <Leaf className="w-8 h-8" />
          </div>
          <div className="flex-1 space-y-1 text-left">
            <h4 className="font-serif text-lg font-bold text-[#F7F4EE]">
              A Tasteful Addition to Your Daily Routine
            </h4>
            <p className="text-xs sm:text-sm text-[#8C8375] leading-relaxed">
              Our cold-blended fruit smoothies are prepared from whole, ripe fruits including mangoes, pineapples, berries, and bananas. Incorporating whole fruit beverages into a balanced daily diet provides naturally occurring hydration, dietary fiber, vitamins, and minerals without reliance on processed powders or refined sugars.
            </p>
          </div>
          <button
            onClick={() => onNavigate("smoothies")}
            className="shrink-0 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#E5C158] border border-[#E5C158]/50 hover:bg-[#E5C158] hover:text-[#080807] rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            DISCOVER ALL SMOOTHIES
          </button>
        </div>
      </section>

      {/* =========================================================================
          6. THE CURATED WHATSAPP BANQUET CONCIERGE (Never Seen Before)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#161411] via-[#12110F] to-[#0D0C0A] border border-[#2D2820] p-8 sm:p-14 shadow-2xl">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
              Interactive Concierge
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F7F4EE]">
              Curate Your Custom Lagos Feast
            </h2>
            <p className="text-xs sm:text-sm text-[#8C8375]">
              Select your dining party scale, centerpiece soup, traditional swallow, and fruit elixir to compose an immediate WhatsApp concierge reservation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Party Scale */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#E5C158]">Dining Scale</label>
              <select
                value={banquetGuests}
                onChange={(e) => setBanquetGuests(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-[#181613] border border-[#2B261E] rounded-xl text-[#F7F4EE] focus:outline-none focus:border-[#E5C158]"
              >
                <option value="1 Guest (Executive Solitary Treat)">1 Guest (Executive Solitary)</option>
                <option value="2 - 4 Guests (Intimate Feast)">2 - 4 Guests (Intimate Feast)</option>
                <option value="5 - 8 Guests (Family Table Platter)">5 - 8 Guests (Family Table)</option>
                <option value="10+ Guests (Celebratory Banquet)">10+ Guests (Celebratory Banquet)</option>
              </select>
            </div>

            {/* Soup Selection */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#E5C158]">Centerpiece Dish</label>
              <select
                value={banquetSoup}
                onChange={(e) => setBanquetSoup(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-[#181613] border border-[#2B261E] rounded-xl text-[#F7F4EE] focus:outline-none focus:border-[#E5C158]"
              >
                <option value="Grand Niger Delta Fisherman Soup">Grand Fisherman Soup</option>
                <option value="Signature Golden Egusi Soup">Golden Pan-Curded Egusi</option>
                <option value="Coastal Seafood Okro Symphony">Coastal Seafood Okro</option>
                <option value="Imperial Peppered Escargot & Asun">Peppered Snails & Asun</option>
                <option value="Smokey Woodfire Jollof Rice">Smokey Woodfire Jollof</option>
              </select>
            </div>

            {/* Swallow */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#E5C158]">Swallow / Side</label>
              <select
                value={banquetSwallow}
                onChange={(e) => setBanquetSwallow(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-[#181613] border border-[#2B261E] rounded-xl text-[#F7F4EE] focus:outline-none focus:border-[#E5C158]"
              >
                <option value="Velvet Pounded Yam">Velvet Pounded Yam</option>
                <option value="Yellow Garri (Eba)">Yellow Garri (Eba)</option>
                <option value="Semovita">Fluffy Semovita</option>
                <option value="Sweet Golden Plantain (Dodo)">Caramelized Dodo Coins</option>
              </select>
            </div>

            {/* Fruit Elixir */}
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#E5C158]">Chilled Fruit Elixir</label>
              <select
                value={banquetElixir}
                onChange={(e) => setBanquetElixir(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-[#181613] border border-[#2B261E] rounded-xl text-[#F7F4EE] focus:outline-none focus:border-[#E5C158]"
              >
                <option value="Golden Mango Sun Elixir">Golden Mango Sun Elixir</option>
                <option value="Wild Ruby Berry Nectar">Wild Ruby Berry Nectar</option>
                <option value="Pineapple Mint Sunshine">Pineapple Mint Sunshine</option>
                <option value="Emerald Tropic Botanical">Emerald Tropic Botanical</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#24201A]">
            <p className="text-xs text-[#8C8375]">
              Dispatches directly to our WhatsApp concierge with confirmed ingredients and chef prep slot.
            </p>
            <button
              onClick={handleCuratedBanquetOrder}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all shadow-xl cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>DISPATCH CURATED FEAST TO WHATSAPP</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. WHY ZENA FOODIES (Four Column Feature Pillars)
         ========================================================================= */}
      <section className="bg-[#0B0A08] py-24 border-y border-[#1F1C18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158] block mb-2">
              Uncompromising Tenets
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EE]">
              Why Zena Foodies Stands Alone
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-7 rounded-2xl bg-[#12110F] border border-[#24201A] hover:border-[#E5C158]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#181613] text-[#E5C158] flex items-center justify-center mb-5 border border-[#2B261E]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#F7F4EE] mb-2 uppercase tracking-wide">
                QUALITY INGREDIENTS
              </h3>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                “Carefully selected ingredients for delicious meals.” Sun-ripened organic fruits, ocean-harvest seafood, and cold-pressed oils.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#12110F] border border-[#24201A] hover:border-[#E5C158]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#181613] text-[#C97A3E] flex items-center justify-center mb-5 border border-[#2B261E]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#F7F4EE] mb-2 uppercase tracking-wide">
                AUTHENTIC FLAVOURS
              </h3>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                “Food inspired by the Nigerian flavours we know and love.” Traditional slow-cooking methods that honor heritage recipes.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#12110F] border border-[#24201A] hover:border-[#E5C158]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#181613] text-[#E5C158] flex items-center justify-center mb-5 border border-[#2B261E]">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#F7F4EE] mb-2 uppercase tracking-wide">
                FRESH & DELICIOUS
              </h3>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                “Freshly prepared meals and refreshing smoothies.” Small-batch cooking so every dish reaches you piping hot or chilled to perfection.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#12110F] border border-[#24201A] hover:border-[#E5C158]/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#181613] text-[#C97A3E] flex items-center justify-center mb-5 border border-[#2B261E]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#F7F4EE] mb-2 uppercase tracking-wide">
                MADE FOR YOU
              </h3>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                “Great food, warm service and an experience worth coming back for.” Every nuance adjusted directly via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FOOD STORY SECTION (Editorial Full-Width Overlay)
         ========================================================================= */}
      <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.kitchenStory}
            alt="Authentic Nigerian kitchen heritage"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080807]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E5C158] block mb-3">
            Culinary Soul
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-[#F7F4EE]">
            MORE THAN FOOD. IT’S A FEELING.
          </h2>
          <p className="text-base sm:text-lg text-[#C5BCAD] max-w-2xl mx-auto leading-relaxed">
            Food has a way of bringing people together. At Zena Foodies, we celebrate the flavours, memories and moments that make Nigerian food special.
          </p>
          <div className="mt-8">
            <button
              onClick={() => onNavigate("about")}
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#F7F4EE] border border-[#E5C158]/50 hover:bg-[#E5C158] hover:text-[#080807] rounded-full transition-all cursor-pointer"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. RECIPES MASTERCLASS SECTION (ZERO GIZZDODO)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158] block mb-2">
            Zena Culinary Vault
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EE] tracking-tight">
            Curated Nigerian Recipes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8C8375] leading-relaxed">
            Visually rich food-editorial cards. Cook at home with our authentic proportions, or order freshly prepared portions directly to your doorstep.
          </p>
        </div>

        {/* Masterclass Spotlight: Royal Fisherman Soup */}
        <div className="mb-14 bg-[#11100E] rounded-3xl border border-[#24201A] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#2B261E]">
              <img
                src={FEATURED_MASTERCLASS_RECIPE.image}
                alt="Grand Fisherman Soup Masterclass"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#E5C158] text-[#080807] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                Masterclass Spotlight
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C97A3E]">
                COASTAL MASTERCLASS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE]">
                {FEATURED_MASTERCLASS_RECIPE.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A69E90] leading-relaxed">
                {FEATURED_MASTERCLASS_RECIPE.description}
              </p>

              {/* Variations */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C8375] block mb-2">
                  Three Regional Interpretations:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {FEATURED_MASTERCLASS_RECIPE.variations?.map((v) => (
                    <div
                      key={v.name}
                      className="p-3 bg-[#161411] rounded-xl border border-[#28231C]"
                    >
                      <span className="text-xs font-bold text-[#E5C158] block">{v.name}</span>
                      <span className="text-[10px] text-[#8C8375] block mt-1 line-clamp-1">{v.twist}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenRecipeModal(FEATURED_MASTERCLASS_RECIPE)}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all cursor-pointer"
                >
                  VIEW MASTERCLASS GUIDE
                </button>
                <button
                  onClick={() => onOpenOrderModal(MENU_ITEMS[0])}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F7F4EE] border border-[#3A3326] hover:bg-[#1C1814] rounded-full transition-all cursor-pointer"
                >
                  ORDER THIS SOUP NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Editorial Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onOpenRecipe={onOpenRecipeModal}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate("recipes")}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#E5C158] border border-[#E5C158]/50 hover:bg-[#E5C158] hover:text-[#080807] rounded-full transition-all cursor-pointer"
          >
            <span>VIEW ALL RECIPES & COOKING GUIDES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          10. DIRECT WHATSAPP CONCIERGE BANNER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#181613] via-[#12110F] to-[#0A0908] text-[#F7F4EE] border border-[#2F2921] overflow-hidden p-8 sm:p-14 shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#E5C158] font-bold">
              Instant Ordering Concierge
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F7F4EE]">
              Taste The Difference Today.
            </h2>
            <p className="text-sm sm:text-base text-[#A69E90] leading-relaxed">
              Order your favorite Nigerian soup, rice dish, or freshly blended smoothie directly on WhatsApp. Tell us what you’d like, and our team will prepare it with love.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={handleHeroWhatsApp}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 rounded-full shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>ORDER ON WHATSAPP (+{WHATSAPP_NUMBER})</span>
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#F7F4EE] border border-[#3A3326] hover:bg-[#221F1B] rounded-full transition-all cursor-pointer"
              >
                <span>HOURS & LOCATIONS</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
