import { branding } from "../config/branding";

export function applyTheme() {
  const root = document.documentElement;

  root.style.setProperty("--color-primary", branding.colors.primary);
  root.style.setProperty("--color-secondary", branding.colors.secondary);
  root.style.setProperty("--color-accent", branding.colors.accent);
  root.style.setProperty("--color-background", branding.colors.background);
  root.style.setProperty("--color-text", "#ffffff");
}
