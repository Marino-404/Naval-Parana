import { useAppState } from "../store/app-state";

export const useLanguage = () => {
  const { lang, changeLang } = useAppState();
  const toggleLanguage = () => changeLang(!lang);

  return { lang, toggleLanguage };
};
