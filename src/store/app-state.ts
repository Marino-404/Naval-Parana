import { create } from "zustand";

export interface AppState {
  lang: boolean;
  showMenu: boolean;
  activeSection: null | "one" | "two" | "three";
  changeLang: (lang: boolean) => void;
  setShowMenu: (showMenu: boolean) => void;
  setActiveSection: (section: null | "one" | "two" | "three") => void;
}

export const useAppState = create<AppState>((set) => ({
  lang: true,
  showMenu: false,
  activeSection: null,
  changeLang: (lang: boolean) => set({ lang }),
  setShowMenu: (showMenu: boolean) => set({ showMenu }),
  setActiveSection: (activeSection) => set({ activeSection }),
}));
