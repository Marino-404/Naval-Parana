import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionDivider from "./SectionDivider";
import { useAppState } from "../../store/app-state";

const customers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/img/customers/customers${i + 1}.png`,
  alt: `Customer ${i + 1}`,
}));

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Customers = () => {
  const { lang } = useAppState();

  return (
    <section
      id="four"
      className="relative xl:w-[80%] w-full mx-auto flex flex-col items-center text-detail mb-24"
    >
      <SectionDivider label={lang ? "Clientes" : "Customers"} />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 px-8 gap-12 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {customers.map((customer) => (
          <motion.div
            key={customer.id}
            className="flex items-center justify-center bg-gradient-to-br from-detail to-[#b6c8d9] rounded-lg border-2 border-secondary opacity-90 px-5 py-5"
            variants={itemVariants}
            whileHover={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={customer.src}
              alt={customer.alt}
              className="max-h-16 sm:max-h-20 xl:max-h-24 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Customers;
