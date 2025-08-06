import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxGalleryProps {
  images: string[];
  showFullGallery?: boolean;
  onClose?: () => void;
}

const LightboxGallery: React.FC<LightboxGalleryProps> = ({
  images,
  showFullGallery = false,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    if (showFullGallery) {
      setAnimating(true);
      const timer = setTimeout(() => setAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showFullGallery]);

  if (showFullGallery) {
    const currentImage = images[currentIndex];

    const goNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div
        className={`fixed inset-0 z-50 bg-primary bg-opacity-90 flex flex-col justify-center items-center transition-all duration-300 ${
          animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
        onWheel={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white cursor-pointer z-50"
          onClick={onClose}
        >
          <X size={32} />
        </button>

        <div className="flex flex-col md:flex-row items-center gap-8 px-4 max-w-full w-full justify-center">
          <button onClick={goPrev} className="text-white cursor-pointer z-40">
            <ChevronLeft size={48} />
          </button>

          <img
            src={currentImage}
            alt="Gallery"
            className="w-[90vw] max-w-[600px] h-[70vh] object-cover rounded-xl"
          />

          <button onClick={goNext} className="text-white cursor-pointer z-40">
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row overflow-x-auto gap-4 w-full">
      {images.slice(0, 3).map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Preview image ${idx + 1}`}
          className="w-full md:w-72 h-48 object-cover rounded-xl"
        />
      ))}
    </div>
  );
};

export default LightboxGallery;
