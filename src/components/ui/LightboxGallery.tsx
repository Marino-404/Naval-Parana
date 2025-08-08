import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Download,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxGalleryProps {
  images: string[];
  showFullGallery?: boolean;
  onClose?: () => void;
  onOpenImage?: (index: number) => void;
  initialIndex?: number;
}

const backdropVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const LightboxGallery: React.FC<LightboxGalleryProps> = ({
  images,
  showFullGallery = false,
  onClose,
  onOpenImage,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showFullGallery) {
      setCurrentIndex(initialIndex);
    }
  }, [showFullGallery, initialIndex]);

  // Cerrar galería si clickean en el fondo
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current) {
      onClose?.();
    }
  };

  // Compartir con Web Share API o fallback copiar URL
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Imagen de galería",
          url: images[currentIndex],
        })
        .catch((error) => console.log("Error al compartir:", error));
    } else {
      navigator.clipboard
        .writeText(images[currentIndex])
        .then(() => alert("URL copiada al portapapeles"))
        .catch(() => alert("No se pudo copiar la URL"));
    }
  };

  // Descargar imagen actual
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = images[currentIndex];
    link.download = `imagen-${currentIndex + 1}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (showFullGallery) {
    const currentImage = images[currentIndex];

    const goNext = () => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <AnimatePresence>
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-50 bg-primary bg-opacity-90 flex flex-col justify-center items-center"
          onClick={handleBackdropClick}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-4 right-4 text-white cursor-pointer z-50"
            onClick={onClose}
            aria-label="Cerrar galería"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-[800px] w-full h-[70vh] flex justify-center items-center px-4 pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="text-white absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={48} />
            </button>

            <img
              src={currentImage}
              alt={`Imagen ${currentIndex + 1} de galería`}
              className="object-cover rounded-xl max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="text-white absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={48} />
            </button>
          </div>

          {/* Controles compartir y descargar debajo de la imagen */}
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-12 bg-primary bg-opacity-80 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg">
            <button
              onClick={handleShare}
              aria-label="Compartir imagen"
              className="text-white cursor-pointer flex items-center gap-2"
            >
              <ExternalLink size={24} className="text-secondary" />
              <span className="text-detail">Compartir</span>
            </button>

            <button
              onClick={handleDownload}
              aria-label="Descargar imagen"
              className="text-white cursor-pointer flex items-center gap-2"
            >
              <Download size={24} className="text-secondary" />
              <span className="text-detail">Descargar</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex flex-col xl:flex-row mx-auto overflow-x-auto gap-8 xl:w-full w-[90%] items-center justify-center">
      {images.slice(0, 3).map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Preview image ${idx + 1}`}
          className="w-full xl:w-72 h-48 object-cover rounded-lg border-2 border-secondary cursor-pointer"
          onClick={() => onOpenImage && onOpenImage(idx)}
        />
      ))}
    </div>
  );
};

export default LightboxGallery;
