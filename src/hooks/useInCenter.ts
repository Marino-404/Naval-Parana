import { useEffect, useRef, useState } from "react";

function useInCenter<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inCenter, setInCenter] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          const viewportCenter = viewportHeight / 2;

          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            setInCenter(true);
          } else {
            setInCenter(false);
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, inCenter };
}

export default useInCenter;
