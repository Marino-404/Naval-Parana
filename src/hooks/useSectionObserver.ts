import { useEffect } from "react";
import { useAppState } from "../store/app-state";

export const useSectionObserver = (sectionIds: string[]) => {
  const { setCurrentSection } = useAppState();

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, setCurrentSection]);
};
