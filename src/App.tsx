/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MenuItem, PageView, Recipe, TrayItem } from "./types";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { WhatsAppOrderModal } from "./components/WhatsAppOrderModal";
import { RecipeModal } from "./components/RecipeModal";
import { WhatsAppTrayDrawer } from "./components/WhatsAppTrayDrawer";
import { HomeView } from "./views/HomeView";
import { MenuView } from "./views/MenuView";
import { SmoothiesView } from "./views/SmoothiesView";
import { DelicaciesView } from "./views/DelicaciesView";
import { RecipesView } from "./views/RecipesView";
import { AboutView } from "./views/AboutView";
import { ContactView } from "./views/ContactView";

export default function App() {
  const [activePage, setActivePage] = useState<PageView>("home");
  const [orderModalItem, setOrderModalItem] = useState<MenuItem | null>(null);
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  const [trayItems, setTrayItems] = useState<TrayItem[]>([]);

  // Scroll to top when page changes
  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add item to multi-item tray
  const handleAddToTray = (
    item: MenuItem,
    quantity = 1,
    selectedAccompaniment?: string,
    specialInstructions?: string
  ) => {
    setTrayItems((prev) => {
      const existingIndex = prev.findIndex((t) => t.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (selectedAccompaniment) {
          updated[existingIndex].selectedAccompaniment = selectedAccompaniment;
        }
        if (specialInstructions) {
          updated[existingIndex].specialInstructions = specialInstructions;
        }
        return updated;
      } else {
        return [
          ...prev,
          {
            item,
            quantity,
            selectedAccompaniment,
            specialInstructions,
          },
        ];
      }
    });
  };

  // Update item quantity in tray
  const handleUpdateTrayQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveTrayItem(itemId);
      return;
    }
    setTrayItems((prev) =>
      prev.map((t) => (t.item.id === itemId ? { ...t, quantity: newQty } : t))
    );
  };

  // Remove item from tray
  const handleRemoveTrayItem = (itemId: string) => {
    setTrayItems((prev) => prev.filter((t) => t.item.id !== itemId));
  };

  // Clear all items in tray
  const handleClearTray = () => {
    setTrayItems([]);
  };

  const totalTrayItemCount = trayItems.reduce((acc, t) => acc + t.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#080807] text-[#F7F4EE] antialiased selection:bg-[#E5C158] selection:text-[#080807]">
      {/* Sticky Top Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        trayItemCount={totalTrayItemCount}
        onOpenTray={() => setIsTrayOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {activePage === "home" && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenOrderModal={(item) => setOrderModalItem(item)}
            onOpenRecipeModal={(recipe) => setActiveRecipe(recipe)}
            onAddToTray={handleAddToTray}
          />
        )}

        {activePage === "menu" && (
          <MenuView
            onOpenOrderModal={(item) => setOrderModalItem(item)}
            onAddToTray={handleAddToTray}
            onOpenTray={() => setIsTrayOpen(true)}
            trayItemCount={totalTrayItemCount}
          />
        )}

        {activePage === "smoothies" && (
          <SmoothiesView onAddToTray={handleAddToTray} />
        )}

        {activePage === "delicacies" && (
          <DelicaciesView
            onOpenOrderModal={(item) => setOrderModalItem(item)}
            onAddToTray={handleAddToTray}
          />
        )}

        {activePage === "recipes" && (
          <RecipesView onOpenRecipeModal={(recipe) => setActiveRecipe(recipe)} />
        )}

        {activePage === "about" && <AboutView />}

        {activePage === "contact" && <ContactView />}
      </main>

      {/* Floating Unobtrusive WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Order Customization & WhatsApp Modal */}
      <WhatsAppOrderModal
        item={orderModalItem}
        onClose={() => setOrderModalItem(null)}
        onAddToTray={handleAddToTray}
      />

      {/* Culinary Recipe Detail Modal */}
      <RecipeModal
        recipe={activeRecipe}
        onClose={() => setActiveRecipe(null)}
      />

      {/* Multi-Item WhatsApp Order Tray Drawer */}
      <WhatsAppTrayDrawer
        isOpen={isTrayOpen}
        onClose={() => setIsTrayOpen(false)}
        items={trayItems}
        onUpdateQuantity={handleUpdateTrayQuantity}
        onRemoveItem={handleRemoveTrayItem}
        onClearTray={handleClearTray}
      />

      {/* Dark Luxury Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
