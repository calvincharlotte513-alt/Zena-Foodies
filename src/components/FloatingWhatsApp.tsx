import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { generateGeneralInquiryUrl } from "../utils/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open(generateGeneralInquiryUrl("Instant Concierge Inquiry"), "_blank", "noopener,noreferrer");
  };

  return (
    <aside
      aria-label="WhatsApp quick order concierge"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Tooltip on hover */}
      {showTooltip && (
        <div className="hidden sm:block bg-[#12110F] text-[#F7F4EE] text-xs px-3.5 py-2 rounded-xl shadow-2xl border border-[#3A3326] whitespace-nowrap">
          <p className="font-bold text-[#E5C158]">WhatsApp VIP Concierge</p>
          <p className="text-[10px] text-[#A69E90]">Instant response · Fresh daily</p>
        </div>
      )}

      {/* Floating Action Button with gold glow */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Order on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 active:scale-95 text-[#080807] px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_0_25px_-5px_rgba(229,193,88,0.5)] transition-all duration-300 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wider uppercase whitespace-nowrap">
          Order on WhatsApp
        </span>
      </button>
    </aside>
  );
};
