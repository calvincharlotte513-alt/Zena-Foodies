import React, { useState } from "react";
import { Clock, ChefHat, ArrowRight } from "lucide-react";
import { Recipe } from "../types";

interface RecipeCardProps {
  recipe: Recipe;
  onOpenRecipe: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onOpenRecipe }) => {
  const [imgLoaded, setImgLoaded] = useState(true);

  return (
    <div
      onClick={() => onOpenRecipe(recipe)}
      className="group bg-[#12110F] hover:bg-[#161411] rounded-2xl border border-[#24201A] hover:border-[#E5C158]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(229,193,88,0.18)] hover:-translate-y-1.5 cursor-pointer"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181613]">
        {imgLoaded ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            referrerPolicy="no-referrer"
            onError={() => setImgLoaded(false)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#181613] text-[#8C8375] text-center">
            <span className="font-serif text-lg font-bold text-[#F7F4EE]">{recipe.title}</span>
            <span className="text-xs mt-1 text-[#E5C158]">Culinary Chronicle</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#12110F] via-transparent to-black/40 opacity-70 group-hover:opacity-40 transition-opacity" />

        <div className="absolute top-3 left-3 bg-[#080807]/85 backdrop-blur-md text-[#E5C158] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-[#E5C158]/20">
          {recipe.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-[#8C8375] mb-2 tracking-wide">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#E5C158]" />
              {recipe.prepTime} prep · {recipe.cookTime} cook
            </span>
            <span aria-hidden="true" className="text-[#3A3326]">/</span>
            <span className="inline-flex items-center gap-1 text-[#C5BCAD]">
              <ChefHat className="w-3 h-3 text-[#E5C158]" />
              {recipe.difficulty}
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-[#F7F4EE] group-hover:text-[#E5C158] transition-colors leading-snug">
            {recipe.title}
          </h3>

          <p className="mt-2 text-xs text-[#8C8375] line-clamp-3 leading-relaxed">
            {recipe.description}
          </p>

          {recipe.variations && recipe.variations.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-[#1F1C18]">
              <span className="text-[11px] text-[#C97A3E] font-medium">
                {recipe.variations.length} Heritage Regional Interpretations
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 pt-3.5 border-t border-[#1F1C18] flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5C158] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
            EXPLORE MASTERCLASS
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <span className="text-[11px] text-[#8C8375] font-mono">
            {recipe.ingredients.length} Ingredients
          </span>
        </div>
      </div>
    </div>
  );
};
