import { motion } from "framer-motion";
import aboutnaval from "../../../public/img/camion1.jpg";
import { useAppState } from "../../store/app-state";

const ServicesSection = () => {
  const { lang } = useAppState();
  return (
    <section className="w-full bg-primary flex items-center">
      <div className="xl:w-[86%] w-full mx-auto rounded-xs overflow-hidden shadow-lg">
        {/* Imagen */}
        <motion.div
          className="w-full xl:h-150 relative overflow-hidden group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={aboutnaval}
            alt={lang ? "Sobre Naval Paraná" : "About Naval Paraná"}
            className="w-full h-full object-cover object-top transform transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Overlay azul */}
          <div className="absolute inset-0 bg-primary/40"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
