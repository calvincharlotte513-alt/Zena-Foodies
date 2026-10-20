import React, { useState } from "react";
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag } from "lucide-react";
import { TrayItem } from "../types";
import { formatCurrency, generateTrayOrderUrl } from "../utils/whatsapp";

interface WhatsAppTrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: TrayItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearTray: () => void;
}

export const WhatsAppTrayDrawer: React.FC<WhatsAppTrayDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearTray,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, t) => sum + t.item.price * t.quantity,
    0
  );

  const handleLaunchWhatsApp = () => {
    if (items.length === 0) return;
    const url = generateTrayOrderUrl(items, customerName, deliveryLocation);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0B0A08] shadow-2xl flex flex-col justify-between border-l border-[#24201A] text-[#F7F4EE]">
          {/* Header */}
          <div className="p-6 border-b border-[#24201A] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#E5C158]" />
              <div>
                <h3 className="font-serif text-lg font-bold text-[#F7F4EE]">
                  Concierge Order Tray
                </h3>
                <span className="text-[10px] text-[#8C8375] uppercase tracking-widest block">
                  Multi-Dish WhatsApp Bundle
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close tray"
              className="p-2 text-[#8C8375] hover:text-[#F7F4EE] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[#24201A] mx-auto" />
                <p className="font-serif text-base font-bold text-[#F7F4EE]">
                  Your Tray is Empty
                </p>
                <p className="text-xs text-[#8C8375] max-w-xs mx-auto">
                  Add heritage soups, seafood broths, or cold pressed elixirs to dispatch a consolidated order via WhatsApp.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-[11px] text-[#8C8375] pb-1">
                  <span>{items.length} curated dishes selected</span>
                  <button
                    onClick={onClearTray}
                    className="text-[#C97A3E] hover:underline cursor-pointer"
                  >
                    Clear Tray
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((trayItem) => (
                    <div
                      key={trayItem.item.id}
                      className="p-3.5 bg-[#141210] rounded-2xl border border-[#24201A] flex items-center gap-3.5"
                    >
                      <img
                        src={trayItem.item.image}
                        alt={trayItem.item.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-xl object-cover shrink-0 bg-[#1F1C18]"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-xs font-bold text-[#F7F4EE] truncate">
                          {trayItem.item.name}
                        </h4>
                        {trayItem.selectedAccompaniment && (
                          <p className="text-[10px] text-[#8C8375] truncate">
                            Pairing: {trayItem.selectedAccompaniment}
                          </p>
                        )}
                        <p className="text-xs font-mono font-bold text-[#E5C158] mt-0.5">
                          {formatCurrency(trayItem.item.price * trayItem.quantity)}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <button
                          onClick={() => onRemoveItem(trayItem.item.id)}
                          className="text-[#635C52] hover:text-[#C97A3E] transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-2 border border-[#2B261E] rounded-lg px-2 py-0.5 bg-[#0E0D0B]">
                          <button
                            onClick={() =>
                              onUpdateQuantity(trayItem.item.id, trayItem.quantity - 1)
                            }
                            className="text-[#C5BCAD] hover:text-[#C97A3E]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold tabular-nums text-[#F7F4EE]">
                            {trayItem.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(trayItem.item.id, trayItem.quantity + 1)
                            }
                            className="text-[#C5BCAD] hover:text-[#E5C158]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#24201A] space-y-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-[#8C8375] block mb-1">
                      Guest / Customer Name (Optional):
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Adebayo Adeleke"
                      className="w-full px-3 py-2 text-xs bg-[#141210] border border-[#2B261E] rounded-xl focus:outline-none focus:border-[#E5C158] text-[#F7F4EE] placeholder:text-[#635C52]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-[#8C8375] block mb-1">
                      Delivery Address / Lagos District (Optional):
                    </label>
                    <input
                      type="text"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      placeholder="e.g. Bourdillon Road, Ikoyi / Admiralty Way, Lekki"
                      className="w-full px-3 py-2 text-xs bg-[#141210] border border-[#2B261E] rounded-xl focus:outline-none focus:border-[#E5C158] text-[#F7F4EE] placeholder:text-[#635C52]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#24201A] bg-[#0E0D0B] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#8C8375]">Estimated Subtotal:</span>
                <span className="font-mono text-xl font-bold text-[#E5C158]">
                  {formatCurrency(totalAmount)}
                </span>
              </div>
              <p className="text-[10px] text-[#8C8375] text-center">
                Pre-fills an itemized list in WhatsApp for instantaneous concierge dispatch.
              </p>
              <button
                onClick={handleLaunchWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 active:scale-98 rounded-full transition-all shadow-xl cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>SEND ORDER TO CONCIERGE WHATSAPP</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
