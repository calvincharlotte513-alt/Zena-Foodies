import React, { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { ASSETS, BRAND, WHATSAPP_NUMBER } from "../constants/config";
import { generateGeneralInquiryUrl } from "../utils/whatsapp";

export const ContactView: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("Daily Food & Soup Delivery");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleDirectWhatsAppChat = () => {
    window.open(generateGeneralInquiryUrl("Direct Customer Concierge Inquiry"), "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
    let text = `Hello Zena Foodies 👋\n\n`;
    text += `New Inquiry via Atelier Concierge:\n`;
    text += `👤 Name: ${name || "Guest"}\n`;
    if (phone) text += `📞 Phone: ${phone}\n`;
    text += `📋 Subject: ${inquiryType}\n`;
    if (message) text += `💬 Message: ${message}\n\n`;
    text += `Looking forward to your response!`;

    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="pb-24 pt-24 sm:pt-28">
      {/* Header */}
      <div className="relative bg-[#0E0D0B] text-white py-16 sm:py-24 overflow-hidden border-b border-[#24201A]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={ASSETS.kitchenStory}
            alt="Contact Zena Foodies"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E5C158] block mb-3">
            Concierge Direct Access
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F4EE] uppercase leading-tight">
            Let’s Talk Food
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-[#C5BCAD] max-w-2xl mx-auto leading-relaxed">
            Have questions about today’s menu, bulk family soup bowls, smoothie subscription coolers, or VIP event catering? Connect directly with our concierge.
          </p>

          <div className="mt-8">
            <button
              onClick={handleDirectWhatsAppChat}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:brightness-110 rounded-full transition-all shadow-xl cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>CHAT WITH ZENA FOODIES ON WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5C158]">
                Real-Time Concierge
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F4EE] mt-1">
                Reach Our Kitchen
              </h2>
              <p className="text-xs sm:text-sm text-[#8C8375] mt-2 leading-relaxed">
                WhatsApp is our quickest ordering channel. Our kitchen dispatch team replies in real-time to confirm meal availability and dispatch riders across Lagos.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* WhatsApp */}
              <div className="p-4 bg-[#12110F] rounded-2xl border border-[#24201A] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1813] text-[#25D366] flex items-center justify-center shrink-0 border border-[#2F2921]">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-[#8C8375] uppercase font-bold tracking-wider">WhatsApp (Primary)</span>
                  <p className="font-mono text-sm font-bold text-[#F7F4EE] mt-0.5">
                    +{WHATSAPP_NUMBER}
                  </p>
                  <button
                    onClick={handleDirectWhatsAppChat}
                    className="text-xs font-bold text-[#E5C158] hover:underline mt-1 inline-block cursor-pointer"
                  >
                    Open Live Chat Now →
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 bg-[#12110F] rounded-2xl border border-[#24201A] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1813] text-[#E5C158] flex items-center justify-center shrink-0 border border-[#2F2921]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8C8375] uppercase font-bold tracking-wider">Direct Telephone</span>
                  <p className="font-mono text-sm font-bold text-[#F7F4EE] mt-0.5">
                    {BRAND.phone}
                  </p>
                  <a
                    href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-xs font-bold text-[#E5C158] hover:underline mt-1 inline-block"
                  >
                    Call Our Kitchen →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-[#12110F] rounded-2xl border border-[#24201A] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1813] text-[#C97A3E] flex items-center justify-center shrink-0 border border-[#2F2921]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8C8375] uppercase font-bold tracking-wider">Email Concierge</span>
                  <p className="text-xs font-semibold text-[#F7F4EE] mt-0.5">
                    {BRAND.email}
                  </p>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-xs font-bold text-[#E5C158] hover:underline mt-1 inline-block"
                  >
                    Send Email →
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 bg-[#12110F] rounded-2xl border border-[#24201A] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1813] text-[#E5C158] flex items-center justify-center shrink-0 border border-[#2F2921]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8C8375] uppercase font-bold tracking-wider">Kitchen Location & Deliveries</span>
                  <p className="text-xs font-semibold text-[#F7F4EE] mt-0.5">
                    {BRAND.address}
                  </p>
                  <p className="text-[11px] text-[#8C8375] mt-1">
                    Coverage: {BRAND.deliveryAreas}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="p-4 bg-[#12110F] rounded-2xl border border-[#24201A] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1813] text-[#E5C158] flex items-center justify-center shrink-0 border border-[#2F2921]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#8C8375] uppercase font-bold tracking-wider">Kitchen Operating Hours</span>
                  <p className="text-xs text-[#F7F4EE] mt-0.5">
                    {BRAND.hours.weekdays}
                  </p>
                  <p className="text-xs text-[#8C8375] mt-0.5">
                    {BRAND.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#12110F] rounded-3xl p-8 sm:p-10 border border-[#24201A] shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158]">
                Instant Connection
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F7F4EE] mt-1 mb-2">
                WhatsApp Inquiry Form
              </h3>
              <p className="text-xs text-[#8C8375] mb-6">
                Fill in your details below to generate a pre-formatted WhatsApp message directly to our chef and orders manager.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-[#1E1B16] border border-[#3A3326] flex items-center gap-3 text-xs text-[#E5C158]">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>WhatsApp opened with your pre-filled inquiry. You can now press send in WhatsApp!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#C5BCAD] block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Chioma Adeleke"
                      className="w-full px-4 py-2.5 text-xs bg-[#181613] border border-[#2B261E] rounded-xl focus:outline-none focus:border-[#E5C158] text-[#F7F4EE]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#C5BCAD] block mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0812 345 6789"
                      className="w-full px-4 py-2.5 text-xs bg-[#181613] border border-[#2B261E] rounded-xl focus:outline-none focus:border-[#E5C158] text-[#F7F4EE]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#C5BCAD] block mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs bg-[#181613] border border-[#2B261E] rounded-xl focus:outline-none focus:border-[#E5C158] text-[#F7F4EE]"
                  >
                    <option value="Daily Food & Soup Delivery">Daily Food & Soup Delivery</option>
                    <option value="Family Soup Bowl (2L / 5L)">Family Soup Bowl (2L / 5L)</option>
                    <option value="Fresh Botanical Smoothie Pack">Fresh Botanical Smoothie Pack</option>
                    <option value="Corporate Boardroom Catering">Corporate Boardroom Catering</option>
                    <option value="Weekend Celebration Platter">Weekend Celebration Platter</option>
                    <option value="General Concierge Question">General Concierge Question</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#C5BCAD] block mb-1">
                    Your Message / Culinary Preference
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you would like to order or ask..."
                    className="w-full px-4 py-2.5 text-xs bg-[#181613] border border-[#2B261E] rounded-xl focus:outline-none focus:border-[#E5C158] text-[#F7F4EE]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>START CHAT ON WHATSAPP</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
