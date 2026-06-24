import { useState, useEffect } from "react";

export type ThemeId =
  // CYAN
  | "cyan-snow"
  | "cyan-frost"
  | "cyan-navy"
  | "cyan-abyss"
  // AMBER
  | "amber-cloud"
  | "amber-cream"
  | "amber-dusk"
  | "amber-coal"
  // CORAL
  | "coral-snow"
  | "coral-blush"
  | "coral-slate"
  | "coral-void";
// Auskommentiert: cyber-navy | void-green | velvet-purple | ember |
// studio-light | rose-light | sage-light | amber-light |
// arctic-light | paper-light | midnight | carbon

const STORAGE_KEY = "revelop-theme";
const DEFAULT_THEME: ThemeId = "amber-cloud";

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
      if (stored) setThemeState(stored);
      // eslint-disable-next-line no-empty
    } catch {}
  }, []);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
      // eslint-disable-next-line no-empty
    } catch {}
    if (newTheme === "cyber-navy") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  return { theme, setTheme };
}
