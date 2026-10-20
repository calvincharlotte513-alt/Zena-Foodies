import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ShoppingBag, Phone, Sparkles } from "lucide-react";
import { PageView } from "../types";
import { BRAND, WHATSAPP_NUMBER } from "../constants/config";
import { generateGeneralInquiryUrl } from "../utils/whatsapp";

interface NavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  trayItemCount: number;
  onOpenTray: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  trayItemCount,
  onOpenTray,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView }[] = [
    { label: "Home", page: "home" },
    { label: "Our Menu", page: "menu" },
    { label: "Smoothies", page: "smoothies" },
    { label: "Nigerian Delicacies", page: "delicacies" },
    { label: "Recipes", page: "recipes" },
    { label: "About Us", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDirectWhatsApp = () => {
    window.open(generateGeneralInquiryUrl("Direct order inquiry"), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0908]/95 backdrop-blur-md py-3.5 border-b border-[#24201A] shadow-2xl"
            : "bg-[#080807]/75 backdrop-blur-sm py-5 border-b border-[#1A1815]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark with haute gold accent */}
            <button
              onClick={() => handleNavClick("home")}
              className="text-left group cursor-pointer focus:outline-none flex items-center gap-2"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F7F4EE] group-hover:text-[#E5C158] transition-colors whitespace-nowrap shrink-0">
                Zena Foodies
              </span>
            </button>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase text-[#B5ADA0]">
              {navLinks.map((link) => {
                const isActive = activePage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`relative py-1 transition-all whitespace-nowrap shrink-0 focus:outline-none cursor-pointer ${
                      isActive
                        ? "text-[#E5C158] font-semibold"
                        : "text-[#B5ADA0] hover:text-[#F7F4EE]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] rounded-full shadow-[0_0_8px_rgba(229,193,88,0.5)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action + tray shortcut */}
            <div className="flex items-center gap-3 shrink-0">
              {trayItemCount > 0 && (
                <button
                  onClick={onOpenTray}
                  aria-label="View Order Tray"
                  className="relative p-2.5 rounded-full bg-[#1A1815] hover:bg-[#25221D] border border-[#2F2921] text-[#E5C158] transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 bg-[#C97A3E] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {trayItemCount}
                  </span>
                </button>
              )}

              {/* Primary WhatsApp CTA in burnished gold */}
              <button
                onClick={handleDirectWhatsApp}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 active:scale-98 rounded-full shadow-[0_0_20px_-5px_rgba(229,193,88,0.4)] transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>ORDER ON WHATSAPP</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 text-[#F7F4EE] hover:text-[#E5C158] focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0F0E0C] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#24201A]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#24201A]">
                <div>
                  <span className="font-serif text-xl font-bold text-[#F7F4EE]">
                    Zena Foodies
                  </span>
                  <span className="text-[10px] text-[#A69E90] block tracking-widest uppercase">
                    Haute Nigerian Atelier
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#A69E90] hover:text-[#F7F4EE] cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activePage === link.page;
                  return (
                    <button
                      key={link.page}
                      onClick={() => handleNavClick(link.page)}
                      className={`text-left px-3.5 py-3 rounded-xl text-sm font-medium tracking-wide uppercase transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#1E1B16] text-[#E5C158] font-bold border border-[#3A3326]"
                          : "text-[#C5BCAD] hover:bg-[#1A1815] hover:text-[#F7F4EE]"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#24201A] space-y-3">
              <button
                onClick={handleDirectWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] rounded-full shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>ORDER ON WHATSAPP</span>
              </button>

              <a
                href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#C5BCAD] bg-[#1A1815] rounded-full border border-[#2F2921]"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>{BRAND.phone}</span>
              </a>

              <p className="text-center text-[11px] text-[#7A7265] pt-1">
                WhatsApp Concierge: +{WHATSAPP_NUMBER}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
