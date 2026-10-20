import React, { useState } from "react";
import { X, Plus, Minus, MessageCircle, ShoppingBag } from "lucide-react";
import { MenuItem } from "../types";
import { formatCurrency, generateSingleItemOrderUrl } from "../utils/whatsapp";

interface WhatsAppOrderModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToTray?: (item: MenuItem, quantity: number, accompaniment?: string, notes?: string) => void;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  item,
  onClose,
  onAddToTray,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedAccompaniment, setSelectedAccompaniment] = useState<string>(
    item.accompaniments && item.accompaniments.length > 0 ? item.accompaniments[0] : ""
  );
  const [specialNote, setSpecialNote] = useState("");

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const subtotal = item.price * quantity;

  const handleSendToWhatsApp = () => {
    const url = generateSingleItemOrderUrl(
      item,
      quantity,
      selectedAccompaniment || undefined,
      specialNote || undefined
    );
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const handleAddToTrayClick = () => {
    if (onAddToTray) {
      onAddToTray(item, quantity, selectedAccompaniment || undefined, specialNote || undefined);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative bg-[#0E0D0B] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#2B261E] z-10 text-[#F7F4EE]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1A1815]/80 hover:bg-[#25221D] text-[#E5C158] border border-[#3A3326] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Header */}
        <div className="relative aspect-[16/9] w-full bg-[#181613] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/60 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158]">
              {item.categoryLabel}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F7F4EE] mt-0.5">
              {item.name}
            </h3>
            <p className="text-xs text-[#E5C158] font-mono mt-0.5">
              {formatCurrency(item.price)} each
            </p>
          </div>
        </div>

        {/* Modal Controls */}
        <div className="p-6 space-y-5">
          <p className="text-xs text-[#A69E90] leading-relaxed">
            {item.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between py-3 px-4 bg-[#141210] rounded-2xl border border-[#26221B]">
            <span className="text-xs font-medium text-[#C5BCAD]">Order Quantity:</span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleDecrement}
                disabled={quantity <= 1}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[#3A3326] text-[#F7F4EE] hover:bg-[#221F1B] disabled:opacity-30 cursor-pointer"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-sm font-bold tabular-nums min-w-[20px] text-center text-[#E5C158]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[#3A3326] text-[#F7F4EE] hover:bg-[#221F1B] cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Swallow or Side Selection */}
          {item.accompaniments && item.accompaniments.length > 0 && (
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158] block">
                Select Swallow / Side Pairing:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.accompaniments.map((side) => {
                  const isSelected = selectedAccompaniment === side;
                  return (
                    <button
                      key={side}
                      type="button"
                      onClick={() => setSelectedAccompaniment(side)}
                      className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#E5C158] text-[#080807] font-bold border-[#E5C158] shadow-sm"
                          : "bg-[#141210] text-[#C5BCAD] border-[#24201A] hover:bg-[#1C1814]"
                      }`}
                    >
                      {side}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158] block">
              Culinary Preference / Note (Optional):
            </label>
            <input
              type="text"
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              placeholder="e.g. Mild pepper, extra plantain, no beef"
              className="w-full px-3.5 py-2.5 text-xs bg-[#141210] border border-[#2B261E] rounded-xl focus:outline-none focus:border-[#E5C158] text-[#F7F4EE] placeholder:text-[#635C52]"
            />
          </div>

          {/* Total & Action Buttons */}
          <div className="pt-2 border-t border-[#24201A] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#8C8375]">Estimated Subtotal:</span>
              <span className="font-mono text-xl font-bold text-[#E5C158]">
                {formatCurrency(subtotal)}
              </span>
            </div>

            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all shadow cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>CONTINUE TO WHATSAPP</span>
            </button>

            {onAddToTray && (
              <button
                type="button"
                onClick={handleAddToTrayClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#C5BCAD] bg-[#181613] hover:bg-[#221F1B] border border-[#2B261E] rounded-full transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>ADD TO CONCIERGE TRAY</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
