import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useAppState } from "../../store/app-state";

const customers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/img/customers/customers${i + 1}.png`,
  alt: `Customer ${i + 1}`,
}));

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Componente LogoItem para claridad y performance
const LogoItem = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    className="customer-item flex-shrink-0 flex items-center justify-center w-38 sm:w-64 h-20 sm:h-32 bg-gradient-to-br from-detail to-[#b6c8d9] rounded-xs px-3 sm:px-5 py-2 sm:py-3"
    variants={itemVariants}
  >
    <img
      src={src}
      alt={`Logo ${alt}`}
      className="max-h-full max-w-full object-contain"
      loading="lazy"
    />
  </motion.div>
);

const Customers = () => {
  const { lang } = useAppState();
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        const firstItem =
          containerRef.current.querySelector<HTMLDivElement>(".customer-item");
        if (firstItem) setItemWidth(firstItem.offsetWidth + 16); // +16 por gap
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  useEffect(() => {
    if (!itemWidth) return;

    const isMobile = window.innerWidth < 640;
    const distance = itemWidth * customers.length;

    controls.start({
      x: [0, -distance],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isMobile ? 12 : 20,
          ease: "linear",
        },
      },
    });
  }, [controls, itemWidth]);

  return (
    <section
      className="relative w-full mx-auto flex flex-col items-center text-detail bg-primary pt-20"
      aria-label={lang ? "Clientes" : "Customers"}
    >
      <div className="xl:w-[86%] w-[94%] overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-4 sm:gap-6"
          animate={controls}
        >
          {/* Items originales */}
          {customers.map((customer) => (
            <LogoItem key={customer.id} src={customer.src} alt={customer.alt} />
          ))}

          {/* Duplicados para loop infinito */}
          {customers.map((customer) => (
            <LogoItem
              key={`duplicate-${customer.id}`}
              src={customer.src}
              alt={customer.alt}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;
