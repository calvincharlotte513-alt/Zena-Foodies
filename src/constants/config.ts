/**
 * Zena Foodies - Haute Culinary Configuration
 * Easily update the WhatsApp concierge number and business details.
 */

import heroFeastImg from "../assets/images/hero_nigerian_feast_1792506408256.jpg";
import egusiSoupImg from "../assets/images/nigerian_egusi_soup_1792506409678.jpg";
import jollofPartyImg from "../assets/images/nigerian_jollof_party_1792506410069.jpg";
import smoothiesImg from "../assets/images/fresh_fruit_smoothies_1792506410251.jpg";
import okroSeafoodImg from "../assets/images/nigerian_okro_seafood_1792506430247.jpg";
import grilledFishImg from "../assets/images/nigerian_grilled_fish_1792506430890.jpg";
import kitchenStoryImg from "../assets/images/nigerian_kitchen_story_1792506432185.jpg";
import hauteSnailsAsunImg from "../assets/images/haute_peppered_snails_asun_1792507578678.jpg";
import fishermanSoupImg from "../assets/images/fisherman_soup_luxury_1792507579004.jpg";

// Replace this phone number with the actual WhatsApp business number (e.g. "234XXXXXXXXXX")
export const WHATSAPP_NUMBER = "2348149834211";

export const BRAND = {
  name: "Zena Foodies",
  title: "Atelier of Authentic Nigerian Gastronomy & Fresh Fruit Elixirs",
  tagline: "Uncompromising Heritage. Masterpiece Flavours. Liquid Elixirs.",
  description: "A luxury Nigerian culinary house crafting traditional slow-simmered delicacies, woodsmoke heritage rice, coastal seafood broths, and cold-pressed botanical fruit elixirs.",
  phone: "+234 814 983 4211",
  email: "concierge@zenafoodies.ng",
  address: "Victoria Island & Lekki Phase 1, Lagos, Nigeria",
  deliveryAreas: "Victoria Island, Ikoyi, Lekki Phase 1, Banana Island, Ikeja GRA & mainland express delivery",
  hours: {
    weekdays: "Monday – Saturday: 8:00 AM – 10:00 PM",
    sunday: "Sunday: 11:00 AM – 9:00 PM",
  },
  socials: {
    instagram: "https://instagram.com/zenafoodies",
    tiktok: "https://tiktok.com/@zenafoodies",
    twitter: "https://twitter.com/zenafoodies",
  },
  currency: "₦",
};

// High-fidelity image assets for Zena Foodies (Imported directly so Vite hashes and bundles them cleanly)
export const ASSETS = {
  heroFeast: heroFeastImg || "/images/hero_nigerian_feast_1792506408256.jpg",
  egusiSoup: egusiSoupImg || "/images/nigerian_egusi_soup_1792506409678.jpg",
  jollofParty: jollofPartyImg || "/images/nigerian_jollof_party_1792506410069.jpg",
  smoothies: smoothiesImg || "/images/fresh_fruit_smoothies_1792506410251.jpg",
  okroSeafood: okroSeafoodImg || "/images/nigerian_okro_seafood_1792506430247.jpg",
  grilledFish: grilledFishImg || "/images/nigerian_grilled_fish_1792506430890.jpg",
  kitchenStory: kitchenStoryImg || "/images/nigerian_kitchen_story_1792506432185.jpg",
  hauteSnailsAsun: hauteSnailsAsunImg || "/images/haute_peppered_snails_asun_1792507578678.jpg",
  fishermanSoup: fishermanSoupImg || "/images/fisherman_soup_luxury_1792507579004.jpg",
};
