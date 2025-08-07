import { motion } from "framer-motion";

const SectionDivider = ({ label }: { label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative flex items-center justify-center w-full mt-12 xl:mt-18 mb-20"
    >
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50" />
      <span className="absolute px-4 text-detail text-sm xl:text-base font-semibold tracking-widest uppercase backdrop-blur-sm bg-background/60 rounded-md">
        {label}
      </span>
    </motion.div>
  );
};

export default SectionDivider;
