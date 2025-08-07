import { aboutNavalTextContent } from "../../utils/text-content";
import aboutnaval from "../../../public/img/aboutnaval.jpg";
import { useAppState } from "../../store/app-state";
import { HardHat } from "lucide-react";
import { motion } from "framer-motion";

const AboutNaval = () => {
  const { lang } = useAppState();

  return (
    <section className="w-full bg-primary pb-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center gap-10">
        {/* Imagen con overlay */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={aboutnaval}
            alt="Sobre Naval Paraná"
            className="w-full max-w-xl h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
        </motion.div>

        {/* Tarjeta de texto mejorada */}
        <motion.div
          className="flex flex-col justify-center max-w-xl bg-gradient-to-br from-detail to-[#b6c8d9] rounded-xl border-2 border-secondary p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-primary"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Encabezado con icono */}
          <div className="flex items-center gap-2 mb-6">
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
              <HardHat className="xl:w-12 xl:h-12 w-10 h-10  text-secondary flex" />
            </motion.div>
            <h2 className="text-3xl font-bold tracking-wide">
              {lang ? "Sobre Nosotros" : "About Us"}
            </h2>
          </div>

          {/* Texto */}
          <p className="text-lg leading-relaxed">
            {aboutNavalTextContent(lang).h1}
          </p>

          {/* Línea inferior */}
          <div className="w-full h-[2px] bg-secondary/60 rounded-full mt-6"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutNaval;
