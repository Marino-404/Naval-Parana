import { useState } from "react";
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

  return (
    <div className="w-[90%] max-w-3xl mx-auto mb-12">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-full flex justify-between items-center bg-gradient-to-br from-detail to-[#b6c8d9] p-4 rounded-lg border-1 border-secondary shadow-lg hover:shadow-xl transition-all duration-300"
        aria-expanded={open}
        aria-controls="works-list"
      >
        <h3 className="text-primary text-xl font-light">
          {group === 1
            ? lang
              ? "Trabajos"
              : "Works"
            : group === 2
            ? lang
              ? "Trabajos"
              : "Works"
            : lang
            ? "Trabajos"
            : "Works"}
        </h3>
        <ChevronDown
          className={`cursor-pointer text-secondary w-6 h-6 transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id="works-list"
            role="region"
            aria-labelledby="works-list"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-6 space-y-3 pl-0 overflow-hidden"
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
