import React, { useState } from "react";
import { MessageCircle, Sparkles, Check, Plus, Droplets } from "lucide-react";
import { SmoothieItem, MenuItem } from "../types";
import { formatCurrency, generateSmoothieOrderUrl } from "../utils/whatsapp";

interface SmoothieCardProps {
  smoothie: SmoothieItem;
  onAddToTray?: (item: MenuItem) => void;
}

export const SmoothieCard: React.FC<SmoothieCardProps> = ({
  smoothie,
  onAddToTray,
}) => {
  const [added, setAdded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(true);

  const handleOrderWhatsApp = () => {
    window.open(generateSmoothieOrderUrl(smoothie, 1), "_blank", "noopener,noreferrer");
  };

  const handleTrayAdd = () => {
    if (onAddToTray) {
      const mappedItem: MenuItem = {
        id: smoothie.id,
        name: smoothie.name,
        category: "smoothies",
        categoryLabel: "Cold-Pressed Elixir",
        price: smoothie.price,
        description: smoothie.description,
        image: smoothie.image,
        ingredients: smoothie.ingredients,
      };
      onAddToTray(mappedItem);
      setAdded(true);
      setTimeout(() => setAdded(false), 1400);
    }
  };

  return (
    <div className="group bg-[#12110F] hover:bg-[#161411] rounded-2xl border border-[#24201A] hover:border-[#E5C158]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(229,193,88,0.18)] hover:-translate-y-1.5">
      {/* Visual Canvas */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181613]">
        {imgLoaded ? (
          <img
            src={smoothie.image}
            alt={smoothie.name}
            referrerPolicy="no-referrer"
            onError={() => setImgLoaded(false)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#181613] text-[#8C8375] text-center">
            <span className="font-serif text-lg font-bold text-[#F7F4EE]">{smoothie.name}</span>
            <span className="text-xs mt-1 text-[#E5C158]">Cold-Pressed Botanical Elixir</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#12110F] via-transparent to-black/40 opacity-70 group-hover:opacity-40 transition-opacity" />

        <div className="absolute top-3 left-3 bg-[#080807]/85 backdrop-blur-md text-[#E5C158] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-[#E5C158]/20">
          Raw Cold Press
        </div>

        <div className="absolute top-3 right-3 bg-[#080807]/90 backdrop-blur-md text-[#F7F4EE] font-mono font-bold text-xs px-3 py-1 rounded-full border border-[#3A3326]">
          {formatCurrency(smoothie.price)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] text-[#8C8375] mb-2 tracking-wide">
            <span>500ml Chilled Bottle</span>
            <span aria-hidden="true" className="text-[#3A3326]">/</span>
            <span className="text-[#E5C158]">Zero Refined Sugars</span>
          </div>

          <h3 className="font-serif text-lg font-bold text-[#F7F4EE] group-hover:text-[#E5C158] transition-colors leading-tight">
            {smoothie.name}
          </h3>

          <p className="mt-1 text-xs text-[#A69E90] italic line-clamp-1">
            {smoothie.alchemicalNote}
          </p>

          <p className="mt-2.5 text-xs text-[#8C8375] leading-relaxed line-clamp-2">
            {smoothie.description}
          </p>

          {/* Clean unboxed ingredient list */}
          <div className="mt-3.5 pt-2.5 border-t border-[#1F1C18]">
            <p className="text-[11px] text-[#A69E90]">
              <span className="text-[#E5C158]">Ingredients:</span>{" "}
              {smoothie.ingredients.join(" · ")}
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-[#C5BCAD]">
            <Sparkles className="w-3 h-3 text-[#E5C158] shrink-0" />
            <span>{smoothie.botanicalBenefits.join(" · ")}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 pt-3.5 border-t border-[#1F1C18] flex items-center gap-2">
          <button
            type="button"
            onClick={handleOrderWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 active:scale-98 rounded-xl transition-all shadow cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>ORDER ON WHATSAPP</span>
          </button>

          {onAddToTray && (
            <button
              type="button"
              onClick={handleTrayAdd}
              title="Add to WhatsApp Order Tray"
              aria-label="Add to WhatsApp Order Tray"
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                added
                  ? "bg-[#E5C158] text-[#080807] border-[#E5C158]"
                  : "bg-[#181613] hover:bg-[#221F1B] text-[#DCD5C9] border-[#2E2820]"
              }`}
            >
              {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
