import { useState } from "react";
import { textContent } from "../utils/text-content";
import { galleryImages } from "../utils/galleries";
import LightboxGallery from "./ui/LightboxGallery";
import Button from "./ui/Button";
import { useAppState } from "../store/app-state";

const SectionDivider = ({ label }: { label: string }) => {
  return (
    <div className="relative flex items-center justify-center w-full my-12">
      <div className="w-full h-px bg-gray-600 opacity-40" />
      <span className="absolute bg-primary px-4 text-sm md:text-base text-detail font-light tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
};

const GallerySection: React.FC = () => {
  const { lang } = useAppState();
  const [activeSection, setActiveSection] = useState<
    null | "one" | "two" | "three"
  >(null);

  const sections: Array<"one" | "two" | "three"> = ["one", "two", "three"];

  return (
    <div className="flex flex-col w-[80%] mx-auto gap-20 py-10 text-center items-center">
      {sections.map((key) => (
        <div key={key} className="flex flex-col gap-8 text-center items-center">
          <SectionDivider
            label={textContent(lang).gallerySections[key].title}
          />
          <LightboxGallery images={galleryImages[key]} />
          <div>
            <Button onClick={() => setActiveSection(key)}>
              {textContent(lang).gallerySections[key].cta}
            </Button>
          </div>
        </div>
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
