import { aboutNavalTextContent } from "../../utils/text-content";
import aboutnaval from "../../../public/img/aboutnaval.jpg";
import { useAppState } from "../../store/app-state";
import { HardHat } from "lucide-react";
import { motion } from "framer-motion";

const AboutNaval = () => {
  const { lang } = useAppState();

  return (
    <section className="w-full py-20 bg-primary px-4">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row rounded-lg overflow-hidden shadow-2xl border-2 border-secondary">
        {/* Imagen */}
        <motion.div
          className="xl:w-1/2 w-full h-96 xl:h-auto"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={aboutnaval}
            alt="Sobre Naval Paraná"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="xl:w-1/2 w-full bg-gradient-to-br from-detail to-[#b6c8d9] p-10 flex flex-col justify-center text-primary"
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
              <HardHat className="w-10 h-10 text-secondary" />
            </motion.div>
            <h2 className="text-3xl font-bold tracking-wide">
              {lang ? "Sobre Nosotros" : "About Us"}
            </h2>
          </div>

          {/* Texto */}
          <p className="text-lg leading-relaxed">
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
