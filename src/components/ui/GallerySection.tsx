import { useState, useEffect } from "react";
import { textContent } from "../../utils/text-content";
import { galleryImages } from "../../utils/galleries";
import LightboxGallery from "./LightboxGallery";
import Button from "./Button";
import { useAppState } from "../../store/app-state";
import SectionDivider from "./SectionDivider";
import Works from "./Works";

type SectionKey = "one" | "two" | "three";

const MENU_HEIGHT = 80;

const GallerySection: React.FC = () => {
  const { lang } = useAppState();

  const [activeSection, setActiveSection] = useState<null | {
    key: SectionKey;
    startIndex: number;
  }>(null);

  const [sectionMinHeight, setSectionMinHeight] = useState(0);

  useEffect(() => {
    document.body.style.overflow = activeSection ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSection]);

  useEffect(() => {
    function updateHeight() {
      setSectionMinHeight(window.innerHeight - MENU_HEIGHT);
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const sections: SectionKey[] = ["one", "two", "three"];

  const sectionMap: Record<SectionKey, 1 | 2 | 3> = {
    one: 1,
    two: 2,
    three: 3,
  };

  return (
    <div className="flex flex-col w-full mx-auto text-center items-center ">
      {sections.map((key) => (
        <div
          key={key}
          id={key}
          className="flex flex-col w-full justify-center "
          style={{ paddingTop: `${MENU_HEIGHT}px`, boxSizing: "border-box" }}
        >
          <SectionDivider
            label={textContent(lang).gallerySections[key].title}
          />

          <div
            className="flex flex-col w-full items-center  "
            style={{
              minHeight: sectionMinHeight,
            }}
          >
            <Works group={sectionMap[key]} />

            <LightboxGallery
              images={galleryImages[key]}
              onOpenImage={(idx) => setActiveSection({ key, startIndex: idx })}
            />

            <div className="mt-6 ">
              <Button onClick={() => setActiveSection({ key, startIndex: 0 })}>
                {textContent(lang).gallerySections[key].cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

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
