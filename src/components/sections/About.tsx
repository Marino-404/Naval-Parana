import { aboutNavalTextContent } from "../../utils/text-content";
import aboutnaval from "../../../public/img/naval1.jpg";
import { useAppState } from "../../store/app-state";
import { HardHat } from "lucide-react";
import { motion } from "framer-motion";

const AboutNaval = () => {
  const { lang } = useAppState();

  return (
    <section id="about" className="w-full xl:py-24 py-28 bg-primary ">
      <div className="xl:w-[86%] w-[94%] mx-auto flex flex-col xl:flex-row rounded-xs overflow-hidden">
        {/* Imagen */}
        <motion.div
          className="xl:w-1/2 w-full h-96 xl:h-150 overflow-hidden group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={aboutnaval}
            alt="Sobre Naval Paraná"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Overlay azul */}
        </motion.div>

        {/* Texto */}
        <motion.div
          className="xl:w-1/2 w-full bg-gradient-to-br from-detail to-[#b6c8d9] pl-8 p-10 xl:pl-10 xl:p-24 flex flex-col justify-center  text-primary"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Encabezado con icono */}
          <div className="flex flex-col items-start text-start gap-2 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: 0.4,
              }}
            >
              <HardHat className="w-14 h-14 text-secondary" />
            </motion.div>
            <h2 className="text-5xl font-bold tracking-wide">
              {lang ? "Sobre Nosotros" : "About Us"}
            </h2>
          </div>

          {/* Texto */}
          <p className="text-lg leading-relaxed opacity-60">
            {aboutNavalTextContent(lang).h1}
          </p>

          {/* Línea inferior decorativa */}
          <div className="w-full h-[2px] bg-secondary/60 rounded-full mt-6"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutNaval;
