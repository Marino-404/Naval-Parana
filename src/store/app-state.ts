import { create } from "zustand";

export interface AppState {
  lang: boolean;
  showMenu: boolean;
  changeLang: (lang: boolean) => void;
  setShowMenu: (showMenu: boolean) => void;
}

export const useAppState = create<AppState>((set) => ({
  lang: true,
  showMenu: false,
  changeLang: (lang: boolean) => set({ lang: lang }),
  setShowMenu: (showMenu: boolean) => set({ showMenu: showMenu }),
}));
