import { useState, useEffect } from "react";
import { textContent } from "../../utils/text-content";
import { galleryImages } from "../../utils/galleries";
import LightboxGallery from "./LightboxGallery";
import Button from "./Button";
import { useAppState } from "../../store/app-state";
import SectionDivider from "./SectionDivider";
import Works from "./Works1"; // tu Works que acepta prop group

type SectionKey = "one" | "two" | "three";

const GallerySection: React.FC = () => {
  const { lang } = useAppState();

  const [activeSection, setActiveSection] = useState<null | {
    key: SectionKey;
    startIndex: number;
  }>(null);

  useEffect(() => {
    document.body.style.overflow = activeSection ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSection]);

  const sections: SectionKey[] = ["one", "two", "three"];

  // Relaciona cada sección con el grupo Works correspondiente
  const sectionMap: Record<SectionKey, 1 | 2 | 3> = {
    one: 1,
    two: 2,
    three: 3,
  };

  return (
    <div className="flex flex-col xl:w-[80%] w-full mx-auto gap-20 text-center items-center mb-24">
      {sections.map((key) => (
        <div
          key={key}
          id={key}
          className="flex flex-col w-full text-center items-center"
        >
          <SectionDivider
            label={textContent(lang).gallerySections[key].title}
          />

          {/* Works correspondiente */}
          <Works group={sectionMap[key]} />

          {/* Preview con click para abrir full gallery */}
          <LightboxGallery
            images={galleryImages[key]}
            onOpenImage={(idx) => setActiveSection({ key, startIndex: idx })}
          />

          <div className="mt-14">
            <Button onClick={() => setActiveSection({ key, startIndex: 0 })}>
              {textContent(lang).gallerySections[key].cta}
            </Button>
          </div>
        </div>
      ))}

      {/* Galería fullscreen */}
      {activeSection && (
        <LightboxGallery
          images={galleryImages[activeSection.key]}
          showFullGallery
          initialIndex={activeSection.startIndex}
          onClose={() => setActiveSection(null)}
        />
      )}
    </div>
  );
};

export default GallerySection;
