import { WHATSAPP_NUMBER, BRAND } from "../constants/config";
import { MenuItem, SmoothieItem, TrayItem } from "../types";

/**
 * Format currency into Nigerian Naira (₦)
 */
export function formatCurrency(amount: number): string {
  return `${BRAND.currency}${amount.toLocaleString("en-NG")}`;
}

/**
 * Clean and normalize phone number for WhatsApp deep-linking
 */
function getSanitizedNumber(number: string): string {
  return number.replace(/[^0-9]/g, "");
}

/**
 * Generate a WhatsApp order link for a single food or menu item
 */
export function generateSingleItemOrderUrl(
  item: MenuItem,
  quantity = 1,
  accompaniment?: string,
  note?: string
): string {
  const cleanNumber = getSanitizedNumber(WHATSAPP_NUMBER);

  let message = `Hello Zena Foodies 👋\n\n`;
  message += `I’d like to order:\n\n`;
  message += `🍽️ Item: ${item.name}\n`;
  message += `🔢 Quantity: ${quantity}\n`;
  message += `💰 Unit Price: ${formatCurrency(item.price)}\n`;
  message += `💵 Subtotal: ${formatCurrency(item.price * quantity)}\n`;

  if (accompaniment) {
    message += `🥣 Choice of Swallow/Side: ${accompaniment}\n`;
  }

  if (note && note.trim().length > 0) {
    message += `📝 Note: ${note.trim()}\n`;
  }

  message += `\nPlease confirm availability, preparation time, and delivery to my location.\n\nThank you!`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp order link for a smoothie
 */
export function generateSmoothieOrderUrl(
  smoothie: SmoothieItem,
  quantity = 1,
  size = "Regular (500ml)"
): string {
  const cleanNumber = getSanitizedNumber(WHATSAPP_NUMBER);

  let message = `Hello Zena Foodies 👋\n\n`;
  message += `I’d like to order fresh smoothies:\n\n`;
  message += `🥤 Smoothie: ${smoothie.name}\n`;
  message += `🔢 Quantity: ${quantity}\n`;
  message += `📏 Size: ${size}\n`;
  message += `💰 Unit Price: ${formatCurrency(smoothie.price)}\n`;
  message += `💵 Total: ${formatCurrency(smoothie.price * quantity)}\n\n`;
  message += `Please confirm cold delivery availability.\n\nThank you!`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp order link for a multi-item tray / order basket
 */
export function generateTrayOrderUrl(
  items: TrayItem[],
  customerName?: string,
  deliveryAddress?: string
): string {
  const cleanNumber = getSanitizedNumber(WHATSAPP_NUMBER);

  let message = `Hello Zena Foodies 👋\n\n`;
  message += `I’d like to place an order from your menu:\n\n`;

  let grandTotal = 0;

  items.forEach((trayItem, index) => {
    const itemTotal = trayItem.item.price * trayItem.quantity;
    grandTotal += itemTotal;
    message += `${index + 1}. ${trayItem.quantity} × ${trayItem.item.name}`;
    if (trayItem.selectedAccompaniment) {
      message += ` (with ${trayItem.selectedAccompaniment})`;
    }
    message += ` — ${formatCurrency(itemTotal)}\n`;

    if (trayItem.specialInstructions) {
      message += `   Note: ${trayItem.specialInstructions}\n`;
    }
  });

  message += `\n💵 Estimated Total: ${formatCurrency(grandTotal)}\n`;

  if (customerName && customerName.trim().length > 0) {
    message += `👤 Name: ${customerName.trim()}\n`;
  }

  if (deliveryAddress && deliveryAddress.trim().length > 0) {
    message += `📍 Delivery Location: ${deliveryAddress.trim()}\n`;
  }

  message += `\nPlease confirm availability and delivery timeframe.\n\nThank you!`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a generic WhatsApp chat / inquiry URL
 */
export function generateGeneralInquiryUrl(topic = "General Inquiry"): string {
  const cleanNumber = getSanitizedNumber(WHATSAPP_NUMBER);
  const message = `Hello Zena Foodies 👋\n\nI’m reaching out regarding: ${topic}.\nI would love to learn more about today’s specials and catering options.\n\nThank you!`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
