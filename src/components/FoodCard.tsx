import React, { useState } from "react";
import { MessageCircle, Plus, Check, Sparkles } from "lucide-react";
import { MenuItem } from "../types";
import { formatCurrency, generateSingleItemOrderUrl } from "../utils/whatsapp";

interface FoodCardProps {
  item: MenuItem;
  onOpenOrderModal: (item: MenuItem) => void;
  onAddToTray?: (item: MenuItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  item,
  onOpenOrderModal,
  onAddToTray,
}) => {
  const [addedAnim, setAddedAnim] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleInstantWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.accompaniments && item.accompaniments.length > 0) {
      onOpenOrderModal(item);
    } else {
      window.open(generateSingleItemOrderUrl(item, 1), "_blank", "noopener,noreferrer");
    }
  };

  const handleAddTrayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToTray) {
      onAddToTray(item);
      setAddedAnim(true);
      setTimeout(() => setAddedAnim(false), 1400);
    }
  };

  return (
    <div
      onClick={() => onOpenOrderModal(item)}
      className="group bg-[#12110F] hover:bg-[#161411] rounded-2xl border border-[#24201A] hover:border-[#E5C158]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(229,193,88,0.18)] hover:-translate-y-1.5 cursor-pointer"
    >
      {/* Visual Asset Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1A1815]">
        {imageLoaded ? (
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            onError={() => setImageLoaded(false)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#1A1815] text-[#8C8375] text-center">
            <span className="font-serif text-lg font-bold text-[#F7F4EE]">{item.name}</span>
            <span className="text-xs mt-1 text-[#E5C158]">Haute Nigerian Gastronomy</span>
          </div>
        )}

        {/* Ambient Dark Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12110F] via-transparent to-black/40 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Category kicker */}
        <div className="absolute top-3 left-3 bg-[#080807]/80 backdrop-blur-md text-[#E5C158] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded border border-[#E5C158]/20">
          {item.categoryLabel}
        </div>

        {/* Price tag */}
        <div className="absolute top-3 right-3 bg-[#080807]/90 backdrop-blur-md text-[#F7F4EE] font-mono font-bold text-xs px-3 py-1 rounded-full border border-[#3A3326]">
          {formatCurrency(item.price)}
        </div>
      </div>

      {/* Description & Flavour Anatomy */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-2 text-[11px] text-[#8C8375] mb-2 tracking-wide">
            <span>{item.prepTime || "Slow Cooked"}</span>
            {item.spiciness && (
              <>
                <span aria-hidden="true" className="text-[#3A3326]">/</span>
                <span className="text-[#C97A3E]">{item.spiciness}</span>
              </>
            )}
            {item.isPopular && (
              <>
                <span aria-hidden="true" className="text-[#3A3326]">/</span>
                <span className="text-[#E5C158]">Atelier Signature</span>
              </>
            )}
          </div>

          <h3 className="font-serif text-lg font-bold text-[#F7F4EE] group-hover:text-[#E5C158] transition-colors leading-snug">
            {item.name}
          </h3>

          {item.hauteSubtitle && (
            <p className="mt-1 text-xs text-[#A69E90] italic line-clamp-1">
              {item.hauteSubtitle}
            </p>
          )}

          <p className="mt-2.5 text-xs text-[#8C8375] line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Flavor Notes Pill-free row */}
          {item.flavorNotes && item.flavorNotes.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-[#1F1C18] flex flex-wrap items-center gap-1.5 text-[10px] text-[#A69E90]">
              <span className="text-[#E5C158]">Notes:</span>
              <span>{item.flavorNotes.join(" · ")}</span>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="mt-5 pt-3.5 border-t border-[#1F1C18] flex items-center gap-2">
          <button
            type="button"
            onClick={handleInstantWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 active:scale-98 rounded-xl transition-all shadow cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>ORDER ON WHATSAPP</span>
          </button>

          {onAddToTray && (
            <button
              type="button"
              onClick={handleAddTrayClick}
              title="Add to WhatsApp Order Tray"
              aria-label="Add to WhatsApp Order Tray"
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                addedAnim
                  ? "bg-[#E5C158] text-[#080807] border-[#E5C158]"
                  : "bg-[#181613] hover:bg-[#221F1B] text-[#DCD5C9] border-[#2E2820]"
              }`}
            >
              {addedAnim ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
