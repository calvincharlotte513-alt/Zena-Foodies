export type MenuCategory =
  | "all"
  | "soups"
  | "rice-main"
  | "proteins"
  | "sides"
  | "delicacies"
  | "smoothies"
  | "specials";

export interface MenuItem {
  id: string;
  name: string;
  hauteSubtitle?: string;
  category: MenuCategory;
  categoryLabel: string;
  price: number;
  description: string;
  image: string;
  flavorNotes?: string[];
  ingredients?: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
  spiciness?: "Mild" | "Balanced" | "Lagos Heat" | "Flame Charred";
  prepTime?: string;
  accompaniments?: string[];
}

export interface SmoothieItem {
  id: string;
  name: string;
  alchemicalNote: string;
  price: number;
  description: string;
  image: string;
  ingredients: string[];
  botanicalBenefits: string[];
  accentColor: string;
  isBestseller?: boolean;
}

export interface RecipeVariation {
  name: string;
  description: string;
  twist: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: "Haute Masterclass" | "Heritage Craft" | "Artisan Blend";
  image: string;
  description: string;
  flavorPhilosophy: string;
  ingredients: string[];
  instructions: string[];
  chefTip: string;
  variations?: RecipeVariation[];
}

export interface TrayItem {
  item: MenuItem;
  quantity: number;
  selectedAccompaniment?: string;
  specialInstructions?: string;
}

export type PageView =
  | "home"
  | "menu"
  | "smoothies"
  | "delicacies"
  | "recipes"
  | "about"
  | "contact";
