import React, { useState } from "react";
import { MessageCircle, ChefHat, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { Recipe } from "../types";
import { RECIPES_LIST, FEATURED_MASTERCLASS_RECIPE } from "../data/recipesData";
import { RecipeCard } from "../components/RecipeCard";
import { ASSETS, WHATSAPP_NUMBER } from "../constants/config";

interface RecipesViewProps {
  onOpenRecipeModal: (recipe: Recipe) => void;
}

export const RecipesView: React.FC<RecipesViewProps> = ({ onOpenRecipeModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Haute Masterclass",
    "Heritage Craft",
    "Artisan Blend",
  ];

  const filteredRecipes = RECIPES_LIST.filter((r) => {
    if (selectedCategory === "All") return true;
    return r.category === selectedCategory;
  });

  const handleOrderMasterclass = (recipeTitle: string) => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    const msg = `Hello Zena Foodies 👋\n\nI’d like to order a chef-prepared serving of "${recipeTitle}".\n\nPlease let me know availability and pricing for delivery.\n\nThank you!`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pb-24 pt-24 sm:pt-28">
      {/* Header */}
      <div className="relative bg-[#0E0D0B] text-white py-16 sm:py-24 overflow-hidden border-b border-[#24201A]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={ASSETS.kitchenStory}
            alt="Culinary masterclass development at Zena Foodies"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E5C158] block mb-3">
            Culinary Chronicles & Secrets
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F4EE] uppercase leading-tight">
            The Zena Recipe Collection
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-[#C5BCAD] max-w-2xl mx-auto leading-relaxed">
            Elevated Nigerian gastronomy. Step inside our atelier with tested recipes, authentic proportions, and expert culinary notes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        {/* Featured Masterclass: Royal Fisherman Soup */}
        <div className="bg-[#11100E] rounded-3xl border border-[#24201A] p-6 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#2B261E]">
              <img
                src={FEATURED_MASTERCLASS_RECIPE.image}
                alt="Fisherman Soup Masterclass"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#E5C158] text-[#080807] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                Masterclass Spotlight
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5C158]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
                  COASTAL GASTRONOMY
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE]">
                {FEATURED_MASTERCLASS_RECIPE.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#A69E90] leading-relaxed">
                {FEATURED_MASTERCLASS_RECIPE.description}
              </p>

              {/* Variations */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C8375] block mb-2">
                  Three Regional Interpretations:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {FEATURED_MASTERCLASS_RECIPE.variations?.map((variant) => (
                    <div
                      key={variant.name}
                      className="p-3.5 bg-[#161411] rounded-xl border border-[#28231C] flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-serif font-bold text-xs text-[#E5C158]">
                          {variant.name}
                        </h4>
                        <p className="text-[11px] text-[#A69E90] mt-1">{variant.description}</p>
                        <p className="text-[10px] text-[#C97A3E] mt-1.5 font-medium">
                          Twist: {variant.twist}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenRecipeModal(FEATURED_MASTERCLASS_RECIPE)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all cursor-pointer shadow-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>VIEW COMPLETE RECIPE STEPS</span>
                </button>
                <button
                  onClick={() => handleOrderMasterclass(FEATURED_MASTERCLASS_RECIPE.title)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F7F4EE] border border-[#3A3326] hover:bg-[#1C1814] rounded-full transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#E5C158]" />
                  <span>ORDER PREPARED ON WHATSAPP</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#E5C158] text-[#080807] shadow-sm"
                    : "bg-[#141210] text-[#A69E90] hover:text-[#F7F4EE] hover:bg-[#1E1B17] border border-[#26221B]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onOpenRecipe={onOpenRecipeModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
