import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutnaval from "../../../public/img/camion1.jpg";
import { useAppState } from "../../store/app-state";
import AnimatedCounter from "./AnimatedCounter";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

const ServicesSection = () => {
  const { lang } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const stats: Stat[] = [
    { label: lang ? "Servicios" : "Services", value: 25, prefix: "+" },
    { label: lang ? "Atención" : "Support", value: 24, suffix: "/7" },
    {
      label: lang ? "Proyectos" : "Projects",
      value: 180,
      prefix: "+",
    },
  ];

  return (
    <section className="w-full bg-primary flex items-center">
      <div
        className="xl:w-[86%] w-full mx-auto rounded-xs overflow-hidden shadow-lg relative"
        ref={ref}
      >
        {/* Overlay azul */}
        <motion.div
          className="absolute inset-0 flex justify-around items-center z-20 text-detail/85 text-center p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col ">
              <span className="text-xs md:text-3xl text-secondary font-semibold uppercase">
                {stat.label}
              </span>
              <span className="text-4xl md:text-8xl font-bold">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  trigger={isInView}
                />
              </span>
            </div>
          ))}
        </motion.div>
        <div className="w-full h-[2px] bg-secondary/60 rounded-full mt-6"></div>

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
          <div className="absolute inset-0 bg-primary/80"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
