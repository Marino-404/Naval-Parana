import useInCenter from "../../hooks/useInCenter";
import { useAppState } from "../../store/app-state";

import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";
import aboutnaval from "../../../public/img/camion1.jpg";

const Stats = () => {
  const { lang } = useAppState();
  const { ref, inCenter } = useInCenter<HTMLDivElement>();

  type Stat = {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
  };

  const stats: Stat[] = [
    { label: lang ? "Servicios" : "Services", value: 25, prefix: "+" },
    { label: lang ? "Atención" : "Support", value: 24, suffix: "hs" },
    { label: lang ? "Proyectos" : "Projects", value: 180, prefix: "+" },
  ];

  return (
    <section className="w-full bg-primary flex justify-center items-center py-12">
      <div className="xl:w-[86%] w-full mx-auto rounded-xs overflow-hidden relative flex flex-col xl:flex-row items-center bg-black/45 backdrop-blur-md xl:backdrop-blur-none py-12 xl:py-0">
        {/* Stats */}
        <div
          ref={ref} // 👈 el hook observa este bloque, no el wrapper
          className="flex flex-col xl:flex-row justify-center xl:justify-around items-center z-20 text-detail/85 text-center p-6 gap-12 xl:gap-0 relative xl:absolute xl:inset-0"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-lg md:text-3xl text-secondary font-semibold uppercase">
                {stat.label}
              </span>
              <span className="text-7xl md:text-9xl">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  trigger={inCenter}
                />
              </span>
            </div>
          ))}
        </div>

        {/* Imagen */}
        <motion.div
          className="w-full xl:h-150 relative overflow-hidden group hidden xl:block"
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
          <div className="absolute inset-0 bg-primary/80"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
