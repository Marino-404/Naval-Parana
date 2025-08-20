import { useAppState } from "../../store/app-state";
import { motion } from "framer-motion";
import aboutnaval from "../../../public/img/naval.jpg";
import { CircleChevronRight, Truck } from "lucide-react";

const ServicesSection = () => {
  const { lang } = useAppState();

  // Lista de servicios (en español/inglés)
  const services = lang
    ? [
        "Departamento de ingeniería propia",
        "Taller equipado",
        "Camiones y equipos de transporte",
        "Embarcaciones propias",
        "Personal especializado con carnet PBIP",
        "Licenciados en Seguridad e Higiene con carnet PBIP",
      ]
    : [
        "Own engineering department",
        "Equipped workshop",
        "Trucks and transport equipment",
        "Own boats",
        "Specialized personnel with PBIP certificate",
        "Licensed in Safety and Hygiene with PBIP certificate",
      ];

  return (
    <section
      id="equipment"
      className="w-full min-h-screen bg-primary py-24 flex items-center"
    >
      <div className="xl:w-[86%] w-[94%] mx-auto flex flex-col xl:flex-row rounded-xs overflow-hidden shadow-lg">
        {/* Imagen */}
        <motion.div
          className="xl:w-1/2 w-full "
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={aboutnaval}
            alt={lang ? "Sobre Naval Paraná" : "About Naval Paraná"}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="xl:w-1/2 w-full bg-gradient-to-br from-detail to-[#b6c8d9]  pl-8 p-10 xl:pl-10 xl:p-24 flex flex-col justify-center text-primary"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Encabezado con ícono */}
          <div className="flex flex-col items-start text-start mb-6">
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
              <Truck className="w-14 h-14 text-secondary " />
            </motion.div>
            <h2 className="text-4xl xl:text-5xl font-bold tracking-wide leading-tight">
              {lang ? "Equipo e instalaciones" : "Equipment and facilities"}
            </h2>
          </div>

          {/* Lista de servicios */}
          <ul className="flex flex-col gap-3">
            {services.map((item, index) => (
              <li
                key={index}
                className="text-base xl:text-lg text-primary flex items-start gap-2"
              >
                <CircleChevronRight className="text-secondary w-5 h-5 self-start flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Línea inferior decorativa */}
          <div className="w-full h-[2px] bg-secondary/60 rounded-full mt-6"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
