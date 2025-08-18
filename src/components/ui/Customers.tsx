import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect } from "react";

const MENU_HEIGHT = 80;

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

const Customers = () => {
  const controls = useAnimation();

  useEffect(() => {
    const isMobile = window.innerWidth < 640; // Tailwind sm breakpoint
    const duration = isMobile ? 6 : 20; // más rápido en mobile

    controls.start({
      x: ["0%", "-80%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section
      className="relative w-full mx-auto items-center justify-center flex flex-col  text-detail bg-primary"
      style={{ paddingTop: MENU_HEIGHT, boxSizing: "border-box" }}
    >
      <div className="w-[80%]  mx-auto h-px bg-gray-600 opacity-40 xl:my-20 my-12" />

      <div className="w-[96vw] overflow-hidden">
        <motion.div className="flex gap-4 sm:gap-6" animate={controls}>
          {customers.map((customer) => (
            <motion.div
              key={customer.id}
              className="flex-shrink-0 flex items-center justify-center w-20 sm:w-36 h-14 sm:h-24 bg-gradient-to-br from-detail to-[#b6c8d9] rounded-sm opacity-50 px-3 sm:px-5 py-2 sm:py-3"
              variants={itemVariants}
            >
              <img
                src={customer.src}
                alt={customer.alt}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          ))}
          {/* Repetimos los mismos items para loop */}
          {customers.map((customer) => (
            <motion.div
              key={`duplicate-${customer.id}`}
              className="flex-shrink-0 flex items-center justify-center w-28 sm:w-36 h-20 sm:h-24 bg-gradient-to-br from-detail to-[#b6c8d9] rounded-sm opacity-50 px-3 sm:px-5 py-2 sm:py-3"
              variants={itemVariants}
            >
              <img
                src={customer.src}
                alt={customer.alt}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-[80%]  mx-auto h-px bg-gray-600 opacity-40 xl:my-20 my-12" />
    </section>
  );
};

export default Customers;
