import React from "react";
import { MessageCircle, Heart, Sparkles, Users } from "lucide-react";
import { ASSETS, WHATSAPP_NUMBER } from "../constants/config";
import { generateGeneralInquiryUrl } from "../utils/whatsapp";

export const AboutView: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(generateGeneralInquiryUrl("Connecting with Zena Foodies founders"), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pb-24 pt-24 sm:pt-28">
      {/* Full-width Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-[#24201A]">
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.kitchenStory}
            alt="The heart behind Zena Foodies"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#080807]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E5C158] block mb-3">
            Heritage & Devotion
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F7F4EE] uppercase leading-tight">
            The Heart Behind Zena Foodies
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-[#C5BCAD] max-w-2xl mx-auto leading-relaxed">
            Born out of a genuine devotion to good food, Nigerian hospitality, and the vibrant freshness of whole sun-ripened fruit.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5C158]">
              The Zena Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EE] leading-snug">
              Food Prepared with Soul, Patience, and Integrity
            </h2>
            <p className="text-xs sm:text-sm text-[#A69E90] leading-relaxed">
              Zena Foodies was founded on a simple truth: nothing replaces the warmth of an authentic, slow-cooked Nigerian meal. In a world full of rushed cooking and processed flavor enhancers, we chose the slower, more honest road.
            </p>
            <p className="text-xs sm:text-sm text-[#A69E90] leading-relaxed">
              We start before sunrise, grinding mature egusi melon seeds, hand-picking leafy ugu greens, slow-simmering peppers in seasoned broths, and tossing golden ripe sweet plantains. Alongside our soups and rice dishes, we craft raw fruit smoothies—blended from pure Benue pineapples, sweet mangoes, and wild berries—bringing living vitality to busy Lagos lives.
            </p>
            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080807] bg-gradient-to-r from-[#D4AF37] to-[#E5C158] hover:brightness-110 rounded-full transition-all cursor-pointer shadow"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>CHAT WITH US ON WHATSAPP</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#2B261E]">
              <img
                src={ASSETS.heroFeast}
                alt="Nigerian food hospitality at Zena Foodies"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-serif text-lg font-bold text-[#F7F4EE]">The Feast of Togetherness</p>
                <p className="text-xs text-[#A69E90]">Every meal is meant to be shared with family, colleagues, and friends.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kitchen Documentary Feature */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#2B261E]">
          <div className="relative h-96 sm:h-[460px] w-full">
            <img
              src={ASSETS.kitchenStory}
              alt="Nigerian culinary preparation in Zena kitchen"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080807] via-[#080807]/70 to-transparent" />
            <div className="absolute inset-y-0 left-0 max-w-lg p-8 sm:p-14 flex flex-col justify-center text-white space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158]">
                Inside Our Kitchen
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight text-[#F7F4EE]">
                No Shortcuts. Just Heritage Technique.
              </h3>
              <p className="text-xs sm:text-sm text-[#A69E90] leading-relaxed">
                From toasting whole native spices to allowing firewood embers to envelop our parboiled rice, each technique is guarded with culinary reverence.
              </p>
            </div>
          </div>
        </div>

        {/* Section: "WHY WE DO WHAT WE DO" */}
        <div className="bg-[#11100E] rounded-3xl p-8 sm:p-14 border border-[#24201A]">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5C158]">
              Our Manifesto
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EE]">
              WHY WE DO WHAT WE DO
            </h2>
            <p className="text-xs sm:text-sm text-[#8C8375] leading-relaxed">
              In Nigerian culture, to feed someone is to honour them. It is hospitality in its purest form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#161411] p-6 rounded-2xl border border-[#28231C] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1C1813] text-[#E5C158] flex items-center justify-center border border-[#3A3326]">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#F7F4EE]">Preserving Our Roots</h4>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                We believe authentic culinary traditions are cultural treasures. We cook recipes passed down through generations with absolute fidelity to the genuine Nigerian palate.
              </p>
            </div>

            <div className="bg-[#161411] p-6 rounded-2xl border border-[#28231C] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1C1813] text-[#C97A3E] flex items-center justify-center border border-[#3A3326]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#F7F4EE]">Nourishment & Refreshment</h4>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                By uniting hearty traditional dishes with fresh cold fruit smoothies, we give you the comfort of heritage cuisine and the refreshing vitality of clean fruits.
              </p>
            </div>

            <div className="bg-[#161411] p-6 rounded-2xl border border-[#28231C] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1C1813] text-[#E5C158] flex items-center justify-center border border-[#3A3326]">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#F7F4EE]">Bringing People Together</h4>
              <p className="text-xs text-[#8C8375] leading-relaxed">
                Whether it is lunch delivered to an office desk in Victoria Island or a Sunday family dinner in Lekki, we take joy in knowing our food sparks smiles and conversations.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 bg-[#12110F] rounded-2xl border border-[#24201A]">
            <span className="font-serif text-3xl font-bold text-[#E5C158] block">100%</span>
            <span className="text-[11px] text-[#8C8375] mt-1 block">Fresh Daily Sourcing</span>
          </div>
          <div className="p-5 bg-[#12110F] rounded-2xl border border-[#24201A]">
            <span className="font-serif text-3xl font-bold text-[#E5C158] block">Zero</span>
            <span className="text-[11px] text-[#8C8375] mt-1 block">Artificial Additives</span>
          </div>
          <div className="p-5 bg-[#12110F] rounded-2xl border border-[#24201A]">
            <span className="font-serif text-3xl font-bold text-[#E5C158] block">45m</span>
            <span className="text-[11px] text-[#8C8375] mt-1 block">Lagos Express Delivery</span>
          </div>
          <div className="p-5 bg-[#12110F] rounded-2xl border border-[#24201A]">
            <span className="font-serif text-3xl font-bold text-[#E5C158] block">★ 4.9</span>
            <span className="text-[11px] text-[#8C8375] mt-1 block">Culinary Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};
