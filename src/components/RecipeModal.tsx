import React from "react";
import { X, Clock, ChefHat, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { Recipe } from "../types";
import { WHATSAPP_NUMBER } from "../constants/config";

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  const handleOrderCooked = () => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    const message = `Hello Zena Foodies 👋\n\nI was studying your masterclass for "${recipe.title}" and would love to order a freshly prepared haute serving of this dish directly from your kitchen!\n\nPlease let me know availability and delivery timing.\n\nThank you!`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#0E0D0B] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#2B261E] z-10 text-[#F7F4EE]">
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          aria-label="Close recipe details"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1A1815]/80 hover:bg-[#25221D] text-[#E5C158] border border-[#3A3326] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#181613]">
          <img
            src={recipe.image}
            alt={recipe.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5C158]">
              {recipe.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#F7F4EE]">
              {recipe.title}
            </h2>
          </div>
        </div>

        {/* Quick Facts Bar */}
        <div className="grid grid-cols-3 border-b border-[#24201A] bg-[#12110F] divide-x divide-[#24201A] text-center py-3">
          <div className="px-3">
            <span className="text-[10px] uppercase tracking-widest text-[#8C8375] block">Prep & Cook</span>
            <span className="text-xs sm:text-sm font-semibold text-[#F7F4EE]">
              {recipe.prepTime} / {recipe.cookTime}
            </span>
          </div>
          <div className="px-3">
            <span className="text-[10px] uppercase tracking-widest text-[#8C8375] block">Portions</span>
            <span className="text-xs sm:text-sm font-semibold text-[#F7F4EE]">
              {recipe.servings}
            </span>
          </div>
          <div className="px-3">
            <span className="text-[10px] uppercase tracking-widest text-[#8C8375] block">Discipline</span>
            <span className="text-xs sm:text-sm font-semibold text-[#E5C158]">
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <p className="text-sm text-[#C5BCAD] leading-relaxed">
            {recipe.description}
          </p>

          {/* Flavor Philosophy */}
          {recipe.flavorPhilosophy && (
            <div className="p-4 rounded-xl bg-[#161411] border border-[#2D2820]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158] block mb-1">
                Flavour Philosophy
              </span>
              <p className="text-xs text-[#DCD5C9] italic">
                “{recipe.flavorPhilosophy}”
              </p>
            </div>
          )}

          {/* Variations if applicable */}
          {recipe.variations && recipe.variations.length > 0 && (
            <div className="bg-[#141210] border border-[#26221B] rounded-2xl p-5 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5C158]" />
                <h3 className="font-serif text-base font-bold text-[#F7F4EE]">
                  Regional Interpretations
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipe.variations.map((v) => (
                  <div key={v.name} className="bg-[#1A1815] p-3.5 rounded-xl border border-[#2B261E]">
                    <h4 className="font-semibold text-xs text-[#E5C158]">{v.name}</h4>
                    <p className="text-[11px] text-[#A69E90] mt-1">{v.description}</p>
                    <p className="text-[10px] text-[#C97A3E] mt-1.5 font-medium">
                      Twist: {v.twist}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#F7F4EE] pb-2 border-b border-[#24201A]">
              Essential Ingredients
            </h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#C5BCAD]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C158] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#F7F4EE] pb-2 border-b border-[#24201A]">
              Step-by-Step Culinary Discipline
            </h3>
            <div className="mt-4 space-y-3">
              {recipe.instructions.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#141210] border border-[#24201A] text-xs text-[#C5BCAD] leading-relaxed">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Chef Tip */}
          {recipe.chefTip && (
            <div className="p-4 rounded-xl bg-[#1C1813] border border-[#3A3326]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158] block mb-1">
                Zena Master Chef’s Note
              </span>
              <p className="text-xs text-[#DCD5C9] italic">
                “{recipe.chefTip}”
              </p>
            </div>
          )}

          {/* Order Prepared */}
          <div className="pt-4 border-t border-[#24201A] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#8C8375]">Prefer to have it freshly prepared by our atelier?</p>
              <p className="text-sm font-semibold text-[#F7F4EE]">Order direct from our kitchen on WhatsApp</p>
            </div>
            <button
              onClick={handleOrderCooked}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ORDER PREPARED DISH ON WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
