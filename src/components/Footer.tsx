import React from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { PageView } from "../types";
import { BRAND, WHATSAPP_NUMBER } from "../constants/config";
import { generateGeneralInquiryUrl } from "../utils/whatsapp";

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open(generateGeneralInquiryUrl("Inquiring from website footer"), "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-[#050504] text-[#C5BCAD] pt-20 pb-12 border-t border-[#1F1C18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-[#1A1815]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-[#F7F4EE]">
                Zena Foodies
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E5C158]">
              Atelier of Nigerian Culinary Excellence
            </p>
            <p className="text-[#8C8375] text-sm leading-relaxed max-w-sm">
              Authentic Nigerian flavours. Fresh smoothies. Good food made with love.
              Curating heritage recipes, coastal seafood broths, and cold-pressed botanical fruit elixirs for connoisseurs of extraordinary taste.
            </p>
            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>ORDER ON WHATSAPP (+{WHATSAPP_NUMBER})</span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="text-[#A69E90] hover:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("menu")}
                  className="text-[#A69E90] hover:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  The Atelier Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("smoothies")}
                  className="text-[#A69E90] hover:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  Fresh Fruit Smoothies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("delicacies")}
                  className="text-[#A69E90] hover:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  Nigerian Delicacies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("recipes")}
                  className="text-[#A69E90] hover:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  Culinary Chronicles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about")}
                  className="text-[#A69E90] hover:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  The Heart of Zena
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="text-[#A69E90] hover:text-[#F7F4EE] transition-colors cursor-pointer"
                >
                  Concierge & Ordering
                </button>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
              Culinary Signatures
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8C8375]">
              <li>Grand Fisherman Seafood Soup</li>
              <li>Imperial Peppered Escargot & Asun</li>
              <li>Golden Pan-Curded Egusi</li>
              <li>Smokey Woodfire Jollof Rice</li>
              <li>Suya-Glazed Whole Croaker</li>
              <li>Golden Mango Sun Elixir</li>
              <li>Wild Ruby Berry Nectar</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E5C158]">
              Concierge Access
            </h4>
            <ul className="space-y-3 text-xs text-[#8C8375]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5C158] shrink-0" />
                <a href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="font-mono text-[#D4AF37]">+{WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5C158] shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                <span>{BRAND.hours.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#635C52]">
          <p>© 2026 Zena Foodies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>VIP Island & Mainland Express Courier</span>
            <span aria-hidden="true">·</span>
            <span>Zero Preservatives</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
