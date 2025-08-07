import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { textContent } from "../../utils/text-content";
import { galleryImages } from "../../utils/galleries";
import LightboxGallery from "./LightboxGallery";
import Button from "./Button";
import { useAppState } from "../../store/app-state";
import SectionDivider from "./SectionDivider";

const GallerySection: React.FC = () => {
  const { lang } = useAppState();
  const [activeSection, setActiveSection] = useState<
    null | "one" | "two" | "three"
  >(null);

  useEffect(() => {
    if (activeSection) {
      // Bloquea scroll
      document.body.style.overflow = "hidden";
    } else {
      // Permite scroll
      document.body.style.overflow = "";
    }
    // Limpieza por si se desmonta
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSection]);

  const sections: Array<"one" | "two" | "three"> = ["one", "two", "three"];

  return (
    <div className="flex flex-col xl:w-[80%] w-full mx-auto gap-20  text-center items-center mb-24">
      {sections.map((key) => (
        <motion.div
          key={key}
          id={key}
          className="flex flex-col w-full text-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionDivider
            label={textContent(lang).gallerySections[key].title}
          />
          <LightboxGallery images={galleryImages[key]} />
          <div className="mt-8">
            <Button onClick={() => setActiveSection(key)}>
              {textContent(lang).gallerySections[key].cta}
            </Button>
          </div>
        </motion.div>
      ))}

      {activeSection && (
        <LightboxGallery
          images={galleryImages[activeSection]}
          showFullGallery
          onClose={() => setActiveSection(null)}
        />
      )}
    </div>
  );
};

export default GallerySection;
