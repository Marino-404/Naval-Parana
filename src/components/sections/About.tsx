import { useAppState } from "../../store/app-state";
import { aboutTextContent } from "../../utils/text-content";
import AboutImage from "../../../public/img/about2.png";
import { Typewriter } from "react-simple-typewriter";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const About = () => {
  const { lang } = useAppState();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlayOpacity = Math.min(0.8 + scrollY / 800, 0.95); // capa base más oscura y más opaca con scroll

  return (
    <section
      className="relative w-full flex flex-col items-center text-white gap-6 px-4 sm:px-6 pb-20 overflow-hidden bg-primary"
      // agregamos bg-primary al contenedor para que el fondo que se ve sea ese color
    >
      <img
        src={AboutImage}
        alt="Naval Paraná - fondo"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-100"
      />

      {/* Capa oscura con opacidad base más alta */}
      <div
        className="absolute inset-0 bg-[#021d3d] z-10"
        style={{ opacity: overlayOpacity }}
      />

      <motion.div
        className="relative xl:mt-58 mt-40 z-10 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-6xl sm:text-5xl xl:text-7xl font-bold text-detail mb-4 tracking-wide uppercase"
          variants={fadeUp}
        >
          {aboutTextContent(lang).title}
        </motion.h1>

        <motion.div
          className="text-base sm:text-lg xl:text-xl flex flex-col sm:flex-row justify-center gap-1 sm:gap-2 text-detail"
          variants={fadeUp}
        >
          <h2 className="custom-font-montserrat font-light">
            {aboutTextContent(lang).subtitle}
          </h2>
          <span className="text-secondary font-bold">
            <Typewriter
              words={[
                lang ? "Ingeniería." : "Engineering.",
                lang ? "Reparaciones portuarias." : "Port Repairs.",
                lang ? "Montajes." : "Assemblies.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={20}
              delaySpeed={3000}
            />
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 mt-2 sm:mt-6 xl:mb-32 mb-24"
        variants={fadeUp}
      >
        <Button>
          {lang ? "Disponibilidad inmediata" : "Immediate Availability"}
        </Button>
      </motion.div>
    </section>
  );
};

export default About;
