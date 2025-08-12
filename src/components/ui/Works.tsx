import { useState, useEffect } from "react";
import { useAppState } from "../../store/app-state";
import {
  worksContent1,
  worksContent2,
  worksContent3,
} from "../../utils/text-content";
import { ChevronDown, ClipboardCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WorksProps {
  group: 1 | 2 | 3;
}

const Works: React.FC<WorksProps> = ({ group }) => {
  const { lang } = useAppState();
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    setIsDesktop(mediaQuery.matches);
    setOpen(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
      setOpen(event.matches);
    };
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const getWorks = () => {
    switch (group) {
      case 1:
        return lang ? worksContent1.es : worksContent1.en;
      case 2:
        return lang ? worksContent2.es : worksContent2.en;
      case 3:
        return lang ? worksContent3.es : worksContent3.en;
      default:
        return [];
    }
  };

  const works = getWorks();

  const title =
    group === 1
      ? lang
        ? "Reparaciones"
        : "Repairs"
      : group === 2
      ? lang
        ? "Mantenimiento y montajes"
        : "Maintenance & assemblies"
      : lang
      ? "Montajes"
      : "Assemblies";

  return (
    <div className="xl:w-[40%] w-[80%] mx-auto mb-6 xl:mb-12">
      {/* Siempre mostramos el rectángulo */}
      <div
        className={`h-12 mb-6 w-full flex justify-between border-r  items-center bg-gradient-to-br from-detail to-[#b6c8d9] p-4 rounded-sm border border-secondary shadow-lg transition-all duration-300 ${
          isDesktop ? "cursor-default" : "cursor-pointer"
        }`}
        // Solo toggle en mobile
        onClick={() => !isDesktop && setOpen(!open)}
        aria-expanded={open}
        aria-controls={`works-list-${group}`}
        role={!isDesktop ? "button" : undefined}
        tabIndex={!isDesktop ? 0 : undefined}
        onKeyDown={(e) => {
          if (!isDesktop && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setOpen(!open);
          }
        }}
      >
        <h3 className="text-primary text-xl font-light">{title}</h3>
        {/* Mostrar ícono solo en mobile */}
        {!isDesktop && (
          <ChevronDown
            className={`text-secondary w-6 h-6 transform transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>

      <AnimatePresence initial={false}>
        {(open || isDesktop) && (
          <motion.ul
            id={`works-list-${group}`}
            role="region"
            aria-labelledby={`works-list-${group}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-0 space-y-3 overflow-hidden px-4  border-r border-b border-secondary" // mt-0 para que quede pegado al rectángulo
          >
            {works.map((work, index) => (
              <li
                key={index}
                className="flex items-center gap-3 max-w-full text-start mb-6"
                style={{ minWidth: 0 }}
              >
                <ClipboardCheck className="text-secondary w-6 h-6 flex-shrink-0" />
                <p className="text-detail text-md font-light leading-snug break-words flex-grow min-w-0">
                  {work.title}
                </p>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Works;
