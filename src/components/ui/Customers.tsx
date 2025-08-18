import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect } from "react";

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
    const isMobile = window.innerWidth < 640;

    controls.start({
      x: isMobile ? ["0%", "-160%"] : ["0%", "-80%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: isMobile ? 8 : 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);
  return (
    <section className="relative w-full mx-auto flex flex-col items-center text-detail bg-primary pt-20 ">
      <div className="xl:w-[86%] w-[94%] overflow-hidden">
        <motion.div className="flex gap-4 sm:gap-6" animate={controls}>
          {customers.map((customer) => (
            <motion.div
              key={customer.id}
              className="flex-shrink-0 flex items-center justify-center w-38 sm:w-64 h-20 sm:h-32 bg-gradient-to-br from-detail to-[#b6c8d9] rounded-xs  px-3 sm:px-5 py-2 sm:py-3"
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
              className="flex-shrink-0 flex items-center justify-center w-38 sm:w-44 h-20 sm:h-32 bg-gradient-to-br from-detail to-[#b6c8d9] rounded-xs  px-3 sm:px-5 py-2 sm:py-3"
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
