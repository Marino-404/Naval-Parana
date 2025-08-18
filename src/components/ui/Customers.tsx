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
    controls.start({
      x: ["0%", "-80%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section
      className="relative w-full mx-auto flex flex-col items-center text-detail bg-primary"
      style={{ paddingTop: MENU_HEIGHT, boxSizing: "border-box" }}
    >
      <div className="w-[90vw] overflow-hidden">
        <motion.div className="flex gap-4 sm:gap-6" animate={controls}>
          {customers.map((customer) => (
            <motion.div
              key={customer.id}
              className="flex-shrink-0 flex items-center justify-center w-20 sm:w-36 h-14 sm:h-24 bg-gradient-to-br from-detail to-[#b6c8d9] rounded-sm opacity-90 px-3 sm:px-5 py-2 sm:py-3"
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
              className="flex-shrink-0 flex items-center justify-center w-20 sm:w-36 h-14 sm:h-24 bg-gradient-to-br from-detail to-[#b6c8d9] rounded-sm opacity-90 px-3 sm:px-5 py-2 sm:py-3"
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
    </section>
  );
};

export default Customers;
